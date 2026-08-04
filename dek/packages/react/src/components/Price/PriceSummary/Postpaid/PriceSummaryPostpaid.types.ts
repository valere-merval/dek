import {
  OverviewOneTimeDisplayPrice,
  OverviewRecurringDisplayPrice,
} from "../../../../utils/pricing";
import { PriceSummaryBaseProps } from "../Base";

export interface PriceSummaryPostpaidProps
  extends Omit<PriceSummaryBaseProps, "leftSide" | "rightSide"> {
  shippingCostFree?: boolean;
  overviewRecurringDisplayPrices: OverviewRecurringDisplayPrice[];
  overviewOneTimeDisplayPrice: OverviewOneTimeDisplayPriceWithTitle;
  bringback?: Bringback;
}

export type OverviewOneTimeDisplayPriceWithTitle =
  OverviewOneTimeDisplayPrice & {
    title?: string;
  };

export type Bringback = {
  sectionHeader: string;
  mainTitle: string;
  subTitle: string;
  priceOptions: PriceOption[];
  lastBoldOption: PriceOption;
};

type PriceOption = {
  title: string;
  amount: number | string;
};
