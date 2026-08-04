import { ReactNode } from "react";
import { BoxProps } from "../../shared/Box";
import { PriceProps } from "../../../Price/Price";
import {
  BoxDeviceBackgroundColor,
  BoxDeviceButtonPrimaryProps,
} from "../shared";
import { HeadlineTag } from "../../../Typography/Headline";
import { Color } from "../../../ColorVariants";
import { EnergyLabel } from "../../../EnergyLabel/EnergyLabel.types";

export type BoxDevicePlanProps = {
  title: string;
  description: string;
  price: BoxDevicePlanPrice;
  image: ReactNode;
  pibHref: string;
  colors: Color[];
  headlineLevel?: HeadlineTag;
  /*
   *  You can pass an array of strings. For compatibility reasons, you can also pass an array of numbers. But be aware that this will be removed in the future.
   */
  memorySizes: number[] | string[];
  backgroundColor?: BoxDeviceBackgroundColor;
  buttonPrimaryProps: BoxDeviceButtonPrimaryProps;
  energyLabel?: EnergyLabel;
} & Omit<BoxProps, "children" | "onClick">;

export interface BoxDevicePlanPrice
  extends Omit<PriceProps, "size" | "billingPeriod"> {}
