import * as tokens from "@fair/tokens";

export type BorderRadiusVariant = keyof typeof borderRadius;

export const borderRadius = {
  "02": tokens.borderRadius02,
  "04": tokens.borderRadius04,
  "06": tokens.borderRadius06,
  "08": tokens.borderRadius08,
  "12": tokens.borderRadius12,
  "16": tokens.borderRadius16,
  "20": tokens.borderRadius20,
  "24": tokens.borderRadius24,
  "32": tokens.borderRadius32,
  "40": tokens.borderRadius40,
  "48": tokens.borderRadius48,
  "56": tokens.borderRadius56,
  Penny05: "0.5rem",
  Penny10: "1.0rem",
  Penny15: "1.5rem",
  Penny20: "2.0rem",
  Penny25: "2.5rem",
  Ja05: "0.5rem",
  Ja10: "1.0rem",
  Ja15: "1.5rem",
  Ja20: "2.0rem",
  Ja25: "2.5rem",
} satisfies Record<string, string>;
