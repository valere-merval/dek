import { ContingentUnit } from "../Contingent.types";

export type FormattedContingentUnitForScreenReader =
  | "Gigabyte"
  | "Megabyte"
  | "Megabit pro Sekunde";

/**
 * Übersetzt den Abrechnungszeitraum (z.B. mtl.)
 * @param unit
 *
 * @category Utility
 */
export const formatContingentUnitForScreenreader = (
  unit: ContingentUnit,
): FormattedContingentUnitForScreenReader => {
  switch (unit) {
    case "GB":
      return "Gigabyte";
    case "MB":
      return "Megabyte";
    case "Mbit/s":
      return "Megabit pro Sekunde";
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
};
