import * as tokens from "@fair/tokens";

export type SizeVariant = keyof typeof size;

export const size = {
  /**
   * app only
   */
  "01": "0.1rem",
  /**
   * app only
   */
  "02": "0.2rem",
  "04": tokens.sizingSize04,
  "06": tokens.sizingSize06,
  "08": tokens.sizingSize08,
  "12": tokens.sizingSize12,
  /*
   * Ja! and Penny only
   */
  "15": "1.5rem",
  "16": tokens.sizingSize16,
  "20": tokens.sizingSize20,
  "24": tokens.sizingSize24,
  "32": tokens.sizingSize32,
  "40": tokens.sizingSize40,
  "48": tokens.sizingSize48,
  "56": tokens.sizingSize56,
  "64": tokens.sizingSize64,
  /**
   * web only
   */
  "72": tokens.sizingSize72,
  /**
   * web only
   */
  "80": tokens.sizingSize80,
  /**
   * web only
   */
  "96": tokens.sizingSize96,
  /**
   * web only
   */
  "128": tokens.sizingSize128,
  /**
   * app only
   */
  "144": "14.4rem",
} satisfies Record<string, string>;
