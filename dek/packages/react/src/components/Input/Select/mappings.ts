import { Placement } from "react-aria";
import { crossOffset } from "../shared/Popover.styles";
import { SelectPopoverAlignment } from "./Select.types";

export const popoverMapping: Record<
  SelectPopoverAlignment,
  { placement: Placement; crossOffset: number }
> = {
  left: {
    placement: "bottom left",
    crossOffset: -crossOffset,
  },
  right: {
    placement: "bottom right",
    crossOffset,
  },
};
