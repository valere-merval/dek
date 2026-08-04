import { MouseEvent } from "react";
import {
  OverviewBonusDisplayPrice,
  OverviewOneTimeDisplayPrice,
  OverviewRecurringDisplayPrice,
} from "../../../../utils/pricing";
import { PaymentMethod } from "../../../PaymentIcon/PaymentIcon.types";

export interface PostpaidShoppingCartProps {
  overviewRecurringDisplayPrices: OverviewRecurringDisplayPrice[];
  overviewOneTimeDisplayPrice: OverviewOneTimeDisplayPrice;
  bringback?: Bringback;
  overviewBonusDisplayPrices?: OverviewBonusDisplayPrice;
  checkoutUrl?: string;
  checkoutButtonText?: string;
  paymentMethods?: PaymentMethod[];
  onCheckout?: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface Bringback {
  sectionHeader: string;
  accordionHeader: string;
  subTitle: string;
  priceOptions: PriceOption[];
  lastOption: PriceOption;
}

type PriceOption = {
  title: string;
  amount: number | string;
};
