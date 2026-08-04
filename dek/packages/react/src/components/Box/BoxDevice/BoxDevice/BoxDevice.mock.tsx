import React from "react";
import { BoxDeviceProps } from "./BoxDevice.types";

import fairphoneImage from "../../../../../.storybook/assets/images/2021-10-fairphone-4-grey-detail.png";
import samsungImage from "../../../../../.storybook/assets/images/samsung-galaxy-s24-ultra-titanium-black-aktion-tradein.png";
import iPhoneImage from "../../../../../.storybook/assets/images/apple-iphone-14-256GB-product-red-handyangebot-detail-0.png";
import nothingPhoneImage from "../../../../../.storybook/assets/images/nothing-phone2-gray-256gb-detail-0.png";

export const fairphone4 = {
  backgroundColor: "darkGrey",
  energyLabel: "A",
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  image: <img alt="" src={fairphoneImage}></img>,
  title: "Fairphone 4",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [128, 256, 512],
  price: {
    price: 20,
    prefix: "ab",
    suffix: "mtl. Zuzahlung",
    strikeThroughPrice: 40,
  },
  priceSecondaryInfo: {
    text: "Einmalige Zahlung",
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
} satisfies BoxDeviceProps;

export const fairphone6 = {
  backgroundColor: "darkGrey",
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  image: <img alt="" src={fairphoneImage}></img>,
  title: "Fairphone 4",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [128, 256, 512],
  price: {
    price: 20,
    prefix: "ab",
    suffix: "mtl. Zuzahlung",
    strikeThroughPrice: 40,
  },
  priceSecondaryInfo: {
    text: "z.B. in 36 mtl. Zahlungen zzgl. 1,00 € Anzahlung",
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
} satisfies BoxDeviceProps;

export const samsungS23Ultra: BoxDeviceProps = {
  backgroundColor: "darkGrey",
  energyLabel: "B",
  image: <img alt="Aktion 300€ Ankauf Bonus" src={samsungImage}></img>,
  title: "Samsung Galaxy S23 Ultra Aktion",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [64, 128, 256, 512],
  price: {
    price: 40,
    prefix: "ab",
    suffix: "mtl.",
    strikeThroughPrice: 40,
  },
  priceSecondaryInfo: {
    prefix: "zzgl.",
    suffix: "Anzahlung",
    strikeThroughPrice: 24,
    price: 24,
  },

  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const samsungS23UltraBringback: BoxDeviceProps = {
  backgroundColor: "darkGrey",
  energyLabel: "A",
  image: <img alt="Aktion 300€ Ankauf Bonus" src={samsungImage}></img>,
  title: "Samsung Galaxy S23 Ultra Aktion",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [64, 128, 256, 512],
  price: {
    price: 30,
    prefix: "ab",
    suffix: "mtl.",
    bringbackInformation: "inkl. 180 € Vorteil bei Rückgabe",
  },
  priceSecondaryInfo: {
    text: "z. B. in 36 mtl. Zahlungen und mit der Allnet Flat M mit GB+",
  },

  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const appleIphone14: BoxDeviceProps = {
  backgroundColor: "darkGrey",
  energyLabel: "C",
  image: <img alt="-15% Aktion 949 € statt 1129 €" src={iPhoneImage}></img>,
  title: "Apple iPhone 14 Aktion",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [64, 128, 256, 512],
  price: {
    price: 20,
    prefix: "ab",
    suffix: "mtl. Zuzahlung",
    strikeThroughPrice: 40,
  },
  priceSecondaryInfo: {
    text: "Einmalige Zahlung",
  },

  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const appleIphone14BringbackMulti: BoxDeviceProps = {
  backgroundColor: "darkGrey",
  image: <img alt="-15% Aktion 949 € statt 1129 €" src={iPhoneImage}></img>,
  title: "Apple iPhone 14 Aktion",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [64, 128, 256, 512],
  price: {
    bringbackPrices: [
      {
        price: 619.9,
        suffix: "bei Rückgabe mit Gebrauchsspuren",
      },
      {
        price: 799.99,
        prefix: "ab",
        suffix: "bei Nichtrückgabe oder Defekt",
      },
    ],
  },
  priceSecondaryInfo: {
    text: "zzgl. 22,00 € mtl. Tarifkosten",
  },

  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const nothingPhone: BoxDeviceProps = {
  backgroundColor: "darkGrey",
  energyLabel: "D",
  image: <img alt="" src={nothingPhoneImage}></img>,
  title: "Nothing Phone",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [64, 128, 256, 512],
  price: {
    price: 20,
    prefix: "ab",
    suffix: "mtl. Zuzahlung",
    strikeThroughPrice: 40,
  },
  priceSecondaryInfo: {
    text: "Einmalige Zahlung",
  },

  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};
