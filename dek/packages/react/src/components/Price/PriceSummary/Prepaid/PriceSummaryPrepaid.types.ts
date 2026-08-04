import { MessageInfoProps } from "../../../Message/MessageInfo";
import { OverviewOneTimeDisplayPriceWithTitle } from "../Postpaid/PriceSummaryPostpaid.types";
import { PriceSummaryBaseProps } from "../Base";

export interface PriceSummaryPrepaidProps
  extends Omit<
    PriceSummaryBaseProps,
    "leftSide" | "rightSide" | "nextStepMessageInfo"
  > {
  prepaidMessageInfo?: PrepaidMessageInfo;
  priceElement: PriceElement;
  overviewOneTimeDisplayPrice?: OverviewOneTimeDisplayPriceWithTitle;
}

export type PrepaidMessageInfo = Omit<
  MessageInfoProps,
  "fullWidth" | "outline"
>;

export type PriceElement = {
  price: number;
  description: string;
};
