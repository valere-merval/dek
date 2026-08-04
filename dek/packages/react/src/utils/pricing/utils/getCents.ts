type GetCents = (amount: number) => string;

/**
 * Gibt den die Cent-Wert eines Preises zurück. Bei einstelligen Werten mit führender Null, z.B. '05'.
 * @param amount
 *
 * @category Utility
 */
export const getCents: GetCents = (amount) => {
  const price = amount.toLocaleString("de-DE", {
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return price.toString().split(",")[1];
};
