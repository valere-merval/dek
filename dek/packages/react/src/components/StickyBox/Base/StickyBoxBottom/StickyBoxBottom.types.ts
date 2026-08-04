import { ComponentPropsWithoutRef } from "react";

import * as Collapsible from "@radix-ui/react-collapsible";
import { TypographyProps } from "../../../Typography/Typography";
import { BackgroundColor } from "../../../../theme/theme";

export interface StickyBoxBottomProps extends Collapsible.CollapsibleProps {
  position?: "fixed" | "sticky";
  boxProps?: ComponentPropsWithoutRef<"div">;
  backgroundColor?: BackgroundColor;
}

export type StickyBoxBottomTriggerProps = Collapsible.CollapsibleTriggerProps;

export interface StickyBoxBottomIconProps {
  label?: string;
  typographyProps?: TypographyProps;
}
