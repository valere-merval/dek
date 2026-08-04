import { BillingPeriod } from "../models";
import { formatBillingPeriod } from "./formatBillingPeriod";

export type FormattingOptions = {
  useCentsForSmallValues?: boolean;
};
type FormatPriceFunction = (
  amount: number,
  billingPeriod?: BillingPeriod,
  options?: FormattingOptions,
) => string;

/**
 * Formatiert einen Preis inkl. Abrechnungszeitraum (Bsp. 12,99 € mtl.)
 * @param amount
 * @param billingPeriod
 * @param options
 * @category Utility
 */
export const formatPrice: FormatPriceFunction = (
  amount,
  billingPeriod,
  options,
) => {
  let price = amount.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (options?.useCentsForSmallValues && amount < 0.1 && amount > 0) {
    price = amount * 100 + " Cent";
  }

  if (billingPeriod) {
    return `${price} ${formatBillingPeriod(billingPeriod)}`;
  }

  return price;
};
