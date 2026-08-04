import { BillingPeriod } from "../../../../utils/pricing";
import { PaymentMethod } from "../../../PaymentIcon/PaymentIcon.types";
import {
  PrepaidPlanElement,
  PrepaidPlanType,
  PrepaidPriceElement,
  PrepaidShoppingCartListItemProps,
  PrepaidShoppingCartProps,
} from "./PrepaidShoppingCart.types";

import { PrepaidShoppingCart } from "./PrepaidShoppingCart";
import { ReactElement } from "react";

export const priceElementMock: PrepaidPriceElement = {
  billingPeriod: BillingPeriod.FOUR_WEEKS,
  starterKitAmount: 9.99,
  totalPriceAmount: 2,
};

export const pwiwPlanElementMock: PrepaidPlanElement = {
  type: PrepaidPlanType.PWIW,
};

export const priceElementYearMock: PrepaidPriceElement = {
  billingPeriod: BillingPeriod.TWELVE_MONTHS,
  starterKitAmount: 100,
  totalPriceAmount: 100,
};

export const prepaidYearPlanElementMock: PrepaidPlanElement = {
  type: PrepaidPlanType.YEAR,
};

export const paymentMethodMock = [PaymentMethod.DIRECT_DEBIT];

export const listItems: ReactElement<PrepaidShoppingCartListItemProps>[] = [
  <PrepaidShoppingCart.ListItem
    key="EinmalPreis"
    data-testid="list-description-1"
  >
    Du zahlst den{" "}
    <PrepaidShoppingCart.BoldText>
      Starterpaket-Preis einmalig
    </PrepaidShoppingCart.BoldText>{" "}
    bei der Bestellung deiner neuen Prepaid Karte
  </PrepaidShoppingCart.ListItem>,

  <PrepaidShoppingCart.ListItem
    key="Startguthaben"
    data-testid="list-description-2"
  >
    Dafür erhältst du{" "}
    <PrepaidShoppingCart.BoldText>
      10,00 € Startguthaben
    </PrepaidShoppingCart.BoldText>{" "}
    auf deine Prepaid Karte
  </PrepaidShoppingCart.ListItem>,

  <PrepaidShoppingCart.ListItem
    key="Abrechnungszeitraum"
    data-testid="list-description-3"
  >
    <PrepaidShoppingCart.BoldText>
      Alle 4 Wochen werden 2,00 €
    </PrepaidShoppingCart.BoldText>{" "}
    von deinem Prepaid Guthaben abgebucht. Du erhältst eine{" "}
    <PrepaidShoppingCart.BoldText>1 GB Surf Flat</PrepaidShoppingCart.BoldText>{" "}
    und deine Telefonie/SMS- Flat wird erneuert
  </PrepaidShoppingCart.ListItem>,

  <PrepaidShoppingCart.ListItem
    key="Immer erreichbar"
    data-testid="list-description-4"
  >
    Ist dein Prepaid Guthaben nicht aufgeladen, wird auch nichts abgebucht und
    es entstehen keine Kosten für dich. Du bleibst aber weiterhin erreichbar
  </PrepaidShoppingCart.ListItem>,
];

export const shoppingCardPropsMock: PrepaidShoppingCartProps = {
  listItems,
  checkoutUrl: "#",
  priceElement: priceElementMock,
  planElement: pwiwPlanElementMock,
  paymentMethods: paymentMethodMock,
};
