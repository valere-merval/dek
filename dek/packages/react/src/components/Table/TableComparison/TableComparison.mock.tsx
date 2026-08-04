import { BillingPeriod } from "../../../utils/pricing/models/BillingPeriod";
import { TableComparisonItem } from "./TableComparison.types";
import samsungFlipImage from "../../../../.storybook/assets/images/samsung-galaxy-z-flip5-sm-f731b-graphite-front-open-logoscreen-rgb.png";
import samsungFoldImage from "../../../../.storybook/assets/images/samsung-galaxy-z-fold6-sm-f956b-navy-front-logoscreen-rgb.png";
import routerImage from "../../../../.storybook/assets/images/tcl-router.png";

const downloadFootnote = [
  {
    header: "Download im Detail",
    description: "Bis zu 250 Mbit/s Download",
  },
];

const uploadFootnote = [
  {
    header: "Upload im Detail",
    description: "Bis zu 40 Mbit/s Upload",
  },
];

export const plan50: TableComparisonItem = {
  name: "congstar zuhause 50 Flex",
  value: "50 MBit/s",
  id: 1,
  price: 20,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Gerät",
      image: <img alt="Router" src={routerImage}></img>,
    },
    {
      title: "Download Geschwindigkeit",
      footnotes: downloadFootnote,
      description: ["50 MBit/s"],
    },
    {
      title: "Download für 1 GB Daten",
      description: ["2 min 40 sec"],
    },
    {
      title: "Upload Geschwindigkeit",
      footnotes: uploadFootnote,
      description: ["20 MBit/s"],
    },
    { title: "Anzahl der Nutzer", description: ["1 - 2 Nutzer"] },
    { title: "Telefonie", state: "not-available" },
    { title: "Monatlich kündbar", state: "available" },
    {
      title: "Nachteile",
      description: ["Begrenzte Geschwindigkeit bei mehreren Nutzern"],
    },
  ],
};
export const plan100: TableComparisonItem = {
  name: "congstar zuhause 100 Flex",
  value: "100 MBit/s",
  id: 2,
  price: 35,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Download Geschwindigkeit",
      footnotes: downloadFootnote,
      description: ["100 MBit/s"],
    },
    {
      title: "Download für 1 GB Daten",
      description: ["1 min 20 sec"],
    },
    {
      title: "Upload Geschwindigkeit",
      footnotes: uploadFootnote,
      description: ["40 MBit/s"],
    },
    { title: "Anzahl der Nutzer", description: ["+5 Nutzer"] },
    { title: "Telefonie", state: "not-available" },
    { title: "Monatlich kündbar", state: "available" },
    {
      title: "Vorteile",
      description: ["Günstig, ausreichend für alltägliche Nutzung"],
    },
    {
      title: "Nachteile",
      description: ["Höhere Kosten, eventuell nicht überall verfügbar"],
    },
  ],
};

export const plan250: TableComparisonItem = {
  name: "congstar zuhause 250 Flex",
  value: "250 MBit/s",
  id: 3,
  price: 45,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Download Geschwindigkeit",
      footnotes: downloadFootnote,
      description: ["150 MBit/s"],
    },
    {
      title: "Download für 1 GB Daten",
      description: ["32 sec"],
    },
    {
      title: "Upload Geschwindigkeit",
      footnotes: uploadFootnote,
      description: ["40 MBit/s"],
    },
    { title: "Anzahl der Nutzer", description: ["+10 Nutzer"] },
    { title: "Telefonie", state: "not-available" },
    { title: "Monatlich kündbar", state: "available" },
    {
      title: "Vorteile",
      description: ["Optimale Geschwindigkeiten für eine große Familie"],
    },
  ],
};

export const plan50Phone: TableComparisonItem = {
  name: "congstar zuhause 50 Flex",
  value: "50 MBit/s",
  id: 1,
  price: 20,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Gerät",
      image: <img alt="Samsung Galaxy Z Flip5" src={samsungFlipImage}></img>,
    },
    {
      title: "Download Geschwindigkeit",
      footnotes: downloadFootnote,
      description: ["50 MBit/s"],
    },
    {
      title: "Download für 1 GB Daten",
      description: ["2 min 40 sec"],
    },
    {
      title: "Upload Geschwindigkeit",
      footnotes: uploadFootnote,
      description: ["20 MBit/s"],
    },
    { title: "Anzahl der Nutzer", description: ["1 - 2 Nutzer"] },
    { title: "Telefonie", state: "not-available" },
    { title: "Monatlich kündbar", state: "available" },
    {
      title: "Nachteile",
      description: ["Begrenzte Geschwindigkeit bei mehreren Nutzern"],
    },
  ],
};
export const plan100Phone: TableComparisonItem = {
  name: "congstar zuhause 100 Flex",
  value: "100 MBit/s",
  id: 2,
  price: 35,
  billingPeriod: BillingPeriod.MONTHLY,
  rows: [
    {
      title: "Gerät",
      image: <img alt="Samsung Galaxy Z Fold6" src={samsungFoldImage}></img>,
    },
    {
      title: "Download Geschwindigkeit",
      footnotes: downloadFootnote,
      description: ["100 MBit/s"],
    },
    {
      title: "Download für 1 GB Daten",
      description: ["1 min 20 sec"],
    },
    {
      title: "Upload Geschwindigkeit",
      footnotes: uploadFootnote,
      description: ["40 MBit/s"],
    },
    { title: "Anzahl der Nutzer", description: ["+5 Nutzer"] },
    { title: "Telefonie", state: "not-available" },
    { title: "Monatlich kündbar", state: "available" },
    {
      title: "Vorteile",
      description: ["Günstig, ausreichend für alltägliche Nutzung"],
    },
    {
      title: "Nachteile",
      description: ["Höhere Kosten, eventuell nicht überall verfügbar"],
    },
  ],
};

export const plansMock = [plan50, plan100, plan250];
export const plansMockOnlyTwo = [plan50, plan100];
export const plansMockPhone = [plan50Phone, plan100Phone, plan250];
