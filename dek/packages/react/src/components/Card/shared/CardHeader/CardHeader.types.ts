import { HeadlineProps as BaseHeadlineProps } from "../../../Typography/Headline";
import { ButtonSecondaryForCardProps } from "./ButtonSecondaryForHeader";

export type Trigger = "button" | "card";

export interface CardHeaderAsStringProps extends Omit<
  BaseHeadlineProps,
  "size" | "color" | "variant"
> {
  buttonProps?: undefined;
  trigger?: undefined;
}

export interface CardHeaderAsButtonProps extends Omit<
  BaseHeadlineProps,
  "size" | "color" | "variant"
> {
  buttonProps: ButtonSecondaryForCardProps;
  trigger?: Trigger;
}

export type CardHeaderProps = CardHeaderAsStringProps | CardHeaderAsButtonProps;
