import { BoxDevicePlanProps } from "@fair/react";
import Image from "next/image";
import appleIphone14Front from "../../public/apple-iphone-14-256GB-product-red-handyangebot-detail-0.png";

export const fairphone4: BoxDevicePlanProps = {
  pibHref:
    "www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [128, 256, 512],
  backgroundColor: "darkGrey",
  promotionLabel: "Inkl. 3 € mtl. Geräte-Rabatt",
  promotionLabelColor: "pink",
  image: (
    <img
      alt="Fairphone 4"
      src="https://images.congstar.de/fileadmin/files_congstar_responsive/handys/handy-abbildungen/handy-detail/2021-10-fairphone-4-grey-detail.png?auto=compress,format&q=80&w=640"
    ></img>
  ),
  title: "Fairphone 4",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 20,
    prefix: "ab",
    strikeThroughPrice: 40,
    footnotes: [{ description: "Hi", header: "hi" }],
  },
  energyLabel: "A",
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const samsungS23Ultra: BoxDevicePlanProps = {
  pibHref:
    "www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [128, 256, 512],
  backgroundColor: "darkGrey",
  image: (
    <img
      alt="Samsung Galaxy S23 Ultra Aktion"
      src="https://congstar-tuadev.imgix.net/fileadmin/files_congstar_responsive/handys/handy-abbildungen/handy-detail/samsung-galaxy-s23-ultra-256gb-phantom-black-handyangebot-detail-0.png?auto=compress,format&q=80&w=640"
    ></img>
  ),
  title: "Samsung Galaxy S23 Ultra Aktion",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    price: 40,
    strikeThroughPrice: 40,
  },
  energyLabel: "A",
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const appleIphone14: BoxDevicePlanProps = {
  pibHref:
    "www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [128, 256, 512],
  backgroundColor: "darkGrey",
  image: <Image alt="Apple iPhone 14 Aktion" src={appleIphone14Front} />,
  title: "Apple iPhone 14 Aktion",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    prefix: "ab",
    price: 20,
    strikeThroughPrice: 40,
  },
  energyLabel: "C",
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const nothingPhone: BoxDevicePlanProps = {
  pibHref:
    "www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf",
  colors: [
    { hex: "#463345", name: "Dark Pink" },
    { hex: "#756", name: "Mid Pink" },
    { hex: "#123093", name: "Royal Blue" },
    { hex: "#12b093", name: "Turquoise" },
    { hex: "#1c3093", name: "Dark Blue" },
  ],
  memorySizes: [128, 256, 512],
  backgroundColor: "darkGrey",
  image: (
    <img
      alt="Nothing Phone"
      src="https://images.congstar.de/fileadmin/files_congstar_fair/endgeraete/nothing/nothing-phone-2/nothing-phone2-gray-256gb-detail-0.png?auto=compress,format&q=80&w=640"
    ></img>
  ),
  title: "Nothing Phone",
  description: "z.B. mit der Allnet Flat M Extra mit GB+",
  price: {
    prefix: "ab",
    price: 20,
    strikeThroughPrice: 40,
  },
  energyLabel: "B",
  buttonPrimaryProps: {
    onClick: () => {
      console.log("clicked");
    },
  },
};
