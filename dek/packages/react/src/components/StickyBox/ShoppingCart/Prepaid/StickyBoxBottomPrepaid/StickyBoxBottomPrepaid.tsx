"use client";

import { ArrowRight } from "@fair/icons";
import { ElementRef, forwardRef } from "react";
import * as ShoppingCartStyled from "../../Base/ShoppingCart.styles";
import * as SharedStyled from "../../../Base/Shared.styles";
import { StickyBoxBottomPrepaidProps } from "./StickyBoxBottomPrepaid.types";
import * as StickyBoxBottomStyled from "./StickyBoxBottomPrepaid.styles";
import {
  ButtonPrimary,
  ButtonPrimaryCircle,
} from "../../../../Button/ButtonPrimary";
import { StickyBoxBottom } from "../../../Base/StickyBoxBottom";
import { Divider } from "../../../../Divider";
import { formatPrice } from "../../../../../utils/pricing";
import { Typography } from "../../../../Typography/Typography";
import { mapBillingPeriod } from "../../../Base/Prepaid.types";
import { PaymentMethods } from "../../../Base/PaymentMethods";
import { OptionalLink } from "../../Base/OptionalLink";

/**
 Note: All Components that inherit from the `StickyBoxBottom` base component use the `Collapsible` component of Radix.
 For further information regarding the options inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible">Documentation</a>
 */
export const StickyBoxBottomPrepaid = forwardRef<
  ElementRef<typeof SharedStyled.Root>,
  StickyBoxBottomPrepaidProps
>(
  (
    {
      priceElement,
      planElement,
      checkoutUrl,
      paymentMethods,
      open,
      checkoutButtonText = "Weiter zum Warenkorb",
      onOpenChange,
      listItems,
      onCheckout,
      ...rest
    }: StickyBoxBottomPrepaidProps,
    ref,
  ) => {
    return (
      <SharedStyled.Root
        data-testid="shopping-cart-bottom-drawer"
        position="sticky"
        onOpenChange={onOpenChange}
        ref={ref}
        {...rest}
      >
        <SharedStyled.Content>
          <StickyBoxBottomStyled.StickyBoxBottomPrepaidWrapper
            priceElement={priceElement}
            planElement={planElement}
            listItems={listItems}
          >
            {paymentMethods && (
              <PaymentMethods paymentMethods={paymentMethods} divider />
            )}
          </StickyBoxBottomStyled.StickyBoxBottomPrepaidWrapper>
        </SharedStyled.Content>
        <SharedStyled.ShoppingCartBase
          open={open}
          $containerName="shopping-cart"
        >
          <SharedStyled.Trigger data-testid="shopping-cart-base-trigger">
            <StickyBoxBottom.Icon
              label="Details"
              typographyProps={{
                variant: "BodyLight12",
                color: "inherit",
              }}
            />
          </SharedStyled.Trigger>

          {!open ? (
            <>
              <ShoppingCartStyled.ShoppingCartContent>
                <SharedStyled.SpaceBetweenContainer>
                  <Typography variant="BodyBold14">Einmalige Kosten</Typography>
                  <Typography variant="TagBold16">
                    {formatPrice(priceElement.starterKitAmount)}
                  </Typography>
                </SharedStyled.SpaceBetweenContainer>
                <Divider color="black" />
                <SharedStyled.SpaceBetweenContainer>
                  <Typography variant="BodyBold14">
                    Alle weiteren {mapBillingPeriod(priceElement.billingPeriod)}
                  </Typography>
                  <Typography variant="TagBold16">
                    {formatPrice(priceElement.totalPriceAmount)}
                  </Typography>
                </SharedStyled.SpaceBetweenContainer>
              </ShoppingCartStyled.ShoppingCartContent>
              <SharedStyled.CheckoutButton
                asChild={!!checkoutUrl}
                onClick={onCheckout}
                aria-label={checkoutButtonText}
              >
                <OptionalLink checkoutUrl={checkoutUrl}>
                  <ArrowRight />
                </OptionalLink>
              </SharedStyled.CheckoutButton>
            </>
          ) : (
            <>
              <SharedStyled.ButtonCircleWrapper>
                <ButtonPrimaryCircle
                  asChild={!!checkoutUrl}
                  onClick={onCheckout}
                  aria-label={checkoutButtonText}
                >
                  <OptionalLink checkoutUrl={checkoutUrl}>
                    <ArrowRight />
                  </OptionalLink>
                </ButtonPrimaryCircle>
              </SharedStyled.ButtonCircleWrapper>

              <SharedStyled.ButtonPrimaryWrapper>
                <ButtonPrimary
                  endIcon={<ArrowRight />}
                  asChild={!!checkoutUrl}
                  onClick={onCheckout}
                >
                  <OptionalLink checkoutUrl={checkoutUrl}>
                    {checkoutButtonText}
                  </OptionalLink>
                </ButtonPrimary>
              </SharedStyled.ButtonPrimaryWrapper>
            </>
          )}
        </SharedStyled.ShoppingCartBase>
      </SharedStyled.Root>
    );
  },
);

StickyBoxBottomPrepaid.displayName = "StickyBoxBottomPrepaid";
