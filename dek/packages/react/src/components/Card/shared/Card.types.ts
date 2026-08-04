import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";

export type CardSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

export interface CardProps
  extends StyledComponentsBaseProps,
    WithTestId,
    ComponentPropsWithoutRef<"div"> {
  size: CardSize;
}
