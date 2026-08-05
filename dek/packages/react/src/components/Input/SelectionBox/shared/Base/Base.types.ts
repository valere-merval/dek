import { ComponentPropsWithoutRef, ReactNode } from "react";
import { CardFilledHeaderImageSize } from "../../../../Card/CardFilled";

export interface BaseProps extends ComponentPropsWithoutRef<"div"> {
  subText?: string;
  discountText?: ReactNode;
  labelText?: string;
  selected?: boolean;
  interactiveElement: ReactNode;
  interactiveElementRef: React.Ref<HTMLElement>;
  contentIfSelected?: ReactNode;
  headerImage?: ReactNode;
  headerImageSize?: CardFilledHeaderImageSize;
  headerImageSidePaddingCorrection?: boolean;
  children?: ReactNode;
  contentId: string;
  duration?: DurationOption;
  "data-testid"?: string;
  onBoxClick?: () => void;
}

export type DurationOption = {
  prices: DurationPrice[];
  totalPrice?: DurationPrice;
  moreDetails?: ReactNode;
};

type DurationPrice = {
  price: number;
  label: string;
  strikeThroughPrice?: number;
};
