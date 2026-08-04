import type { NodePlopAPI, PlopGeneratorConfig, ActionType } from "plop";

/**
 * Calculates the relative path prefix from a component path to the scripts folder.
 * @param componentPath - Path like "Button/ButtonSecondary" or "Button/ButtonPrimary/ButtonPrimary"
 * @returns Relative path prefix like "../../../../" or "../../../../../"
 */
function getRelativePathToScripts(componentPath: string): string {
  // Count path segments (split by / and filter empty)
  const segments = componentPath.split("/").filter(Boolean);
  // Need to go up: segments count + 2 (for src/components)
  const depth = segments.length + 2;
  return "../".repeat(depth);
}

const prompts = [
  {
    type: "input",
    name: "subfolder",
    message: "Subfolder under src/components/ where your component is located:",
  },
  {
    type: "input",
    name: "name",
    message: "Component Name:",
  },
] satisfies PlopGeneratorConfig["prompts"];

const appendAccessibilityTests = {
  type: "append",
  path: "src/components/{{subfolder}}/{{pascalCase name}}/{{pascalCase name}}.test-visual-ct.tsx",
  templateFile:
    ".plop-templates/accessibility/accessebility.test-visual-ct.tsx.hbs",
} satisfies ActionType;

const createGenerators = (plop: NodePlopAPI) => {
  // Register helper to calculate relative path from component to scripts folder
  plop.setHelper("relativeToScripts", (subfolder: string, name: string) => {
    const fullPath = subfolder ? `${subfolder}/${name}` : name;
    return getRelativePathToScripts(fullPath);
  });

  plop.setGenerator("component", {
    description: "Generate a react component",
    prompts,
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{subfolder}}/{{pascalCase name}}",
        templateFiles: ".plop-templates/**/*.hbs",
        base: ".plop-templates/component",
      },
      {
        type: "append",
        path: "src/index.ts",
        pattern: `/* PLOP_GENERATED_CONTENT */`,
        template: `export * from './components{{#if subfolder}}/{{subfolder}}{{/if}}/{{pascalCase name}}';`,
      },
      appendAccessibilityTests,
    ],
  });

  plop.setGenerator("test-visual-ct", {
    description: "generate a visual test",
    prompts,
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{subfolder}}/{{pascalCase name}}",
        templateFiles: ".plop-templates/**/*.test-visual-ct.**.hbs",
        base: ".plop-templates/component",
      },
      {
        type: "addMany",
        destination: "src/components/{{subfolder}}/{{pascalCase name}}",
        templateFiles: ".plop-templates/**/*.stories.portable.**.hbs",
        base: ".plop-templates/component",
      },
      appendAccessibilityTests,
    ],
  });

  plop.setGenerator("accessibility-tests", {
    description: "generate visual tests for accessibility",
    prompts,
    actions: [appendAccessibilityTests],
  });

  plop.setGenerator("visual-meta", {
    description:
      "Add visual.meta.ts for AI component recognition to an existing component",
    prompts: [
      {
        type: "input",
        name: "componentPath",
        message:
          "Full path under src/components/ to the component folder (e.g., Button/ButtonSecondary or Button/ButtonPrimary/ButtonPrimary):",
      },
      {
        type: "checkbox",
        name: "categories",
        message: "Component categories:",
        choices: [
          "actions",
          "typography",
          "forms",
          "selection",
          "product",
          "pricing",
          "checkout",
          "cart",
          "availability",
          "navigation",
          "feedback",
          "layout",
          "data-display",
          "overlay",
          "misc",
        ],
        validate: (value) =>
          Array.isArray(value) && value.length > 0
            ? true
            : "Select at least one category.",
      },
    ],
    actions: (answers) => {
      if (!answers?.componentPath) return [];

      // Extract component name from path (last segment)
      const pathSegments = answers.componentPath.split("/").filter(Boolean);
      const componentName = pathSegments[pathSegments.length - 1];

      return [
        {
          type: "add",
          path: "src/components/{{componentPath}}/visual.meta.ts",
          templateFile: ".plop-templates/visual-meta/visual.meta.ts.hbs",
          data: {
            name: componentName,
            relativePrefix: getRelativePathToScripts(answers.componentPath),
          },
        },
      ];
    },
  });
};

export default createGenerators;
