import {
  ToggleGroupItemProps,
  ToggleGroupSingleProps,
} from "@radix-ui/react-toggle-group";
import { ComponentPropsWithoutRef } from "react";

export type SelectionColorRootProps = Omit<ToggleGroupSingleProps, "type"> & {
  onValueChange: (value: string) => void;
};
export type HexValue = string;

export interface SelectionColorItemProps extends ToggleGroupItemProps {
  hexValue: HexValue;
}

export type SelectionColorItemWrapperProps = ComponentPropsWithoutRef<"div">;
export interface SelectionColorValueProps
  extends ComponentPropsWithoutRef<"div"> {
  label: string;
}
