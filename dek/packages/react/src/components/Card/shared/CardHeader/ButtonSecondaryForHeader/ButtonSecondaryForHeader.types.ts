import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ButtonSecondaryProps } from "../../../../Button/ButtonSecondary";

export interface ButtonSecondaryForCardHref {
  onClick?: undefined;
  /** If set, the ButtonSecondaryForCard will be rendered as a Anchor Tag and this adress will be called if the user clicks somewhere on the box. */
  href: string;
  renderAnchor?: undefined;
}

export interface ButtonSecondaryForCardOnClick {
  href?: undefined;
  /**
   * Can be used to render your own or framework Anchor implementation, If not set the ButtonSecondaryForCard will be rendered as a button Tag.
   * @param props Should be spread on your Anchor implementation
   **/
  renderAnchor?: (props: ComponentPropsWithoutRef<"a">) => ReactNode;
  /** Will be called if the user clicks somewhere on the box */
  onClick: () => void;
}

export type ButtonSecondaryForCardProps = Omit<
  ButtonSecondaryProps,
  "startIcon" | "color"
> &
  (ButtonSecondaryForCardHref | ButtonSecondaryForCardOnClick);
