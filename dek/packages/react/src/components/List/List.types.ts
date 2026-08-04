import { StyledComponentsBaseProps, WithTestId } from "../propTypes";
import { ComponentPropsWithoutRef, JSX } from "react";

export type ListSize = "medium" | "large";
export type ListColor =
  | "yellow"
  | "orange"
  | "green"
  | "black"
  | "red"
  | "lime"
  | "purple";

export interface ListRootProps
  extends
    StyledComponentsBaseProps,
    WithTestId,
    ComponentPropsWithoutRef<"ul"> {
  /**
   * The size prop should be omitted if possible, as the component will automatically respond to the viewport, so use it only if there is a specific requirement in your design. <br><br>`medium` | `large`
   */
  size?: ListSize;
  decorativeColor?: ListColor;
}

export interface ListItemProps
  extends
    StyledComponentsBaseProps,
    WithTestId,
    ComponentPropsWithoutRef<"li"> {}

export interface ListBodyProps
  extends
    Omit<StyledComponentsBaseProps, "as">,
    WithTestId,
    Omit<ComponentPropsWithoutRef<"div">, "color"> {
  forwardedAs?: keyof JSX.IntrinsicElements;
}

export interface ListDescriptionProps
  extends
    Omit<StyledComponentsBaseProps, "as">,
    WithTestId,
    Omit<ComponentPropsWithoutRef<"div">, "color"> {
  forwardedAs?: keyof JSX.IntrinsicElements;
}
