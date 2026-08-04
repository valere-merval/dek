import { CardPriceOverviewVariant } from "../CardPriceOverview";
import { OverviewBonusDisplayPrice } from "../../../utils/pricing";
import { ComponentPropsWithoutRef } from "react";

export interface CardBonusProps extends ComponentPropsWithoutRef<"div"> {
  overviewBonusDisplayPrices: OverviewBonusDisplayPrice;
  variant?: CardPriceOverviewVariant;
}
