import {
  OverviewBonusDisplayPrice,
  OverviewOneTimeDisplayPrice,
  OverviewRecurringDisplayPrice,
} from "../../../../utils/pricing";

import { PaymentMethod } from "../../../PaymentIcon/PaymentIcon.types";

export const overviewRecurringDisplayPricesMock: OverviewRecurringDisplayPrice[] =
  [
    {
      title: "1. bis 24. Monat",
      amount: 19,
      items: [
        {
          title: "Gerät (36 mtl. Zahlungen)",
          amount: 9,
          descriptions: [],
        },
        {
          title: "Tarif (nach 24 Monaten mtl. kündbar)",
          amount: 10,
          descriptions: [],
        },
        {
          title: "5G",
          amount: 3,
          descriptions: [],
        },
      ],
    },
    {
      title: "ab dem 25. Monat",
      amount: 19,
      items: [
        {
          title: "Tarif",
          amount: 19,
          descriptions: ["nach 24 Monaten monatlich kündbar"],
        },
      ],
    },
  ];

export const overviewRecurringDisplayPricesMockWithDifferentAmounts: OverviewRecurringDisplayPrice[] =
  [
    overviewRecurringDisplayPricesMock[0],
    {
      title: "ab dem 25. Monat",
      amount: 39,
      items: [
        {
          title: "Tarif",
          amount: 39,
          descriptions: ["nach 24 Monaten monatlich kündbar"],
        },
      ],
    },
  ];

export const overviewOneTimeDisplayPriceMock: OverviewOneTimeDisplayPrice = {
  items: [
    {
      title: "Geräteanzahlung",
      amount: 49,
    },
  ],
  amount: 49,
  shipping: 4.99,
};

export const paymentMethodMock = [
  PaymentMethod.DIRECT_DEBIT,
  PaymentMethod.PAYPAL,
];

export const bringBackMock = {
  sectionHeader: "Rückgabedeal",
  accordionHeader: "38. Monat, deine Optionen",
  subTitle: "Du gibst das Gerät zurück",
  priceOptions: [
    {
      title: "a) mit Gebrauchtsspuren",
      amount: "Keine Kosten",
    },
    {
      title: "b) mit Displaybruch",
      amount: 99,
    },
    {
      title: "c) defekt",
      amount: 180,
    },
  ],
  lastOption: {
    title: "Du behältst das Gerät",
    amount: 180,
  },
};

export const overviewBonusDisplayPricesMock: OverviewBonusDisplayPrice = {
  amount: 100,
  detailTexts: [
    "Der Bonus wird über 3 Monate verteilt, d. h. du erhältst 3 x 30 € Rabatt auf den monatlichen Grundpreis.",
    "In den ersten 3 Monaten zahlst du 7 € monatlich, ab dem 4. Monat 35 € monatlich für deinen Tarif.",
  ],
  footnoteText:
    "Werden über die ersten 3 Monate in Höhe von 30 Euro pro Monat auf die monatlichen Tarifkosten gutgeschrieben.",
  items: [
    {
      title: "Starter-Bonus",
      amount: 70,
    },
    {
      title: "Extra-Bonus",
      amount: 30,
    },
  ],
};
