import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledComponentsBaseProps, WithTestId } from "../../propTypes";
import { CardProps } from "../shared";
import { BackgroundColor } from "../../../theme/theme";
import { CardHeaderProps } from "../shared/CardHeader";

export const cardFilledColors = [
  "white",
  "darkGrey",
  "blue",
  "lightGrey",
  "jaGeneralWhite",
  "pennyNeutralWhite",
] satisfies BackgroundColor[];
export type CardFilledColor = (typeof cardFilledColors)[number];

export type CardFilledHeaderImageSize = "medium" | "large";

export interface CardFilledProps extends CardProps {
  backgroundColor: CardFilledColor;
  promotionTop?: string;
  promotionTopId?: string;
  headerImage?: ReactNode;
  headerImageSize?: CardFilledHeaderImageSize;
}

export interface CardFilledFooterProps
  extends
    StyledComponentsBaseProps,
    WithTestId,
    Omit<ComponentPropsWithoutRef<"div">, "color"> {}

export interface CardFilledDividerProps
  extends
    StyledComponentsBaseProps,
    WithTestId,
    Omit<ComponentPropsWithoutRef<"div">, "color"> {}

export type CardFilledHeaderProps = CardHeaderProps;
