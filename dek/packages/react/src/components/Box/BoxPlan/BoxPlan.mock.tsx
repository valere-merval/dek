import { BoxPlanProps } from "./BoxPlan.types";
import { BoxPlan } from "./BoxPlan";
import { BillingPeriod } from "../../../utils/pricing";

const pibHref =
  "https://www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf";

export const allnetFlatM: BoxPlanProps = {
  promotionLabel: "5 € Rabatt",
  promotionLabelColor: "pink",
  pibHref,
  title: {
    text: "Allnet Flat M mit GB+",
    color: "yellow",
  },
  text: "Jedes Jahr 5 GB mtl. mehr",
  price: (
    <BoxPlan.Price
      prefix="ab"
      price={20.0}
      billingPeriod={BillingPeriod.MONTHLY}
    />
  ),
  contingent: <BoxPlan.Contingent unit={"GB"} amount={15} />,
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const allnetFlatS: BoxPlanProps = {
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  pibHref,
  title: {
    text: "Allnet Flat S Extra mit GB+",
    color: "yellow",
  },
  text: "Jedes Jahr 5 GB mtl. mehr",
  price: (
    <BoxPlan.Price
      prefix="ab"
      price={15.3}
      billingPeriod={BillingPeriod.MONTHLY}
    />
  ),
  contingent: <BoxPlan.Contingent unit={"GB"} amount={8} />,
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const fixed50mb: BoxPlanProps = {
  pibHref,
  title: {
    text: "Congstar Zuhause 50 Flex",
    color: "yellow",
  },
  usps: [
    "Perfekt für Surfen, Streaming, Online-Gaming und Homeoffice",
    "Bis zu 50 Mbit/s Download und 25 Mbit/s Upload",
  ],
  price: (
    <BoxPlan.Price
      price={20}
      billingPeriod={BillingPeriod.MONTHLY}
      suffix="zzgl. 50,00 € Bereitstellungspreis"
      footnotes={[{ header: "50 MBit/s", description: "Jetzt noch günstiger" }]}
    />
  ),
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const fixed100mb: BoxPlanProps = {
  pibHref,
  title: {
    text: "Congstar Zuhause 100 Flex",
    color: "yellow",
  },
  usps: [
    "Ideal für regelmäßiges Surfen, online Gaming und Musik- und HD-Streaming",
    "Bis zu 100 Mbit/s Download und 40 Mbit/s Upload ",
  ],
  price: (
    <BoxPlan.Price
      price={35}
      billingPeriod={BillingPeriod.MONTHLY}
      suffix="zzgl. 50,00 € Bereitstellungspreis"
      footnotes={[
        { header: "100 MBit/s", description: "Jetzt noch günstiger" },
      ]}
    />
  ),
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const fixed250mb: BoxPlanProps = {
  pibHref,
  title: {
    text: "Congstar Zuhause 250 Flex",
    color: "orange",
  },
  usps: [
    "Optimal für paralleles Surfen, UHD-Streaming, schnelle Downloads und Online-Gaming",
    "Bis zu 250 Mbit/s Download und 40 Mbit/s Upload",
  ],
  price: (
    <BoxPlan.Price
      price={45}
      billingPeriod={BillingPeriod.MONTHLY}
      suffix="zzgl. 50,00 € Bereitstellungspreis"
      footnotes={[
        { header: "250 MBit/s", description: "Jetzt noch günstiger" },
      ]}
    />
  ),
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const fixedHomeSpotFallback: BoxPlanProps = {
  title: {
    text: "Congstar Homespot",
    color: "yellow",
  },
  price: undefined,
  text: "Die beste Alternative, wenn congstar Zuhause bei dir nicht verfügbar ist",
  usps: [
    "Internet per Mobilfunk für einen festen Ort deiner Wahl",
    "Sofort lossurfen mit bis zu 50 MBit/s",
    "bis zu 300 GB/Monat Datenvolumen",
  ],
  buttonPrimaryLabel: "Verfügbarkeit prüfen",
  buttonPrimaryProps: {
    onClick: () => {
      console.log("check...");
    },
  },
};

export const homeSpot: BoxPlanProps = {
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  pibHref,
  title: {
    text: "Homespot 100",
    color: "green",
  },
  text: "Jedes Jahr 5 GB mtl. mehr",
  price: <BoxPlan.Price price={15.3} billingPeriod={BillingPeriod.MONTHLY} />,
  contingent: <BoxPlan.Contingent unit={"GB"} amount={8} />,
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const prepaidSixMonths: BoxPlanProps = {
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  pibHref,
  title: {
    text: "Prepaid Halbjahres-Paket",
    color: "orange",
  },
  text: "Jedes Jahr 5 GB mtl. mehr",
  price: <BoxPlan.Price price={15.3} billingPeriod={BillingPeriod.MONTHLY} />,
  contingent: <BoxPlan.Contingent unit={"GB"} amount={8} />,
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const prepaidWieIchWill: BoxPlanProps = {
  promotionLabelColor: "pink",
  pibHref,
  title: {
    text: "Prepaid wie ich will",
    color: "orange",
  },
  text: "Mach dir die Welt wie sie dir gefällt",
  price: (
    <BoxPlan.PriceRange
      priceRange={{ minimum: 5, maximum: 20 }}
      billingPeriod={BillingPeriod.MONTHLY}
    />
  ),
  contingent: (
    <BoxPlan.ContingentRange
      unit={"GB"}
      amountRange={{ minimum: 10, maximum: 16 }}
    />
  ),
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};
