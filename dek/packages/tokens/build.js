import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";

const CustomFilter = {
  name: "custom-filter",
  filter: async (token, options) => {
    return token.path[0] !== "ref" && !token.name.includes("Underlined");
  },
};
StyleDictionary.registerFilter(CustomFilter);

/**
 * Custom format for LLM-friendly token documentation
 * Generates a markdown file with both JS and CSS variable references
 */
StyleDictionary.registerFormat({
  name: "llms/tokens",
  format: ({ dictionary }) => {
    const categories = {};

    // Group tokens by category (first part of the path after 'fair')
    dictionary.allTokens.forEach((token) => {
      // Get category from path (e.g., 'color', 'spacing', 'typography')
      const category = token.path[0] || "other";
      if (!categories[category]) {
        categories[category] = [];
      }

      // Create JS variable name (camelCase without prefix)
      const jsName = token.name;
      // Create CSS variable name (with --fair prefix)
      const cssName = `--fair${token.name.charAt(0).toUpperCase()}${token.name.slice(1)}`;

      // Get the resolved value - try multiple sources
      const resolvedValue =
        token.value ?? token.$value ?? token.original?.value ?? "";

      categories[category].push({
        jsName,
        cssName,
        value: resolvedValue,
        description:
          token.$description ||
          token.description ||
          token.original?.$description ||
          "",
        type: token.$type || token.type || "",
      });
    });

    // Generate markdown content
    const lines = [
      "# Fair Design Tokens",
      "",
      "This document provides a reference for all design tokens available in the Fair Design System.",
      "Tokens are available as both JavaScript/TypeScript exports and CSS custom properties.",
      "",
      "## Usage",
      "",
      "### JavaScript/TypeScript",
      "```typescript",
      'import { colorInteractiveBlue, spacingSpace16 } from "@fair/tokens";',
      "```",
      "",
      "### CSS",
      "```css",
      ".my-element {",
      "  color: var(--fairColorInteractiveBlue);",
      "  padding: var(--fairSpacingSpace16);",
      "}",
      "```",
      "",
      "## Token Reference",
      "",
    ];

    // Category display names
    const categoryNames = {
      color: "Colors",
      spacing: "Spacing",
      sizing: "Sizing",
      typography: "Typography",
      borderRadius: "Border Radius",
      shadow: "Shadows",
      opacity: "Opacity",
      zIndex: "Z-Index",
    };

    // Sort categories for consistent output
    const sortedCategories = Object.keys(categories).sort();

    for (const category of sortedCategories) {
      const displayName =
        categoryNames[category] ||
        category.charAt(0).toUpperCase() + category.slice(1);
      lines.push(`### ${displayName}`, "");
      lines.push("| Token | CSS Variable | Value | Description |");
      lines.push("|-------|--------------|-------|-------------|");

      for (const token of categories[category]) {
        let value = "";
        if (token.value != null) {
          value =
            typeof token.value === "string"
              ? token.value
              : JSON.stringify(token.value);
        }
        const truncatedValue =
          value.length > 50 ? value.substring(0, 47) + "..." : value;
        lines.push(
          `| \`${token.jsName}\` | \`${token.cssName}\` | \`${truncatedValue}\` | ${token.description} |`,
        );
      }
      lines.push("");
    }

    return lines.join("\n");
  },
});

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(StyleDictionary, {
  expand: { composition: true, typography: true, border: true, shadow: true },
  excludeParentKeys: true,
});

const sd = new StyleDictionary({
  source: ["figma/tokens.json"],
  log: {
    verbosity: "default",
  },
  preprocessors: ["tokens-studio"],
  platforms: {
    css: {
      prefix: "fair",
      transformGroup: "tokens-studio",
      transforms: ["name/camel"],
      buildPath: "dist/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          filter: "custom-filter",
        },
      ],
    },
    scss: {
      transformGroup: "tokens-studio",
      transforms: ["name/camel"],
      buildPath: "dist/css/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
          filter: "custom-filter",
        },
      ],
    },
    js: {
      transformGroup: "tokens-studio",
      transforms: ["name/camel"],
      buildPath: "dist/js/",
      files: [
        {
          format: "javascript/es6",
          destination: "tokens.js",
          filter: "custom-filter",
        },
        {
          format: "typescript/es6-declarations",
          destination: "tokens.d.ts",
          filter: "custom-filter",
        },
        {
          format: "javascript/module-flat",
          destination: "tokens.cjs",
          filter: "custom-filter",
        },
      ],
    },
    llms: {
      transformGroup: "tokens-studio",
      transforms: ["name/camel"],
      buildPath: "dist/",
      files: [
        {
          format: "llms/tokens",
          destination: "llms-tokens.txt",
          filter: "custom-filter",
        },
      ],
    },
  },
});
// optionally, cleanup files first..
await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
