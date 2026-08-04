"use client";

import { ElementRef, forwardRef } from "react";
import * as Styled from "../Base/ShoppingCart.styles";
import * as SharedStyled from "../../Base/Shared.styles";
import { PrepaidShoppingCartProps } from "./PrepaidShoppingCart.types";
import { formatPrice } from "../../../../utils/pricing";
import { List } from "../../../List";
import { Typography } from "../../../Typography/Typography";
import { BoldText } from "./PrepaidShoppingCart.styles";
import { ShippingCosts } from "../../Base/ShippingCosts";

export const Root = forwardRef<ElementRef<"div">, PrepaidShoppingCartProps>(
  (
    {
      priceElement,
      planElement,
      listItems,
      children,
      ...rest
    }: PrepaidShoppingCartProps,
    ref,
  ) => {
    return (
      <div {...rest} ref={ref}>
        <Styled.TextContainer>
          <Styled.Headline>
            <SharedStyled.SpaceBetweenContainer>
              {planElement.type === "year"
                ? "Einm. Jahrespaket-Preis"
                : "Einm. Starterpaket-Preis"}
              <Typography variant="TagBold20">
                {formatPrice(priceElement.starterKitAmount)}
              </Typography>
            </SharedStyled.SpaceBetweenContainer>
          </Styled.Headline>
          <List.Root size="medium" decorativeColor="yellow">
            {listItems.map((item) => (
              <List.Item key={item.key}>{item}</List.Item>
            ))}
          </List.Root>
        </Styled.TextContainer>
        <ShippingCosts />
        {children}
      </div>
    );
  },
);
Root.displayName = "PrepaidShoppingCart.Root";

const ListItem = List.Description;
ListItem.displayName = "PrepaidShoppingCart.ListItem";

BoldText.displayName = "PrepaidShoppingCart.BoldText";

export const PrepaidShoppingCart = {
  Root,
  ListItem,
  BoldText,
};
