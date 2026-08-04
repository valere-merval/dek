import { ReactElement, MouseEvent } from "react";
import { PrepaidShoppingCartListItemProps } from "../ShoppingCart/Prepaid/PrepaidShoppingCart.types";
import { PriceProps } from "../../Price/Price";
import { PrepaidBillingPeriod } from "../Base/Prepaid.types";
import { HeadlineTag } from "../../Typography/Headline";

export interface ActivationProps {
  listItems: ReactElement<PrepaidShoppingCartListItemProps>[];
  price: Omit<PriceProps, "size" | "billingPeriod"> & {
    billingPeriod: PrepaidBillingPeriod;
  };
  header: string;
  headlineLevel?: HeadlineTag;
  onButtonClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
}
