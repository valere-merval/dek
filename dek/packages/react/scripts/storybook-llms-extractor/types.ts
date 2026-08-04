/**
 * Custom storybook-llms-extractor
 * Based on @fluentui/storybook-llms-extractor (MIT License)
 * @see https://github.com/microsoft/fluentui/tree/master/tools/storybook-llms-extractor
 */

/**
 * CLI arguments
 */
export type Args = {
  /** Relative path to the Storybook distribution folder */
  distPath: string;
  /** Storybook deployed URL for the summary docs */
  summaryBaseUrl: string;
  /** Title for the llms.txt file */
  summaryTitle?: string;
  /** Description for the llms.txt file */
  summaryDescription?: string;
  /** Array of composed Storybook refs */
  refs?: StorybookRef[];
  /** Path to the tokens LLM documentation file (relative to config file) */
  tokensPath?: string;
};

/**
 * Storybook store item, contains component/page metadata and stories.
 */
export type StorybookStoreItem = {
  meta: StorybookStoreItemMeta;
  stories: Record<string, StorybookStoreItemStory>;
  /** Source code of referenced .mock files, keyed by filename */
  mockSources?: Record<string, string>;
  /** Visual metadata for AI component recognition */
  visualMeta?: VisualMeta;
};

/**
 * Storybook store item metadata
 */
export type StorybookStoreItemMeta = {
  id: string;
  title: string;
  tags?: string[];
  parameters: {
    fileName: string;
    docs?: {
      description?: {
        component?: string;
        story?: string;
      };
    };
  };
  component?: StorybookComponent;
  subcomponents?: Record<string, StorybookComponent>;
};

/**
 * Storybook store item story
 */
export type StorybookStoreItemStory = {
  id: string;
  name: string;
  parameters: {
    docs: {
      description?: {
        component?: string;
        story?: string;
      };
      source?: {
        originalSource?: string;
      };
    };
    fullSource?: string;
    docsOnly?: boolean;
  };
};

/**
 * Storybook component metadata
 */
export type StorybookComponent = {
  displayName: string;
  __docgenInfo?: {
    description?: string;
    displayName?: string;
    props?: Record<string, StorybookComponentProp> | null;
  };
};

/**
 * Storybook component prop metadata
 */
export type StorybookComponentProp = {
  defaultValue?: { value: string } | string | null;
  description?: string;
  name: string;
  required?: boolean;
  type?: {
    name?: string;
    value?: { value: string }[];
  };
};

/**
 * Composed Storybook ref
 */
export type StorybookRef = {
  title: string;
  url: string;
  sourceUrl?: string;
};

export type VisualMetaDeprecation = {
  /** Replacement component that should be used instead */
  replacement: string;
  /** Optional deprecation message shown when no structured replacement exists */
  message?: string;
};

type ActiveVisualMeta = {
  /** Component name */
  component: string;
  /** Categories for grouping similar components */
  categories: Array<
    | "actions"
    | "typography"
    | "forms"
    | "selection"
    | "product"
    | "pricing"
    | "checkout"
    | "cart"
    | "availability"
    | "navigation"
    | "feedback"
    | "layout"
    | "data-display"
    | "overlay"
    | "misc"
  >;
  /** Visual traits that help identify this component */
  visualTraits: string[];
  /** When to use this component */
  useWhen: string[];
  /** When NOT to use this component (use alternatives instead) */
  notUseWhen?: string[];
  /** Explicit deprecation metadata to help agents avoid legacy components */
  deprecated?: undefined;
  /** Similar components that might be confused with this one */
  similarComponents?: Array<{
    component: string;
    difference: string;
  }>;
};

type DeprecatedVisualMeta = {
  /** Component name */
  component: string;
  /** Explicit deprecation metadata to help agents avoid legacy components */
  deprecated: VisualMetaDeprecation;
  categories?: never;
  visualTraits?: never;
  useWhen?: never;
  notUseWhen?: never;
  similarComponents?: never;
};

/**
 * Visual metadata for component recognition by AI agents
 */
export type VisualMeta = ActiveVisualMeta | DeprecatedVisualMeta;

/**
 * Helper function for type-safe visual meta definitions.
 * Use this in visual.meta.ts files.
 */
export function defineVisualMeta(meta: VisualMeta): VisualMeta {
  return meta;
}
