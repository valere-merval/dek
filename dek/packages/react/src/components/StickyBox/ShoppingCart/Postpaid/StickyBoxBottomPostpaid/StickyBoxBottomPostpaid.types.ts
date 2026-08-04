import { CollapsibleProps } from "@radix-ui/react-collapsible";
import { PostpaidShoppingCartProps } from "../PostpaidShoppingCart.types";

export interface StickyBoxBottomPostpaidProps
  extends PostpaidShoppingCartProps,
    Omit<CollapsibleProps, "asChild"> {}
