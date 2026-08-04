import { ComponentPropsWithoutRef } from "react";
import { WithTestId } from "../../propTypes";
import { CSSProp } from "styled-components";

export type HeadlineColor = "white" | "black" | "inherit";
export type HeadlineVariant = "black" | "bold";
export type HeadlineTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
export const headlineSizes = [
  "small",
  "medium",
  "large",
  "extraLarge",
] as const;
export type HeadlineSize = (typeof headlineSizes)[number];

export type HeadlineProps = HeadlineWithForwardedAs | HeadlineWithAs;

interface HeadlineWithAs extends HeadlineBaseProps, RequireAs {}
interface HeadlineWithForwardedAs
  extends HeadlineBaseProps,
    RequireForwardedAs {}

interface HeadlineBaseProps
  extends ComponentPropsWithoutRef<"div">,
    WithTestId {
  size: HeadlineSize;
  variant: HeadlineVariant;
  color?: HeadlineColor;
  css?: CSSProp;
  trimmed?: boolean;
}

interface RequireAs {
  as: HeadlineTag;
  forwardedAs?: never;
}

interface RequireForwardedAs {
  as?: never;
  forwardedAs: HeadlineTag;
}
