import React, { ElementRef, forwardRef } from "react";
import * as Styled from "../Base/ShoppingCart.styles";
import * as PostpaidStyled from "./PostpaidShoppingCart.styles";
import * as SharedStyled from "../../Base/Shared.styles";
import { Accordion } from "../../../Accordion";
import { PostpaidShoppingCartProps } from "./PostpaidShoppingCart.types";
import { formatPrice } from "../../../../utils/pricing";
import { Typography } from "../../../Typography/Typography";
import { Bringback } from "@fair/icons";
import { IconTile } from "../../../IconTile";
import { ShippingCosts } from "../../Base/ShippingCosts";
import { PaymentMethods } from "../../Base/PaymentMethods";
import { CardBonus } from "../../../Card/CardBonus";
import { CardPriceOverview } from "../../../Card/CardPriceOverview";

export const PostpaidShoppingCart = forwardRef<
  ElementRef<typeof Styled.ShoppingCartWrapper>,
  PostpaidShoppingCartProps
>(
  (
    {
      overviewRecurringDisplayPrices,
      overviewOneTimeDisplayPrice,
      overviewBonusDisplayPrices,
      paymentMethods,
      bringback,
      ...rest
    }: PostpaidShoppingCartProps,
    ref,
  ) => {
    const overviewOneTimeDisplayPriceWithTitle = {
      ...overviewOneTimeDisplayPrice,
      title: "einmalig",
    };

    return (
      <Styled.ShoppingCartWrapper {...rest} ref={ref}>
        <CardPriceOverview
          prices={overviewRecurringDisplayPrices}
          headline="Monatliche Kosten"
          data-testid="postpaid-monthly-costs-container"
          valueName="reccurring-display-price"
          defaultValueIndex={0}
        />

        <SharedStyled.PriceDivider color="black" />
        {bringback && (
          <>
            <div data-testid="shopping-cart-bringback">
              <PostpaidStyled.ShoppingCartSummaryHeader>
                <PostpaidStyled.HeaderWithIcon>
                  <Styled.Headline>{bringback.sectionHeader}</Styled.Headline>
                  <PostpaidStyled.IconWrapper>
                    <IconTile
                      size={{
                        minAvailableSpace: "extraSmall",
                        maxAvailableSpace: "extraSmall",
                      }}
                      icon={<Bringback />}
                      variant="outlined"
                      color="white"
                    />
                  </PostpaidStyled.IconWrapper>
                </PostpaidStyled.HeaderWithIcon>
              </PostpaidStyled.ShoppingCartSummaryHeader>
              <Accordion.Root
                type="single"
                collapsible={true}
                size="medium"
                defaultValue="price-accordion-item-bringback"
              >
                <Accordion.Item
                  value="price-accordion-item-bringback"
                  key="Bringback"
                >
                  <Accordion.Header>
                    {bringback.accordionHeader}
                  </Accordion.Header>
                  <Accordion.Content
                    data-testid="recurring-display-price-content"
                    isIndented
                  >
                    <PostpaidStyled.BringBackContent>
                      <PostpaidStyled.BringBackSection>
                        <Typography variant="BodyBold14">
                          {bringback.subTitle}
                        </Typography>
                        <PostpaidStyled.BringBackOptionList>
                          {bringback.priceOptions.map((option) => (
                            <PostpaidStyled.BringBackOptionItem
                              key={option.title}
                            >
                              <Styled.SpaceBetweenOptionContainer>
                                <Typography variant="BodyLight14">
                                  {option.title}
                                </Typography>
                                <Typography variant="BodyLight14">
                                  {typeof option.amount !== "string"
                                    ? formatPrice(option.amount)
                                    : option.amount}
                                </Typography>
                              </Styled.SpaceBetweenOptionContainer>
                            </PostpaidStyled.BringBackOptionItem>
                          ))}
                        </PostpaidStyled.BringBackOptionList>
                      </PostpaidStyled.BringBackSection>
                      <Styled.SpaceBetweenOptionContainer>
                        <Typography variant="BodyBold14">
                          {bringback.lastOption.title}
                        </Typography>
                        <Typography variant="BodyLight14">
                          {typeof bringback.lastOption.amount !== "string"
                            ? formatPrice(bringback.lastOption.amount)
                            : bringback.lastOption.amount}
                        </Typography>
                      </Styled.SpaceBetweenOptionContainer>
                    </PostpaidStyled.BringBackContent>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
            <SharedStyled.PriceDivider color="black" />
          </>
        )}
        <CardPriceOverview
          prices={overviewOneTimeDisplayPriceWithTitle}
          headline="Einmalige Kosten"
          data-testid="shopping-cart-one-time-costs-container"
          valueName="one-time-display-price"
          description={
            <ShippingCosts shipping={overviewOneTimeDisplayPrice.shipping} />
          }
        />
        {overviewBonusDisplayPrices && (
          <>
            <SharedStyled.PriceDivider color="black" />
            <CardBonus
              overviewBonusDisplayPrices={overviewBonusDisplayPrices}
            />
          </>
        )}
        {paymentMethods && (
          <PaymentMethods paymentMethods={paymentMethods} divider />
        )}
      </Styled.ShoppingCartWrapper>
    );
  },
);

PostpaidShoppingCart.displayName = "PostpaidShoppingCart";
