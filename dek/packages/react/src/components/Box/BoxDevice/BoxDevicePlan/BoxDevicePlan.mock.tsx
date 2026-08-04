import React from "react";
import { BoxDevicePlanProps } from "./BoxDevicePlan.types";

import fairphoneImage from "../../../../../.storybook/assets/images/2021-10-fairphone-4-grey-detail.png";
import samsungImage from "../../../../../.storybook/assets/images/samsung-galaxy-s24-ultra-titanium-black-aktion-tradein.png";
import iPhoneImage from "../../../../../.storybook/assets/images/apple-iphone-14-256GB-product-red-handyangebot-detail-0.png";
import nothingPhoneImage from "../../../../../.storybook/assets/images/nothing-phone2-gray-256gb-detail-0.png";

export const fairphone4: BoxDevicePlanProps = {
  pibHref: "https://google.com/pib",
  energyLabel: "B",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: ["256 GB", "512 GB", "1 TB"],
  backgroundColor: "darkGrey",
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  image: <img alt="Fairphone 4" src={fairphoneImage}></img>,
  title: "Fairphone 4",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 20,
    prefix: "ab",
    strikeThroughPrice: 40,
    footnotes: [{ description: "Hi", header: "hi" }],
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const samsungS23Ultra: BoxDevicePlanProps = {
  pibHref: "https://google.com/pib",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: ["256 GB", "512 GB", "1 TB"],
  backgroundColor: "darkGrey",
  image: <img alt="Samsung Galaxy S23 Ultra Aktion" src={samsungImage}></img>,
  title: "Samsung Galaxy S23 Ultra Aktion",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 20,
    prefix: "ab",
    strikeThroughPrice: 40,
    footnotes: [{ description: "Hi", header: "hi" }],
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const appleIphone14: BoxDevicePlanProps = {
  pibHref: "https://google.com/pib",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: ["256 GB", "512 GB", "1 TB"],
  backgroundColor: "darkGrey",
  image: <img alt="Apple iPhone 14 Aktion" src={iPhoneImage}></img>,
  title: "Apple iPhone 14 Aktion",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 20,
    prefix: "ab",
    strikeThroughPrice: 40,
    footnotes: [{ description: "Hi", header: "hi" }],
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const nothingPhone: BoxDevicePlanProps = {
  pibHref: "https://google.com/pib",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: ["256 GB", "512 GB", "1 TB"],
  backgroundColor: "darkGrey",
  image: <img alt="Nothing Phone" src={nothingPhoneImage}></img>,
  title: "Nothing Phone",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 20,
    prefix: "ab",
    strikeThroughPrice: 40,
    footnotes: [{ description: "Hi", header: "hi" }],
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const fairphone5: BoxDevicePlanProps = {
  pibHref: "https://google.com/pib",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: ["256 GB", "512 GB", "1 TB"],
  backgroundColor: "darkGrey",
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  image: <img alt="fairphone 5" src={fairphoneImage}></img>,
  title: "Fairphone 5",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 20,
    prefix: "ab",
    strikeThroughPrice: 40,
    footnotes: [{ description: "Hi", header: "hi" }],
  },
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};
