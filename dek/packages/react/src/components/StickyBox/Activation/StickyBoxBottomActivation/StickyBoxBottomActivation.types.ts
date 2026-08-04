import { CollapsibleProps } from "@radix-ui/react-collapsible";
import { ActivationProps } from "../Activation.types";

export interface StickyBoxBottomActivationProps
  extends ActivationProps,
    Omit<CollapsibleProps, "asChild"> {}
