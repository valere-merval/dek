import { ComponentPropsWithoutRef, ReactNode } from "react";
import { CellIconStatusType } from "./components/CellIcon/CellIcon.types";
import { BillingPeriod } from "../../Price/Price";
import { SelectValueKey } from "../../Input/Select/Select.types";

export interface Footnote {
  header: string;
  description: ReactNode;
}

export type TableComparisonRow = {
  title: string;
  footnotes?: Footnote[];
  description?: string[];
  state?: CellIconStatusType;
  image?: ReactNode;
};

export type TableComparisonItem = {
  name: string;
  value: string;
  id: number;
  price: number;
  billingPeriod: BillingPeriod;
  rows: TableComparisonRow[];
};

export interface TableComparisonProps extends ComponentPropsWithoutRef<"div"> {
  data: TableComparisonItem[];
  placeholder: string;
  title?: string;
  sticky?: boolean;
}
export interface TableComparisonHeadProps extends ComponentPropsWithoutRef<"div"> {
  data: TableComparisonItem[];
  placeholder: string;
  sticky: boolean;
  selectedItemIds: number[];
  handleSelectChange: (
    index: number,
    value: SelectValueKey | SelectValueKey[] | null,
  ) => void;
}
