type GetEuros = (amount: number) => string;

/**
 * Gibt den die Euro-Wert eines Preises zurück
 * @param amount
 *
 * @category Utility
 */
export const getEuros: GetEuros = (amount) => {
  const price = amount.toLocaleString("de-DE", {
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return price.toString().split(",")[0];
};
