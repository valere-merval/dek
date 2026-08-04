import { ComponentPropsWithoutRef } from "react";
import { Footnote } from "../Modal/ModalFootnotes";

export type EnergyLabel = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface EnergyLabelProps extends ComponentPropsWithoutRef<"div"> {
  rating: EnergyLabel;
  footnotes?: Footnote[];
}
