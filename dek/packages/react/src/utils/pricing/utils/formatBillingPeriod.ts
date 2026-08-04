import { BillingPeriod } from "../models";

type FormatBillingPeriodFunction = (
  billingPeriod: BillingPeriod,
) => FormattedBillingPeriod;

export type FormattedBillingPeriod =
  | "mtl."
  | "einmalig"
  | "/ Tag"
  | "/ 4 Wochen"
  | "/ 30 Tage"
  | "/ 6 Monate"
  | "/ 12 Monate";

type FormatBillingPeriodForScreenReaderFunction = (
  billingPeriod: BillingPeriod,
) => FormattedBillingPeriodForScreenReader;

export type FormattedBillingPeriodForScreenReader =
  | "monatlich"
  | "einmalig"
  | "pro Tag"
  | "pro 4 Wochen"
  | "pro 30 Tage"
  | "pro 6 Monate"
  | "pro 12 Monate";

/**
 * Übersetzt den Abrechnungszeitraum (z.B. mtl.)
 * @param billingPeriod
 *
 * @category Utility
 */
export const formatBillingPeriod: FormatBillingPeriodFunction = (
  billingPeriod,
) => {
  switch (billingPeriod) {
    case BillingPeriod.ONE_TIME:
      return "einmalig";
    case BillingPeriod.MONTHLY:
      return "mtl.";
    case BillingPeriod.USAGE:
      return "/ Tag";
    case BillingPeriod.FOUR_WEEKS:
      return "/ 4 Wochen";
    case BillingPeriod.THIRTY_DAYS:
      return "/ 30 Tage";
    case BillingPeriod.SIX_MONTHS:
      return "/ 6 Monate";
    case BillingPeriod.TWELVE_MONTHS:
      return "/ 12 Monate";
    default:
      throw new Error(`Unknown billingPeriod: ${billingPeriod}`);
  }
};

/**
 * Übersetzt den Abrechnungszeitraum (z.B. mtl.)
 * @param billingPeriod
 *
 * @category Utility
 */
export const formatBillingPeriodForScreenreader: FormatBillingPeriodForScreenReaderFunction =
  (billingPeriod) => {
    switch (billingPeriod) {
      case BillingPeriod.ONE_TIME:
        return "einmalig";
      case BillingPeriod.MONTHLY:
        return "monatlich";
      case BillingPeriod.USAGE:
        return "pro Tag";
      case BillingPeriod.FOUR_WEEKS:
        return "pro 4 Wochen";
      case BillingPeriod.THIRTY_DAYS:
        return "pro 30 Tage";
      case BillingPeriod.SIX_MONTHS:
        return "pro 6 Monate";
      case BillingPeriod.TWELVE_MONTHS:
        return "pro 12 Monate";
      default:
        throw new Error(`Unknown billingPeriod: ${billingPeriod}`);
    }
  };
