import {
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";
import { ComponentPropsWithoutRef } from "react";

export type AccordionSize = "medium" | "large";

export interface AccordionContextValue {
  /**
   * The size prop should be omitted if possible, as the component will automatically respond to the viewport, so use it only if there is a specific requirement in your design.
   */
  size?: AccordionSize;
  withSeparators?: boolean;
}

export interface AccordionWrapperProps {
  size?: AccordionSize;
}

interface AccordionRootBaseProps
  extends Omit<ComponentPropsWithoutRef<"div">, "defaultValue" | "dir">,
    AccordionContextValue {}

export interface AccordionSingleTypeProps
  extends AccordionRootBaseProps,
    AccordionSingleProps {}

export interface AccordionMultiTypeProps
  extends AccordionRootBaseProps,
    AccordionMultipleProps {}

export type AccordionRootProps =
  | AccordionSingleTypeProps
  | AccordionMultiTypeProps;

export interface AccordionHeaderProps
  extends ComponentPropsWithoutRef<"button"> {
  collapsible?: boolean;
  price?: number;
  info?: string;
}

export interface AccordionContentProps extends ComponentPropsWithoutRef<"div"> {
  isIndented?: boolean;
  /**
   * This is necessary for interactive elements which have a focus outline.
   */
  additionalTopPadding?: boolean;
}
