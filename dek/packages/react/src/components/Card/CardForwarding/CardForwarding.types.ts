import { ComponentPropsWithoutRef, ReactNode } from "react";
import { HeadlineTag } from "../../Typography/Headline";
import { PriceProps } from "../../Price/Price";
import { CardFilledHeaderImageSize } from "../CardFilled";
import { WithTestId } from "../../propTypes";

export interface CardForwardingProps
  extends WithTestId, Omit<ComponentPropsWithoutRef<"button">, "children"> {
  title: string;
  description?: string;
  headlineLevel?: HeadlineTag;
  overwriteButton?: (icon: ReactNode) => ReactNode;
  price?: Omit<PriceProps, "size">;
  promotionTop?: string;
  headerImage?: ReactNode;
  headerImageSize?: CardFilledHeaderImageSize;
}
