import { BillingPeriod, TableComparisonItem } from "@fair/react";
import samsungFlipImage from "../../public/samsung-galaxy-z-flip5-sm-f731b-graphite-front-open-logoscreen-rgb.png";
import samsungFoldImage from "../../public/samsung-galaxy-z-fold6-sm-f956b-navy-front-logoscreen-rgb.png";
import Image from "next/image";

export const plan50: TableComparisonItem = {
  name: "congstar zuhause 50 Flex",
  value: "50 MBit/s",
  id: 1,
  price: 20,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Gerät",
      image: <Image alt="Samsung Galaxy Z Flip5" src={samsungFlipImage} />,
    },
    { title: "Anzahl der Nutzer", description: ["1 - 2 Nutzer"] },
    {
      title: "Download Geschwindigkeit",
      footnotes: [
        {
          header: "Ganz viel Downloads",
          description: "give mee speed",
        },
      ],
      description: ["50 MBit/s"],
    },
    { title: "Telefonie", state: "not-available" },

    { title: "Upload Geschwindigkeit", description: ["20 Mbits"] },
  ],
};
export const plan150: TableComparisonItem = {
  name: "congstar zuhause 150 Flex",
  value: "150 MBit/s",
  id: 2,
  price: 40,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Gerät",
      image: <Image alt="Samsung Galaxy Z Fold6" src={samsungFoldImage} />,
    },
    { title: "Anzahl der Nutzer", description: ["2 - 4 Nutzer"] },
    {
      title: "Download Geschwindigkeit",
      footnotes: [
        {
          header: "Ganz viel Downloadsss",
          description: "give mee more speed",
        },
      ],
      description: ["150 MBit/s"],
    },

    { title: "Telefonie", state: "available" },
    { title: "Upload Geschwindigkeit", description: ["20 Mbits"] },
    {
      title: "Vorteile",
      description: ["Günstig, ausreichend für alltägliche Nutzung"],
    },
  ],
};

export const plan250: TableComparisonItem = {
  name: "congstar zuhause 250 Flex",
  value: "250 MBit/s",
  id: 3,
  price: 60,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    { title: "Anzahl der Nutzer", description: ["2 - 4 Nutzer"] },
    {
      title: "Download Geschwindigkeit",
      footnotes: [
        {
          header: "Ganz viel Downloads",
          description: "give mee speed",
        },
      ],
      description: ["250 MBit/s"],
    },
    { title: "Telefonie", state: "not-available" },
    { title: "Upload Geschwindigkeit", description: ["20 Mbits"] },
    {
      title: "Vorteile",
      description: ["Günstig, ausreichend für alltägliche Nutzung"],
    },
  ],
};

export const plansMock = [plan50, plan150, plan250];
