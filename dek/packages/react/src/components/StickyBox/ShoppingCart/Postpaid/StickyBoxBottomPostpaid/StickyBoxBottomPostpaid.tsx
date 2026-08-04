"use client";

import { ArrowRight } from "@fair/icons";
import { ElementRef, forwardRef } from "react";
import {
  ButtonPrimary,
  ButtonPrimaryCircle,
} from "../../../../Button/ButtonPrimary";
import { Divider } from "../../../../Divider";
import { StickyBoxBottom } from "../../../Base/StickyBoxBottom";
import * as ShoppingCartStyled from "../../Base/ShoppingCart.styles";
import * as Styled from "./StickyBoxBottom.styles";
import * as SharedStyled from "../../../Base/Shared.styles";
import { StickyBoxBottomPostpaidProps } from "./StickyBoxBottomPostpaid.types";
import { PostpaidShoppingCart } from "../PostpaidShoppingCart";
import { formatPrice } from "../../../../../utils/pricing";
import { Typography } from "../../../../Typography/Typography";
import { ShippingCosts } from "../../../Base/ShippingCosts";
import { OptionalLink } from "../../Base/OptionalLink";

/**
 Note: All Components that inherit from the `StickyBoxBottom` base component use the `Collapsible` component of Radix.
 For further information regarding the options inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible">Documentation</a>
 */
export const StickyBoxBottomPostpaid = forwardRef<
  ElementRef<typeof SharedStyled.Root>,
  StickyBoxBottomPostpaidProps
>(
  (
    {
      onCheckout,
      overviewRecurringDisplayPrices,
      overviewOneTimeDisplayPrice,
      checkoutUrl,
      checkoutButtonText = "Weiter zum Warenkorb",
      paymentMethods,
      open,
      onOpenChange,
      bringback,
      overviewBonusDisplayPrices,
      ...rest
    }: StickyBoxBottomPostpaidProps,
    ref,
  ) => {
    const isCollapsedDetailView: boolean =
      overviewRecurringDisplayPrices.length > 1 &&
      overviewRecurringDisplayPrices[0].amount !==
        overviewRecurringDisplayPrices[1].amount;

    return (
      <SharedStyled.Root
        data-testid="shopping-cart-bottom-drawer"
        position="sticky"
        onOpenChange={onOpenChange}
        ref={ref}
        {...rest}
      >
        <SharedStyled.Content>
          <PostpaidShoppingCart
            overviewRecurringDisplayPrices={overviewRecurringDisplayPrices}
            overviewOneTimeDisplayPrice={overviewOneTimeDisplayPrice}
            paymentMethods={paymentMethods}
            bringback={bringback}
            overviewBonusDisplayPrices={overviewBonusDisplayPrices}
          />
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
                  <Typography variant="BodyBold14">
                    Monatliche Kosten
                  </Typography>
                  {!isCollapsedDetailView && (
                    <Typography variant="TagBold16">
                      {formatPrice(overviewRecurringDisplayPrices[0].amount)}
                    </Typography>
                  )}
                </SharedStyled.SpaceBetweenContainer>

                {isCollapsedDetailView && (
                  <Styled.CollapsedViewRecurringPricesContainer>
                    {overviewRecurringDisplayPrices.map(
                      (overviewRecurringDisplayPrice) => (
                        <SharedStyled.SpaceBetweenContainer
                          key={overviewRecurringDisplayPrice.title}
                        >
                          <Typography variant="BodyLight14">
                            {overviewRecurringDisplayPrice.title}
                          </Typography>
                          <Typography variant="BodyLight14">
                            {formatPrice(overviewRecurringDisplayPrice.amount)}
                          </Typography>
                        </SharedStyled.SpaceBetweenContainer>
                      ),
                    )}
                  </Styled.CollapsedViewRecurringPricesContainer>
                )}

                <Divider color="black" />

                <SharedStyled.SpaceBetweenContainer>
                  <Typography variant="BodyBold14">Einmalige Kosten</Typography>
                  <Typography variant="TagBold16">
                    {formatPrice(overviewOneTimeDisplayPrice.amount)}
                  </Typography>
                </SharedStyled.SpaceBetweenContainer>
                {!overviewBonusDisplayPrices?.amount ? (
                  <ShippingCosts
                    shipping={overviewOneTimeDisplayPrice.shipping}
                  />
                ) : (
                  <>
                    {!!overviewOneTimeDisplayPrice.shipping && (
                      <ShippingCosts
                        shipping={overviewOneTimeDisplayPrice.shipping}
                      />
                    )}
                    <Divider color="black" />
                    <SharedStyled.SpaceBetweenContainer>
                      <Typography variant="BodyBold14">Dein Bonus</Typography>
                      <Typography variant="TagBold16">
                        {formatPrice(overviewBonusDisplayPrices.amount)}
                      </Typography>
                    </SharedStyled.SpaceBetweenContainer>
                  </>
                )}
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

StickyBoxBottomPostpaid.displayName = "StickyBoxBottomPostpaid";
