"use client";

import React, { ElementRef, forwardRef } from "react";
import { StickyBoxSide } from "../../../Base/StickyBoxSide";
import { PostpaidShoppingCart } from "../PostpaidShoppingCart";
import { ButtonPrimary } from "../../../../Button/ButtonPrimary";
import { ArrowRight } from "@fair/icons";
import { PostpaidShoppingCartProps } from "../PostpaidShoppingCart.types";
import * as PostpaidStyled from "./StickyBoxSidePostpaid.styles";
import { PaymentMethods } from "../../../Base/PaymentMethods";

export const StickyBoxSidePostpaid = forwardRef<
  ElementRef<typeof StickyBoxSide>,
  PostpaidShoppingCartProps
>(
  (
    {
      onCheckout,
      overviewRecurringDisplayPrices,
      overviewOneTimeDisplayPrice,
      overviewBonusDisplayPrices,
      paymentMethods,
      checkoutUrl,
      checkoutButtonText = "Weiter zum Warenkorb",
      bringback,
      ...rest
    }: PostpaidShoppingCartProps,
    ref,
  ) => {
    return (
      <PostpaidStyled.PostpaidStickyBoxSide
        data-testid={"sticky-box-side-postpaid"}
        ref={ref}
        {...rest}
      >
        <PostpaidShoppingCart
          overviewRecurringDisplayPrices={overviewRecurringDisplayPrices}
          overviewOneTimeDisplayPrice={overviewOneTimeDisplayPrice}
          bringback={bringback}
          overviewBonusDisplayPrices={overviewBonusDisplayPrices}
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
      </PostpaidStyled.PostpaidStickyBoxSide>
    );
  },
);

StickyBoxSidePostpaid.displayName = "StickyBoxSidePostpaid";
