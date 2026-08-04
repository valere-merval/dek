import { BillingPeriod } from "../../../utils/pricing";
import { PlanSelectionPlan } from "./PlanSelectionCart.types";

export const plans: PlanSelectionPlan[] = [
  {
    id: 1252,
    contingent: "5 GB",
    title: "Allnet Flat S mit GB+",
    price: { amount: 12, billingPeriod: BillingPeriod.MONTHLY },
  },
  {
    id: 8382,
    contingent: "10 GB",
    title: "Allnet Flat S Extra mit GB+",
    price: { amount: 17, billingPeriod: BillingPeriod.MONTHLY },
  },
  {
    id: 5346,
    contingent: "20 GB",
    title: "Allnet Flat M mit GB+",
    price: { amount: 22, billingPeriod: BillingPeriod.MONTHLY },
  },
  {
    id: 5347,
    contingent: "30 GB",
    title: "Allnet Flat L mit GB+",
    price: { amount: 27, billingPeriod: BillingPeriod.MONTHLY },
  },
];
