import {
  StyledComponentsBaseProps,
  WithChildrenAndTestId,
} from "../../propTypes";

export type HeadlineHighlightedSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large";
export type HeadlineHighlightedColor =
  | "yellow"
  | "orange"
  | "green"
  | "red"
  | "lime"
  | "purple";

export interface HeadlineHighlightedProps
  extends WithChildrenAndTestId,
    StyledComponentsBaseProps {
  size?: HeadlineHighlightedSize;
  decorativeColor?: HeadlineHighlightedColor;
  className?: string;
}

export interface HeadlineWrapperProps {
  size?: HeadlineHighlightedSize;
}
