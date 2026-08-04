import { ComponentPropsWithoutRef } from "react";
import { ButtonSecondaryProps } from "../../Button/ButtonSecondary";
import { CardHeaderAsStringProps } from "../shared/CardHeader";

export interface CardLinkListRootProps extends ComponentPropsWithoutRef<"div"> {}

export interface CardLinkListListProps extends ComponentPropsWithoutRef<"ul"> {}
export interface CardLinkListButtonProps extends Omit<
  ButtonSecondaryProps,
  "startIcon" | "color"
> {}

export interface CardLinkListHeaderProps extends CardHeaderAsStringProps {}
