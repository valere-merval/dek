import { MessageInfoProps } from "../../Message/MessageInfo";
import {
  OverviewOneTimeDisplayPrice,
  OverviewRecurringDisplayPrice,
  OverviewRecurringDisplayPriceItem,
} from "../../../utils/pricing";
import { PriceSummaryBaseProps } from "./Base";

export type OneTimeCosts = OverviewOneTimeDisplayPrice & {
  title?: string;
};

export type RecurringCosts = {
  /**
   * Überschrift für die wiederkehrenden Kosten
   * @default "Monatliche Kosten"
   */
  headline?: string;
  items: Omit<OverviewRecurringDisplayPriceItem, "descriptions">[];
};

export type PrepaidInfo = {
  type: "prepaid";
  messageInfo: Omit<MessageInfoProps, "fullWidth" | "outline">;
};

export type BringbackInfo = {
  type: "bringback";
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

export type BonusBucketInfo = {
  type: "bonus";
  messageInfo: Omit<MessageInfoProps, "fullWidth" | "outline">;
};

export type AdditionalSection = PrepaidInfo | BringbackInfo | BonusBucketInfo;

/**
 * Props für die PriceSummary-Komponente
 *
 * Unterstützt folgende Anwendungsfälle:
 * - Postpaid: Monatliche Kosten + Einmalige Kosten + optional Bringback
 * - Fixed: Monatliche Kosten + Einmalige Kosten (wie Postpaid)
 * - Prepaid: Laufende Kosten + optional Einmalige Kosten + Guthaben-Info
 */
export interface PriceSummaryProps extends Omit<
  PriceSummaryBaseProps,
  "leftSide" | "rightSide"
> {
  recurringCosts: RecurringCosts;
  oneTimeCosts?: OneTimeCosts;
  additionalSection?: AdditionalSection;
}

export type { OverviewRecurringDisplayPrice, OverviewOneTimeDisplayPrice };
