import { CollapsibleProps } from "@radix-ui/react-collapsible";
import { PrepaidShoppingCartProps } from "../PrepaidShoppingCart.types";

export interface StickyBoxBottomPrepaidProps
  extends PrepaidShoppingCartProps,
    Omit<CollapsibleProps, "asChild"> {}
