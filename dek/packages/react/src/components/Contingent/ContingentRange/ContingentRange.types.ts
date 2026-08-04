import {
  ContingentUnit,
  ContingentMediaSize,
} from "../shared/Contingent.types";

export interface ContingentRangeProps {
  /**
   * The component automatically responds to the viewport depending on the values set for the mobile and desktop viewports.
   */
  size: ContingentMediaSize;
  amountRange: AmountRange;
  unit: ContingentUnit;
  suffix?: string;
}

interface AmountRange {
  minimum: number;
  maximum: number;
}
