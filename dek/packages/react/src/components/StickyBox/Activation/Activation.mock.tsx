import { ReactElement } from "react";
import { PrepaidShoppingCartListItemProps } from "../ShoppingCart/Prepaid/PrepaidShoppingCart.types";
import { Activation } from "./Activation";

export const listItems: ReactElement<PrepaidShoppingCartListItemProps>[] = [
  <Activation.ListItem key="Startguthaben" data-testid="list-description-1">
    Du erhältst{" "}
    <Activation.BoldText>10,00 € Startguthaben </Activation.BoldText> auf deine
    Prepaid-Karte. Die ersten{" "}
    <Activation.BoldText>4 Wochen</Activation.BoldText> sind somit mindestens
    abgedeckt.
  </Activation.ListItem>,

  <Activation.ListItem
    key="Abrechnungszeitraum"
    data-testid="list-description-2"
  >
    <Activation.BoldText>
      Alle weiteren 4 Wochen werden 10,00 €
    </Activation.BoldText>{" "}
    von deinem Prepaid-Guthaben abgebucht und dein Datenvolumen und deine
    Telefonie-/SMS-Flat werden wieder erneuert.
  </Activation.ListItem>,

  <Activation.ListItem key="Immer erreichbar" data-testid="list-description-3">
    Ist dein Prepaid-Guthaben nicht aufgeladen, wird auch nichts abgebucht und
    es entstehen keine Kosten für dich. Du bleibst aber weiterhin erreichbar.
  </Activation.ListItem>,
];

export const yearPacketListItems: ReactElement<PrepaidShoppingCartListItemProps>[] =
  [
    <Activation.ListItem key="Startguthaben" data-testid="list-description-1">
      Du erhältst{" "}
      <Activation.BoldText>100,00 € Startguthaben </Activation.BoldText> auf
      deine Prepaid-Karte. Die ersten{" "}
      <Activation.BoldText>12 Monate</Activation.BoldText> sind somit mindestens
      abgedeckt.
    </Activation.ListItem>,

    <Activation.ListItem
      key="Abrechnungszeitraum"
      data-testid="list-description-2"
    >
      <Activation.BoldText>
        Alle weiteren 12 Monate werden 100,00 €
      </Activation.BoldText>{" "}
      von deinem Prepaid-Guthaben abgebucht und dein Datenvolumen und deine
      Telefonie-/SMS-Flat werden wieder erneuert.
    </Activation.ListItem>,

    <Activation.ListItem
      key="Immer erreichbar"
      data-testid="list-description-3"
    >
      Ist dein Prepaid-Guthaben nicht aufgeladen, wird auch nichts abgebucht und
      es entstehen keine Kosten für dich. Du bleibst aber weiterhin erreichbar.
    </Activation.ListItem>,
  ];
