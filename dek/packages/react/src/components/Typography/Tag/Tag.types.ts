import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";
import { TextColor } from "../themeBackgroundColorMapping";

export type TagSize = "small" | "medium" | "large";
export interface TagProps
  extends ComponentPropsWithoutRef<"div">,
    WithTestId,
    StyledComponentsBaseProps {
  size: TagSize;
  color?: TextColor;
}
