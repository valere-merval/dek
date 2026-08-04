import * as tokens from "@fair/tokens";

export type SpaceVariant = keyof typeof space;

export const space = {
  /**
   * app only
   */
  "01": "0.1rem",
  /**
   * app only
   */
  "02": "0.2rem",
  "04": tokens.spacingSpace04,
  "06": tokens.spacingSpace06,
  "08": tokens.spacingSpace08,
  "12": tokens.spacingSpace12,
  "16": tokens.spacingSpace16,
  "20": tokens.spacingSpace20,
  "24": tokens.spacingSpace24,
  "32": tokens.spacingSpace32,
  "40": tokens.spacingSpace40,
  "48": tokens.spacingSpace48,
  "56": tokens.spacingSpace56,
  "64": tokens.spacingSpace64,
  /**
   * web only
   */
  "72": tokens.spacingSpace72,
  /**
   * web only
   */
  "80": tokens.spacingSpace80,
  /**
   * web only
   */
  "96": tokens.spacingSpace96,
  /**
   * web only
   */
  "128": tokens.spacingSpace128,
  /**
   * app only
   */
  "144": "14.4rem",
} satisfies Record<string, string>;
