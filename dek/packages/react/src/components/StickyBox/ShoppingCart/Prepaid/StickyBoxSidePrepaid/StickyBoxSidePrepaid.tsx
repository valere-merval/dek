"use client";

import { ArrowRight } from "@fair/icons";
import { forwardRef } from "react";
import { ButtonPrimary } from "../../../../Button/ButtonPrimary";
import { PrepaidShoppingCartProps } from "../PrepaidShoppingCart.types";
import * as StickyBoxSideStyled from "./StickyBoxSidePrepaid.styles";
import { PaymentMethods } from "../../../Base/PaymentMethods";

export const StickyBoxSidePrepaid = forwardRef<
  HTMLHRElement,
  PrepaidShoppingCartProps
>(
  (
    {
      priceElement,
      planElement,
      checkoutUrl,
      paymentMethods,
      checkoutButtonText = "Weiter zum Warenkorb",
      listItems,
      onCheckout,
      ...rest
    }: PrepaidShoppingCartProps,
    ref,
  ) => {
    return (
      <StickyBoxSideStyled.ShoppingCartWrapper
        data-testid="sticky-box-side-prepaid"
        ref={ref}
        {...rest}
      >
        <StickyBoxSideStyled.StickyBoxSidePrepaidWrapper
          priceElement={priceElement}
          planElement={planElement}
          listItems={listItems}
        />
        <ButtonPrimary
          endIcon={<ArrowRight />}
          asChild={!!checkoutUrl}
          onClick={onCheckout}
          size="large"
          fullWidth
        >
          {checkoutUrl ? (
            <a href={checkoutUrl} target="_self">
              {checkoutButtonText}
            </a>
          ) : (
            checkoutButtonText
          )}
        </ButtonPrimary>
        {paymentMethods && <PaymentMethods paymentMethods={paymentMethods} />}
      </StickyBoxSideStyled.ShoppingCartWrapper>
    );
  },
);

StickyBoxSidePrepaid.displayName = "StickyBoxSidePrepaid";
