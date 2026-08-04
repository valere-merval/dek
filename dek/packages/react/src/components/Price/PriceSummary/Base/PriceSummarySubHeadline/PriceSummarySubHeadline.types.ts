import { ReactNode } from "react";
import { WithTestId } from "../../../../propTypes";

export interface PriceSummarySubHeadlineProps extends WithTestId {
  /** Text (e.g., "Guthaben auf Sim-Karte") */
  children: ReactNode;
  /** Price as number, will be formatted automatically (e.g., 10 → "10,00 €") */
  price: number;
}
