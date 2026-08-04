import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";
import { TextColor } from "../themeBackgroundColorMapping";

export type LabelSize = "small" | "medium" | "large" | "extraLarge";

export interface LabelProps
  extends ComponentPropsWithoutRef<"div">,
    WithTestId,
    StyledComponentsBaseProps {
  size: LabelSize;
  color?: TextColor;
}
