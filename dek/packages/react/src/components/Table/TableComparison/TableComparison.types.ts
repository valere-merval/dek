import { ComponentPropsWithoutRef, ReactNode } from "react";
import { CellIconStatusType } from "./components/CellIcon/CellIcon.types";
import { BillingPeriod } from "../../Price/Price";
import { SelectValueKey } from "../../Input/Select/Select.types";
import { ButtonMoreDetailsProps } from "../../Button/ButtonMoreDetails";
import { HeadlineTag } from "../../Typography/Headline/Headline.types";

export interface Footnote {
  header: string;
  description: ReactNode;
}

export interface TableComparisonRow {
  title: string;
  footnotes?: Footnote[];
  description?: string[];
  state?: CellIconStatusType;
  image?: ReactNode;
  link?: ButtonMoreDetailsProps;
}

type Price =
  | {
      priceUnknown: true;
      price?: never;
      billingPeriod?: never;
    }
  | {
      priceUnknown?: never;
      price: number;
      billingPeriod: BillingPeriod;
    };

export interface TableComparisonItem {
  name: string;
  value: string;
  id: number;
  price: Price;
  rows: TableComparisonRow[];
}

export interface TableComparisonProps extends ComponentPropsWithoutRef<"div"> {
  data: TableComparisonItem[];
  placeholder: string;
  title?: string;
  headlineLevel?: HeadlineTag;
  sticky?: boolean;
  showThirdColumn?: boolean;
}
export interface TableComparisonHeadProps extends ComponentPropsWithoutRef<"div"> {
  data: TableComparisonItem[];
  placeholder: string;
  sticky: boolean;
  showThirdColumn: boolean;
  selectedItemIds: number[];
  handleSelectChange: (
    index: number,
    value: SelectValueKey | SelectValueKey[] | null,
  ) => void;
}
