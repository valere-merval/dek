import { ComponentPropsWithoutRef } from "react";

export type ButtonPrimarySize = "medium" | "large";

interface CommonButtonMoreDetailsProps extends ComponentPropsWithoutRef<"button"> {
  linkText?: string;
}

interface ConditionalButtonMoreDetailsPropsWithoutSize {
  /**
   * The size of the button.
   */
  size?: ButtonPrimarySize;
  /**
   * Not allowed when `size` prop is set.
   */
  inheritFont?: never;
}

interface ConditionalButtonMoreDetailsPropsWithSize {
  /**
   * Not allowed when `inheritFont` is true.
   */
  size?: never;
  /**
   * Whether to inherit font properties from the parent element.
   * When true, the `size` prop cannot be used.
   */
  inheritFont: true;
}

export type ButtonMoreDetailsProps = CommonButtonMoreDetailsProps &
  (
    | ConditionalButtonMoreDetailsPropsWithoutSize
    | ConditionalButtonMoreDetailsPropsWithSize
  );
