import { BoxProps } from "../shared/Box";
import { HeadlineHighlightedColor } from "../../Typography/HeadlineHighlighted";
import { ReactNode } from "react";
import { PriceProps } from "../../Price/Price";
import { PriceRangeProps } from "../../Price/PriceRange";
import { ContingentProps } from "../../Contingent/Contingent";
import { ContingentRangeProps } from "../../Contingent/ContingentRange";
import {
  ButtonPrimaryForBoxHref,
  ButtonPrimaryForBoxOnClick,
} from "../shared/ButtonPrimaryForBox";
import { HeadlineTag } from "../../Typography/Headline";

export type BoxPlanTitle = {
  text: string;
  color: HeadlineHighlightedColor;
};

export type BoxPlanButtonPrimaryProps =
  | ButtonPrimaryForBoxOnClick
  | ButtonPrimaryForBoxHref;

export type BoxPlanProps = {
  title: BoxPlanTitle;
  text?: string;
  pibHref?: string;
  price: ReactNode;
  contingent?: ReactNode;
  usps?: string[];
  headlineLevel?: HeadlineTag;
  buttonPrimaryProps: BoxPlanButtonPrimaryProps;
  buttonPrimaryLabel?: string;
} & Omit<BoxProps, "children" | "title" | "onClick">;

export type BoxPlanPriceProps = Omit<PriceProps, "size">;
export type BoxPlanPriceRangeProps = Omit<PriceRangeProps, "size">;
export type BoxPlanContingentProps = Omit<ContingentProps, "size">;
export type BoxPlanContingentRangeProps = Omit<ContingentRangeProps, "size">;
