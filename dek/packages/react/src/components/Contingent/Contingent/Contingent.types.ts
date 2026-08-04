import { TypographyProps } from "../../Typography/Typography";
import {
  ContingentUnit,
  ContingentMediaSize,
} from "../shared/Contingent.types";

export interface ContingentProps {
  /**
   * The component automatically responds to the viewport depending on the values set for the mobile and desktop viewports.
   */
  size: ContingentMediaSize;
  unit: ContingentUnit;
  amount: number;
  suffix?: string;
  strikeThroughAmount?: number;
  strikeThroughAmountPrefix?: string;
}

export interface ContingentStrikeThroughAmountProps
  extends Omit<TypographyProps, "variant" | "color" | "as"> {
  size: ContingentMediaSize;
  strikeThroughAmount: number;
  strikeThroughAmountPrefix?: string;
  unit: ContingentUnit;
}
