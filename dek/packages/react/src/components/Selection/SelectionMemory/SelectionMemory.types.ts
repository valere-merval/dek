import {
  ToggleGroupItemProps,
  ToggleGroupSingleProps,
} from "@radix-ui/react-toggle-group";
import { ComponentPropsWithoutRef } from "react";

export type SelectionMemoryRootProps = Omit<ToggleGroupSingleProps, "type"> & {
  onValueChange: (value: string) => void;
};
export type SelectionMemoryItemProps = ToggleGroupItemProps & {
  unavailable?: boolean;
};
export type SelectionMemoryItemWrapperProps = ComponentPropsWithoutRef<"div">;
export interface SelectionMemoryValueProps
  extends ComponentPropsWithoutRef<"div"> {
  label: string;
}
