import type { BoxPlanProps } from "@fair/react";
import { BillingPeriod, BoxPlan } from "@fair/react";

const pibHref =
  "https://www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf";

export const allnetFlatS: BoxPlanProps = {
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  pibHref: "google",
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
    text: "50 MBit/s",
    color: "yellow",
  },
  text: "congstar Zuhause 50 Flex",
  usps: [
    "Perfekt für Surfen, Streaming, Online-Gaming und Homeoffice",
    "Bis zu 50 Mbit/s Download and 25 Mbit/s Upload",
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
    text: "100 MBit/s",
    color: "yellow",
  },
  text: "congstar Zuhause 100 Flex",
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
    text: "250 MBit/s",
    color: "orange",
  },
  text: "congstar Zuhause 250 Flex",
  usps: [
    "Optimal für paralleles Surfen, UHD-Streaming, schnelle Downloads und Online-Gaming",
    "Bis zu 250 Mbit/s Download and 40 Mbit/s Upload",
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
