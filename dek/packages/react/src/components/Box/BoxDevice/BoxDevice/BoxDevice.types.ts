import { ComponentPropsWithoutRef, ReactNode } from "react";
import { BoxProps } from "../../shared/Box";
import {
  BoxDeviceBackgroundColor,
  BoxDeviceButtonPrimaryProps,
} from "../shared";
import { HeadlineTag } from "../../../Typography/Headline";
import { Color } from "../../../ColorVariants";
import { EnergyLabel } from "../../../EnergyLabel/EnergyLabel.types";

export type BoxDeviceProps = {
  backgroundColor?: BoxDeviceBackgroundColor;
  price: BoxDevicePriceSecondaryInfoComplex | BringbackPrices;
  priceSecondaryInfo?: BoxDevicePriceSecondaryInfo;
  image: ReactNode;
  title: string;
  colors: Color[];
  pibHref?: string;
  headlineLevel?: HeadlineTag;
  /*
   * You can pass an array of strings. For compatibility reasons, you can also pass an array of numbers. But be aware that this will be removed in the future.
   */
  memorySizes: number[] | string[];
  buttonPrimaryProps: BoxDeviceButtonPrimaryProps;
  energyLabel?: EnergyLabel;
  // TODO: Check if issue of react-docgen is resolved: https://github.com/reactjs/react-docgen/issues/882. This results in not seeing the union types in storybook controls.
} & Omit<BoxProps, "children" | "onClick">;

export interface BoxDevicePriceSecondaryInfoComplex {
  price: number;
  strikeThroughPrice?: number;
  prefix?: string;
  suffix?: string;
}

export interface BoxDevicePriceSecondaryInfoSimple {
  text: string;
}

export type BoxDevicePriceSecondaryInfo = ComponentPropsWithoutRef<"div"> &
  (BoxDevicePriceSecondaryInfoComplex | BoxDevicePriceSecondaryInfoSimple);

export type BringbackPrices = BringbackMultiPrice | BringbackSingularPrice;

export interface BringbackSingularPrice
  extends BoxDevicePriceSecondaryInfoComplex {
  bringbackInformation: string;
}

export interface BringbackMultiPrice {
  bringbackPrices: [
    BoxDevicePriceSecondaryInfoComplex,
    BoxDevicePriceSecondaryInfoComplex,
  ];
}
