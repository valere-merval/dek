import { ComponentPropsWithoutRef } from "react";

export interface AvailabilityCheckStartProps
  extends ComponentPropsWithoutRef<"div"> {
  onButtonClick: () => void;
  text: string;
  /**
   * `white` | `darkGrey`
   */
  backgroundColor?: "white" | "darkGrey";
}
