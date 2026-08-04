import { ReactNode } from "react";

export type ContingentSize = "small" | "medium" | "large";
export type ContingentUnit = "GB" | "MB" | "Mbit/s";

export interface ContingentAmountProps {
  amountString: string;
  unit: ContingentUnit;
  size: ContingentMediaSize;
}

export interface ContingentSuffixProps {
  children?: ReactNode | string;
  size: ContingentMediaSize;
}

export type ContingentMediaSize = {
  mobile: ContingentSize;
  desktop: ContingentSize;
};
