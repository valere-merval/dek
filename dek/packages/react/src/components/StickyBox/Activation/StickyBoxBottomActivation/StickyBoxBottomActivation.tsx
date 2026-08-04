"use client";

import { ArrowRight } from "@fair/icons";
import { ElementRef, forwardRef, useContext } from "react";
import * as Styled from "../../Base/Shared.styles";
import * as StickyBoxBottomStyled from "./StickyBoxBottomActivation.styles";
import { StickyBoxBottomActivationProps } from "./StickyBoxBottomActivation.types";

import { ButtonPrimary } from "../../../Button/ButtonPrimary";
import { StickyBoxBottom } from "../../Base/StickyBoxBottom";
import { Price } from "../../../Price/Price";
import { formatPrice } from "../../../../utils/pricing";
import { Typography } from "../../../Typography/Typography";
import { mapBillingPeriod } from "../../Base/Prepaid.types";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { ThemeContext } from "styled-components";
import {
  stickyBoxBackgroundColorMapping,
  triggerMapping,
  typographyMapping,
} from "../mappings";

/**
 Note: All Components that inherit from the `StickyBoxBottom` base component use the `Collapsible` component of Radix.
 For further information regarding the options inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible">Documentation</a>
 */
export const StickyBoxBottomActivation = forwardRef<
  ElementRef<typeof Styled.Root>,
  StickyBoxBottomActivationProps
>(
  (
    {
      price,
      onButtonClick,
      buttonText = "Weiter",
      open,
      header,
      onOpenChange,
      listItems,
      ...rest
    }: StickyBoxBottomActivationProps,
    ref,
  ) => {
    const themeContext = useContext(ThemeContext);
    const brand = themeContext?.contextSpecific.brand || "congstarWeb";

    return (
      <ThemeProvider backgroundColor={stickyBoxBackgroundColorMapping[brand]}>
        <StickyBoxBottomStyled.Root
          data-testid="shopping-cart-bottom-drawer"
          position="sticky"
          onOpenChange={onOpenChange}
          ref={ref}
          backgroundColor={stickyBoxBackgroundColorMapping[brand]}
          {...rest}
        >
          <Styled.Content>
            <StickyBoxBottomStyled.Wrapper>
              <StickyBoxBottomStyled.StickyBoxBottomActivationWrapper
                price={price}
                listItems={listItems}
                header={header}
              ></StickyBoxBottomStyled.StickyBoxBottomActivationWrapper>
              <Price size={{ mobile: "small", desktop: "small" }} {...price} />
            </StickyBoxBottomStyled.Wrapper>
          </Styled.Content>
          <StickyBoxBottomStyled.ShoppingCartBaseActivation
            open={open}
            $containerName="prepaid-activation"
          >
            <StickyBoxBottomStyled.Trigger data-testid="shopping-cart-base-trigger">
              <StickyBoxBottom.Icon
                label="Details"
                typographyProps={{
                  variant: triggerMapping[brand].typography,
                  color: "inherit",
                }}
              />
            </StickyBoxBottomStyled.Trigger>

            {!open ? (
              <>
                <Styled.ShoppingCartContent>
                  <StickyBoxBottomStyled.SpaceBetweenContainer>
                    <Typography
                      variant={typographyMapping[brand].bottomSheetText}
                    >
                      Erste {mapBillingPeriod(price.billingPeriod)}
                    </Typography>
                    <Typography
                      variant={typographyMapping[brand].bottomSheetBoldText}
                    >
                      abgedeckt
                    </Typography>
                  </StickyBoxBottomStyled.SpaceBetweenContainer>
                  <StickyBoxBottomStyled.DividerLine color="black" />
                  <StickyBoxBottomStyled.SpaceBetweenContainer>
                    <Typography
                      variant={typographyMapping[brand].bottomSheetText}
                    >
                      Alle weiteren {mapBillingPeriod(price.billingPeriod)}
                    </Typography>

                    <Typography
                      variant={typographyMapping[brand].bottomSheetBoldText}
                    >
                      {formatPrice(price.price)}
                    </Typography>
                  </StickyBoxBottomStyled.SpaceBetweenContainer>
                </Styled.ShoppingCartContent>
                <Styled.CheckoutButton
                  aria-label={buttonText}
                  onClick={onButtonClick}
                >
                  <ArrowRight />
                </Styled.CheckoutButton>
              </>
            ) : (
              <StickyBoxBottomStyled.ButtonPrimaryWrapper>
                <ButtonPrimary
                  endIcon={<ArrowRight />}
                  onClick={onButtonClick}
                  fullWidth
                >
                  {buttonText}
                </ButtonPrimary>
              </StickyBoxBottomStyled.ButtonPrimaryWrapper>
            )}
          </StickyBoxBottomStyled.ShoppingCartBaseActivation>
        </StickyBoxBottomStyled.Root>
      </ThemeProvider>
    );
  },
);

StickyBoxBottomActivation.displayName = "StickyBoxBottomActivation";
