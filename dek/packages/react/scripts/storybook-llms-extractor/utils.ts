/**
 * Custom storybook-llms-extractor - Utilities
 * Based on @fluentui/storybook-llms-extractor (MIT License)
 * @see https://github.com/microsoft/fluentui/tree/master/tools/storybook-llms-extractor
 */

import { mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { join, resolve, extname, dirname, basename } from "node:path";
import { existsSync, readFileSync } from "node:fs";

import { type BrowserContext, type Page, chromium } from "@playwright/test";
import Turndown from "turndown";
import { strikethrough, tables, taskListItems } from "turndown-plugin-gfm";

import type {
  Args,
  StorybookComponentProp,
  StorybookComponent,
  StorybookStoreItem,
  VisualMeta,
} from "./types.js";

/**
 * Get content type based on file extension
 */
function getContentType(ext: string): string {
  const contentTypes: Record<string, string> = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".eot": "application/vnd.ms-fontobject",
  };

  return contentTypes[ext] || "application/octet-stream";
}

/**
 * Sets up static file serving using Playwright's page.route
 */
async function setupStaticRouting(page: Page, distPath: string) {
  await page.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    let filePath = url.pathname;

    // Remove leading slash and resolve relative to distPath
    if (filePath.startsWith("/")) {
      filePath = filePath.substring(1);
    }

    // If no file extension, try to serve index.html
    if (!extname(filePath)) {
      filePath = join(filePath, "index.html");
    }

    const fullPath = resolve(distPath, filePath);

    try {
      // Security check: ensure file is within distPath
      if (existsSync(fullPath) && fullPath.startsWith(resolve(distPath))) {
        const content = await readFile(fullPath);
        const contentType = getContentType(extname(fullPath));

        await route.fulfill({
          status: 200,
          contentType,
          body: content,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        });
      } else {
        await route.fulfill({
          status: 404,
          body: "File not found",
        });
      }
    } catch (error) {
      console.error(`Error serving file ${fullPath}:`, error);
      await route.fulfill({
        status: 500,
        body: "Internal server error",
      });
    }
  });
}

/**
 * Storybook Client API store
 */
type StorybookStoryStore = {
  cacheAllCSFFiles: () => Promise<void>;
  cachedCSFFiles?: Record<string, StorybookStoreItem>;
};

/**
 * Storybook globals on window
 */
interface StorybookGlobals extends Window {
  __STORYBOOK_PREVIEW__?:
    | { storyStore: StorybookStoryStore }
    | { storyStoreValue: StorybookStoryStore };
}

/**
 * Extracts all stories from Storybook Client API store.
 */
async function extractAllStoriesFromStorybook(
  context: BrowserContext,
  distPath: string,
) {
  const page = await context.newPage();

  await setupStaticRouting(page, distPath);

  await page.goto(`http://localhost/iframe.html`);

  // Wait for the Storybook Client API to be loaded
  await page.waitForFunction(() => {
    return (globalThis as unknown as StorybookGlobals).__STORYBOOK_PREVIEW__;
  });

  const stories: StorybookStoreItem[] = await page.evaluate(`(async () => {
    const preview = window.__STORYBOOK_PREVIEW__;

    if (!preview) {
      throw new Error("Unable to find Storybook preview");
    }

    let storyStore;
    if ("storyStoreValue" in preview && preview.storyStoreValue) {
      storyStore = preview.storyStoreValue;
    } else if ("storyStore" in preview && preview.storyStore) {
      storyStore = preview.storyStore;
    } else {
      throw new Error("Unable to find Storybook story store");
    }

    await storyStore.cacheAllCSFFiles();

    if (!storyStore.cachedCSFFiles) {
      throw new Error("Unable to find cached CSF files in Storybook store");
    }

    return Object.values(storyStore.cachedCSFFiles).map((item) => ({
      meta: {
        id: item.meta.id,
        title: item.meta.title,
        tags: item.meta.tags || [],
        parameters: {
          fileName: item.meta.parameters.fileName,
          docs: item.meta.parameters.docs
            ? { description: item.meta.parameters.docs.description }
            : undefined,
        },
        component: item.meta.component
          ? {
              displayName: item.meta.component.displayName,
              __docgenInfo: item.meta.component.__docgenInfo,
            }
          : undefined,
        subcomponents: item.meta.subcomponents
          ? Object.fromEntries(
              Object.entries(item.meta.subcomponents).map(([key, comp]) => [
                key,
                {
                  displayName: comp.displayName,
                  __docgenInfo: comp.__docgenInfo,
                },
              ]),
            )
          : undefined,
      },
      stories: Object.fromEntries(
        Object.entries(item.stories).map(([key, story]) => [
          key,
          {
            id: story.id,
            name: story.name,
            parameters: {
              docs: story.parameters.docs,
              fullSource: story.parameters.fullSource,
              docsOnly: story.parameters.docsOnly,
            },
          },
        ]),
      ),
    }));
  })()`);

  await page.close();
  return stories;
}

/**
 * Extracts MDX story content from a given URL using a browser.
 */
async function extractMDXStoryContentWithBrowser(
  url: string,
  context: BrowserContext,
  distPath: string,
) {
  try {
    const page = await context.newPage();

    await setupStaticRouting(page, distPath);

    console.info(`Extracting: "${url}"`);
    await page.goto(url);

    await page.waitForSelector(".sbdocs-content", {
      state: "attached",
      timeout: 2000,
    });
    const html = await page.locator(".sbdocs-content").innerHTML();
    await page.close();
    return convertHtmlToMarkdown(html);
  } catch (error) {
    console.error(`❌ Failed to extract: ${url}`, error);
    return "";
  }
}

/**
 * Converts HTML content to markdown.
 */
export function convertHtmlToMarkdown(htmlContent: string) {
  /**
   * Disable HTML escaping for the Turndown service.
   * @see https://github.com/mixmark-io/turndown?tab=readme-ov-file#overriding-turndownserviceprototypeescape
   */
  Turndown.prototype.escape = (str: string) => str;

  const turndown = new Turndown({
    headingStyle: "atx",
    hr: "---",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
  });

  // GitHub Flavored Markdown rules
  turndown.use([
    strikethrough,
    tables,
    taskListItems,
  ] as unknown as Turndown.Plugin[]);

  // Code block rule
  turndown.addRule("codeBlock", {
    filter(node) {
      return node.nodeName === "PRE";
    },
    replacement(content, node) {
      const languageElement = node.querySelector('[class*="language-"]');
      let language = "";
      if (languageElement) {
        const classNames = languageElement.className.split(" ");
        const languageClass = classNames.find((cls: string) =>
          cls.startsWith("language-"),
        );
        if (languageClass) {
          language = languageClass.replace("language-", "");
        }
      }

      const normalizedContent = content.trim();

      if (normalizedContent.startsWith("```")) {
        return normalizedContent;
      }

      return `\`\`\`${language}\n${normalizedContent}\n\`\`\``;
    },
  });

  // Remove unnecessary anchor links
  turndown.addRule("removeAnchorLinks", {
    filter(node) {
      return (
        node.tagName === "A" &&
        (node.getAttribute("href") === null ||
          node.getAttribute("href")?.startsWith("#") ||
          node.getAttribute("aria-hidden") === "true" ||
          node.getAttribute("tabindex") === "-1")
      );
    },
    replacement: () => "",
  });

  // Remove other unnecessary elements
  turndown.addRule("removeElements", {
    filter: ["button", "style", "script", "img"],
    replacement: () => "",
  });

  return turndown.turndown(htmlContent);
}

/**
 * Extracts data for all stories, including MDX stories.
 * Uses Playwright routing instead of a real server.
 */
export async function extractStorybookData(
  args: Args,
): Promise<StorybookStoreItem[]> {
  console.info(`▶️ Setting up Playwright with static file routing...`);

  const browser = await chromium.launch();
  const context = await browser.newContext({ bypassCSP: true });

  try {
    console.info(`✔️ Static file routing configured for ${args.distPath}`);

    const storeItems = await extractAllStoriesFromStorybook(
      context,
      args.distPath,
    );

    // Extract content for all MDX pages
    for (const item of storeItems) {
      const stories = Object.values(item.stories);

      if (stories.length > 0) {
        for (const story of stories) {
          if (story.parameters?.docsOnly) {
            const pageUrl = `http://localhost/iframe.html?id=${story.id.replace("--page", "--docs")}`;
            story.parameters.fullSource =
              await extractMDXStoryContentWithBrowser(
                pageUrl,
                context,
                args.distPath,
              );
          }
        }
      } else if (item.meta.parameters.fileName.endsWith(".mdx")) {
        const pageUrl = `http://localhost/iframe.html?id=${item.meta.id.replace("--page", "--docs")}`;
        item.stories[`${item.meta.id}`] = {
          id: item.meta.id,
          name: item.meta.title,
          parameters: {
            fullSource: await extractMDXStoryContentWithBrowser(
              pageUrl,
              context,
              args.distPath,
            ),
            docsOnly: true,
            docs: {},
          },
        };
      }
    }

    console.info(
      `✔️ Extracted ${storeItems.length} stories from Storybook store.`,
    );

    // Resolve mock files referenced by stories
    await enrichWithMockSources(storeItems);

    // Resolve visual meta files for component recognition
    await enrichWithVisualMeta(storeItems);

    return storeItems;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Extracts mock import paths from story source code.
 */
function extractMockImports(storySource: string): Set<string> {
  const mockImportRegex = /from\s+['"](\.[^'"]*\.mock)['"]/g;
  const mockFiles = new Set<string>();
  let match: RegExpExecArray | null;

  while ((match = mockImportRegex.exec(storySource)) !== null) {
    mockFiles.add(match[1]);
  }

  return mockFiles;
}

/**
 * Reads a mock file from one of the candidate paths.
 */
async function readMockFile(
  storyDir: string,
  mockImport: string,
): Promise<{ fileName: string; source: string } | null> {
  const candidates = [
    resolve(storyDir, `${mockImport}.tsx`),
    resolve(storyDir, `${mockImport}.ts`),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      const source = await readFile(candidate, "utf-8");
      return { fileName: basename(candidate), source };
    }
  }
  return null;
}

/**
 * Processes a single item to extract its mock sources.
 */
async function processItemMockSources(item: StorybookStoreItem): Promise<void> {
  const storyFileName = item.meta.parameters.fileName;
  if (!storyFileName) return;

  const storyPath = resolve(storyFileName);
  if (!existsSync(storyPath)) return;

  try {
    const storySource = await readFile(storyPath, "utf-8");
    const mockFiles = extractMockImports(storySource);

    if (mockFiles.size === 0) return;

    const storyDir = dirname(storyPath);
    const mockSources: Record<string, string> = {};

    for (const mockImport of mockFiles) {
      const result = await readMockFile(storyDir, mockImport);
      if (result) {
        mockSources[result.fileName] = result.source;
      }
    }

    if (Object.keys(mockSources).length > 0) {
      item.mockSources = mockSources;
      console.info(
        `📎 Found ${Object.keys(mockSources).length} mock file(s) for ${item.meta.title}`,
      );
    }
  } catch (error) {
    console.warn(`⚠️ Could not read mock files for ${item.meta.title}:`, error);
  }
}

/**
 * Finds and reads .mock.ts/.mock.tsx files referenced by story files.
 * Uses the `fileName` from Storybook metadata to locate the story source,
 * then scans its imports for .mock references and reads those files.
 */
async function enrichWithMockSources(
  items: StorybookStoreItem[],
): Promise<void> {
  for (const item of items) {
    await processItemMockSources(item);
  }
}

/**
 * Attempts to dynamically import a visual.meta.ts file.
 * Returns the VisualMeta object or null if not found.
 */
async function readVisualMetaFile(
  componentDir: string,
): Promise<VisualMeta | null> {
  const candidates = [
    resolve(componentDir, "visual.meta.ts"),
    resolve(componentDir, "visual.meta.js"),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      try {
        // Use dynamic import with file:// URL for ESM compatibility
        const module = (await import(`file://${candidate}`)) as {
          default?: VisualMeta;
          visualMeta?: VisualMeta;
        };
        return module.default ?? module.visualMeta ?? null;
      } catch (error) {
        console.warn(
          `⚠️ Could not import visual meta from ${candidate}:`,
          error,
        );
      }
    }
  }
  return null;
}

/**
 * Enriches store items with visual meta data from visual.meta.ts files.
 * Looks for visual.meta.ts in the component directory.
 * Skips visual meta files that have empty visualTraits (marked as TODO).
 */
async function enrichWithVisualMeta(
  items: StorybookStoreItem[],
): Promise<void> {
  for (const item of items) {
    const storyFileName = item.meta.parameters.fileName;
    if (!storyFileName) continue;

    const storyPath = resolve(storyFileName);
    const componentDir = dirname(storyPath);

    const visualMeta = await readVisualMetaFile(componentDir);
    if (visualMeta) {
      // Deprecated components only carry replacement metadata and should not
      // be filtered by active-component visual trait heuristics.
      if (visualMeta.deprecated) {
        item.visualMeta = visualMeta;
        console.info(`⚠️ Found deprecated visual meta for ${item.meta.title}`);
        continue;
      }

      // Skip visual meta files that are marked as TODO (empty visualTraits)
      if (visualMeta.visualTraits.length === 0) {
        console.info(`📝 Skipping TODO visual meta for ${item.meta.title}`);
        continue;
      }
      item.visualMeta = visualMeta;
      console.info(`🎨 Found visual meta for ${item.meta.title}`);
    }
  }
}

/**
 * Brand names mapped from tag suffixes.
 */
const BRAND_TAG_MAP: Record<string, string> = {
  CongstarApp: "congstar App",
  Ja: "ja!",
  Penny: "Penny",
};

/**
 * All known brand tag suffixes.
 */
const ALL_BRAND_SUFFIXES = Object.keys(BRAND_TAG_MAP);

/**
 * Extracts brand availability from Storybook tags.
 * A component is considered "ready" for a brand if its tags include
 * `readyFor<Brand>` (without `!` prefix).
 */
function extractBrandAvailability(tags?: string[]): {
  readyBrands: string[];
  isReadyForAllBrands: boolean;
} {
  if (!tags || tags.length === 0) {
    return { readyBrands: [], isReadyForAllBrands: false };
  }

  const readyBrands = ALL_BRAND_SUFFIXES.filter((suffix) =>
    tags.includes(`readyFor${suffix}`),
  ).map((suffix) => BRAND_TAG_MAP[suffix]);

  return {
    readyBrands,
    isReadyForAllBrands: readyBrands.length === ALL_BRAND_SUFFIXES.length,
  };
}

/**
 * Generates brand availability section for markdown output.
 */
function generateBrandAvailabilitySection(tags?: string[]): string[] {
  const { readyBrands, isReadyForAllBrands } = extractBrandAvailability(tags);

  if (readyBrands.length === 0) {
    return [];
  }

  if (isReadyForAllBrands) {
    return [
      "## Brand Availability",
      "",
      "> ✅ This component is **available for all brands**.",
      "",
    ];
  }

  return [
    "## Brand Availability",
    "",
    ...readyBrands.map((brand) => `- ${brand}`),
    "",
  ];
}

/**
 * Generates markdown section for visual recognition guidance.
 */
function generateVisualRecognitionSection(visualMeta: VisualMeta): string[] {
  if (visualMeta.deprecated) {
    return [];
  }

  const notUseWhenSection =
    visualMeta.notUseWhen && visualMeta.notUseWhen.length > 0
      ? [
          "",
          "### When NOT to Use",
          "",
          ...visualMeta.notUseWhen.map((not) => `- ${not}`),
        ]
      : [];

  const similarComponentsSection =
    visualMeta.similarComponents && visualMeta.similarComponents.length > 0
      ? [
          "",
          "### Similar Components",
          "",
          ...visualMeta.similarComponents.map(
            (similar) => `- **${similar.component}**: ${similar.difference}`,
          ),
        ]
      : [];

  return [
    "## Visual Recognition Guide",
    "",
    `> This section helps AI agents identify when to use ${visualMeta.component} based on visual designs or mockups.`,
    "",
    `**Categories:** ${visualMeta.categories.join(", ")}`,
    "",
    "### Visual Traits",
    "",
    ...visualMeta.visualTraits.map((trait) => `- ${trait}`),
    "",
    "### When to Use",
    "",
    ...visualMeta.useWhen.map((use) => `- ${use}`),
    ...notUseWhenSection,
    ...similarComponentsSection,
    "",
  ];
}

type ComponentDeprecationInfo = {
  message: string;
  replacement?: string;
};

/**
 * Extracts values from enum or union type.
 */
function formatTypeValues(values: { value: string }[]): string {
  return values
    .map((v) =>
      typeof v.value === "string" ? v.value : JSON.stringify(v.value),
    )
    .join(" ");
}

/**
 * Handles named type conversion for object types with a name property.
 */
function stringifyNamedType(type: {
  name: string;
  value?: { value: string }[];
}): string {
  if (
    (type.name === "enum" || type.name === "union") &&
    Array.isArray(type.value)
  ) {
    return formatTypeValues(type.value);
  }
  if (type.name === "array" && type.value) {
    return `${stringifyPropType(type.value as StorybookComponentProp["type"])}[]`;
  }
  if (type.name === "signature" && type.value?.[0]?.value === "function") {
    return "function";
  }
  return type.name;
}

/**
 * Converts a docgen type object to a readable string for markdown tables.
 */
function stringifyPropType(type: StorybookComponentProp["type"]): string {
  if (!type) {
    return "";
  }
  if (typeof type === "string") {
    return type;
  }
  if (
    typeof type === "object" &&
    type !== null &&
    "name" in type &&
    typeof type.name === "string"
  ) {
    return stringifyNamedType(
      type as { name: string; value?: { value: string }[] },
    );
  }
  return JSON.stringify(type);
}

/**
 * Extracts the description from a storybook story.
 */
function extractStoryDescription(story: StorybookStoreItem) {
  return story.meta.parameters?.docs?.description?.component || undefined;
}

/**
 * Extracts deprecation info directly from component source files when docgen
 * metadata is missing or incomplete.
 */
function extractDeprecationInfoFromSource(
  storyFileName?: string,
  componentTitle?: string,
): ComponentDeprecationInfo | undefined {
  if (!storyFileName || !componentTitle) {
    return undefined;
  }

  const componentName = componentTitle.split("/").pop();
  if (!componentName) {
    return undefined;
  }

  const componentDir = dirname(resolve(storyFileName));
  const candidates = [
    resolve(componentDir, `${componentName}.tsx`),
    resolve(componentDir, `${componentName}.ts`),
    resolve(componentDir, "index.ts"),
    resolve(componentDir, "index.tsx"),
  ];

  for (const candidate of candidates) {
    if (!existsSync(candidate)) {
      continue;
    }

    const source = readFileSync(candidate, "utf8");
    const deprecatedMatch = /@deprecated\s*(.*)/i.exec(source);
    if (deprecatedMatch) {
      return {
        message: deprecatedMatch[1]?.trim() || "This component is deprecated.",
      };
    }
  }

  return undefined;
}

/**
 * Extracts deprecation info from visual meta or component docgen description.
 * Visual meta is preferred because it is explicit and agent-focused.
 */
function extractDeprecationInfo(
  component?: StorybookComponent,
  visualMeta?: VisualMeta,
  storyFileName?: string,
  componentTitle?: string,
): ComponentDeprecationInfo | undefined {
  if (visualMeta?.deprecated) {
    return {
      message: visualMeta.deprecated.message || "This component is deprecated.",
      replacement: visualMeta.deprecated.replacement,
    };
  }

  const docgenDescription = component?.__docgenInfo?.description;
  if (!docgenDescription) {
    return undefined;
  }

  // Match @deprecated tag with optional message
  const deprecatedMatch = /@deprecated\s*(.*)/i.exec(docgenDescription);
  if (deprecatedMatch) {
    return {
      message: deprecatedMatch[1]?.trim() || "This component is deprecated.",
    };
  }

  return extractDeprecationInfoFromSource(storyFileName, componentTitle);
}

/**
 * Generates deprecation warning section for markdown output.
 */
function generateDeprecationSection(
  deprecationInfo: ComponentDeprecationInfo,
): string[] {
  if (deprecationInfo.replacement) {
    return [
      "> ⚠️ **DEPRECATED**",
      ">",
      `> **Use instead:** ${deprecationInfo.replacement}`,
      "",
    ];
  }

  return ["> ⚠️ **DEPRECATED**", ">", `> ${deprecationInfo.message}`, ""];
}

/**
 * Extracts the props from a storybook component.
 */
function extractComponentProps(
  component?: StorybookComponent,
): StorybookComponentProp[] {
  const docgen = component?.__docgenInfo;
  if (!docgen?.props) {
    return [];
  }
  const props: StorybookComponentProp[] = [];
  for (const [name, arg] of Object.entries(docgen.props)) {
    if (name === "children") {
      continue;
    }
    props.push({
      name,
      description: arg.description || "",
      type: arg.type,
      defaultValue:
        typeof arg.defaultValue === "string"
          ? arg.defaultValue
          : arg.defaultValue?.value || "",
      required: arg.required,
    });
  }
  return props;
}

/**
 * Extracts the default value as a string.
 */
function getDefaultValueString(
  defaultValue: StorybookComponentProp["defaultValue"],
): string {
  if (!defaultValue) {
    return "";
  }
  if (typeof defaultValue === "string") {
    return defaultValue;
  }
  if (typeof defaultValue === "object" && "value" in defaultValue) {
    return defaultValue.value;
  }
  return "";
}

/**
 * Generates a props table in markdown format.
 */
function generateComponentPropsTable(
  props: StorybookComponentProp[],
): string[] {
  if (props.length === 0) {
    return [];
  }

  return [
    "",
    "| Name | Type | Required | Default | Description |",
    "|------|------|----------|---------|-------------|",
    ...props.map(
      (prop) =>
        `| ${[
          `\`${prop.name}\``,
          `\`${stringifyPropType(prop.type)}\``,
          prop.required ? "Yes" : "No",
          getDefaultValueString(prop.defaultValue),
          prop.description?.replaceAll("\n", " ") ?? "",
        ].join(" | ")} |`,
    ),
    "",
  ];
}

/**
 * Generates the summary file content from the storeItems array.
 */
export function generateSummaryContent(
  {
    summaryTitle,
    summaryDescription,
    summaryBaseUrl,
    refs,
    tokensPath,
  }: Required<Args>,
  data: StorybookStoreItem[],
) {
  const summary: string[] = [
    `# ${summaryTitle}`,
    "",
    "> **Note:** This is a summary overview using the LLMs.txt format (https://llmstxt.org/). Each section links to its full documentation file in plain text (.txt) format. Click any link below to view the detailed documentation for that section.",
    "",
    summaryDescription,
    "",
  ];

  // Add tokens reference if available
  if (tokensPath) {
    summary.push(
      "## Design Tokens",
      "",
      `- [Design Tokens](${summaryBaseUrl}/llms/tokens.txt): All available design tokens with JS and CSS variable names`,
      "",
    );
  }

  const activeComponents: string[] = [];
  const deprecatedComponents: string[] = [];

  for (const item of data) {
    let description = item.meta.parameters?.docs?.description?.component || "";
    const deprecationInfo = extractDeprecationInfo(
      item.meta.component,
      item.visualMeta,
      item.meta.parameters.fileName,
      item.meta.title,
    );
    if (description) {
      description = `: ${description.split("\n")[0]}`;
    }

    const entry = `- [${item.meta.title}](${summaryBaseUrl}/llms/${item.meta.id}.txt)${description}`;

    if (deprecationInfo) {
      const deprecatedSuffix = deprecationInfo.replacement
        ? ` [use ${deprecationInfo.replacement}]`
        : "";
      deprecatedComponents.push(`${entry}${deprecatedSuffix}`);
      continue;
    }

    activeComponents.push(entry);
  }

  if (activeComponents.length > 0) {
    summary.push("## Components", "", ...activeComponents, "");
  }

  if (deprecatedComponents.length > 0) {
    summary.push(
      "## Deprecated Components",
      "",
      "> These components are kept for legacy reference only. Agents should prefer active replacements.",
      "",
      ...deprecatedComponents,
      "",
    );
  }

  if (refs && refs.length > 0) {
    summary.push("", "## Optional", "");
    for (const ref of refs) {
      summary.push(`- [${ref.title}](${ref.url.replace(/\/$/, "")}/llms.txt)`);
    }
    summary.push("");
  }

  return summary;
}

/**
 * Generates subcomponent section for a single subcomponent.
 */
function generateSubcomponentSection(
  name: string,
  subcomponent: StorybookComponent,
): string[] {
  const docgen = subcomponent?.__docgenInfo;
  if (!docgen) {
    return [];
  }

  const subcomponentProps = extractComponentProps(subcomponent);
  const propsSection =
    subcomponentProps.length > 0
      ? [
          "#### Props",
          "",
          ...generateComponentPropsTable(subcomponentProps),
          "",
        ]
      : [];

  return ["", `### ${name}`, "", docgen.description ?? "", "", ...propsSection];
}

/**
 * Generates subcomponents section.
 */
function generateSubcomponentsSection(
  subcomponents?: Record<string, StorybookComponent>,
): string[] {
  if (!subcomponents) {
    return [];
  }

  return [
    "## Subcomponents",
    "",
    ...Object.entries(subcomponents).flatMap(([name, subcomponent]) =>
      generateSubcomponentSection(name, subcomponent),
    ),
  ];
}

/**
 * Generates examples section.
 */
function generateExamplesSection(
  stories: StorybookStoreItem["stories"],
): string[] {
  const examples = Object.values(stories).map((s) => ({
    title: s.name,
    description: s.parameters?.docs?.description?.story,
    source:
      s.parameters?.fullSource ?? s.parameters.docs?.source?.originalSource,
  }));

  if (examples.length === 0) {
    return [];
  }

  return [
    "## Examples",
    "",
    ...examples.flatMap((ex) => [
      "",
      `### ${ex.title}`,
      "",
      ...(ex.description ? [ex.description, ""] : []),
      ...(ex.source ? ["```tsx", ex.source.trim(), "```"] : []),
    ]),
  ];
}

/**
 * Generates mock data section.
 */
function generateMockDataSection(
  mockSources?: Record<string, string>,
): string[] {
  if (!mockSources || Object.keys(mockSources).length === 0) {
    return [];
  }

  return [
    "",
    "## Mock Data",
    "",
    "> The following mock data is used in the examples above. Variable names referenced in examples (e.g. `sbChildren`, `defaultArgs`) are defined here.",
    ...Object.entries(mockSources).flatMap(([fileName, source]) => [
      "",
      `### ${fileName}`,
      "",
      "```tsx",
      source.trim(),
      "```",
    ]),
  ];
}

/**
 * Generates the full markdown content for a given storybook story.
 */
export function generateFullFileContentFromStory(item: StorybookStoreItem) {
  const stories = Object.values(item.stories);
  const isMDXPage = stories.every((s) => s.parameters?.docsOnly);

  if (isMDXPage) {
    return stories.map((s) => s.parameters?.fullSource ?? "").filter(Boolean);
  }

  const description = extractStoryDescription(item);
  const deprecationInfo = extractDeprecationInfo(
    item.meta.component,
    item.visualMeta,
    item.meta.parameters.fileName,
    item.meta.title,
  );

  if (deprecationInfo) {
    return [
      `# ${item.meta.title}`,
      "",
      ...generateDeprecationSection(deprecationInfo),
    ];
  }

  const props = extractComponentProps(item.meta.component);

  return [
    `# ${item.meta.title}`,
    "",
    ...(description ? [description, ""] : []),
    ...generateBrandAvailabilitySection(item.meta.tags),
    ...(item.visualMeta
      ? generateVisualRecognitionSection(item.visualMeta)
      : []),
    ...(props.length > 0
      ? ["## Props", "", ...generateComponentPropsTable(props), ""]
      : []),
    ...generateSubcomponentsSection(item.meta.subcomponents),
    ...generateExamplesSection(item.stories),
    ...generateMockDataSection(item.mockSources),
  ];
}

/**
 * Writes the summary file (llms.txt) for all store items.
 */
export async function writeSummaryFile(
  args: Required<Args>,
  data: StorybookStoreItem[],
) {
  const summaryContent = generateSummaryContent(args, data);
  await writeFile(join(args.distPath, "llms.txt"), summaryContent.join("\n"));
  console.info(
    `✅ LLMs docs summary written to ${join(args.distPath, "llms.txt")}`,
  );
}

/**
 * Writes full markdown files for all components from storeItems.
 */
export async function writeFullDocsFiles(
  { distPath, tokensPath }: Required<Args>,
  data: StorybookStoreItem[],
) {
  const llmsDir = join(distPath, "llms");

  // Clean up llms directory
  await rm(llmsDir, { recursive: true, force: true });
  await mkdir(llmsDir, { recursive: true });

  // Copy tokens documentation if available
  if (tokensPath && existsSync(tokensPath)) {
    const tokensContent = await readFile(tokensPath, "utf-8");
    await writeFile(join(llmsDir, "tokens.txt"), tokensContent);
    console.info(
      `📦 Tokens documentation copied to ${join(llmsDir, "tokens.txt")}`,
    );
  } else if (tokensPath) {
    console.warn(`⚠️ Tokens file not found: ${tokensPath}`);
  }

  for (const item of data) {
    const filePath = join(llmsDir, `${item.meta.id}.txt`);
    const content = generateFullFileContentFromStory(item);
    await writeFile(filePath, content.join("\n"));
  }
}
