"use client";

import { forwardRef, ElementRef, useContext } from "react";
import {
  Bringback,
  OverviewOneTimeDisplayPriceWithTitle,
  PriceSummaryPostpaidProps,
} from "./PriceSummaryPostpaid.types";
import { HeadlineContext, PriceSummaryBase } from "../Base";
import * as BaseStyled from "../Base/PriceSummaryBase.styles";
import {
  formatPrice,
  OverviewRecurringDisplayPrice,
} from "../../../../utils/pricing";
import { Headline } from "../../../Typography/Headline";
import { Tag } from "../../../Typography/Tag";
import * as Styled from "./PriceSummaryPostpaid.styles";
import { IconTile } from "../../../IconTile";
import { Bringback as BringbackIcon } from "@fair/icons";
import {
  themeProviderBackgroundColorMapping,
  sideHeadlineMapping,
} from "../mappings";
import { Brand } from "../../../../theme/theme";
import { ThemeContext } from "styled-components";
import { getNextHeadlineTag } from "../utils";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Divider } from "../../../Divider";
import { Text } from "../../../Typography/Text";

/**
 * @deprecated Use `PriceSummary` instead. For bringback, use `additionalSection={{ type: 'bringback', ... }}`.
 */
export const PriceSummaryPostpaid = forwardRef<
  ElementRef<typeof PriceSummaryBase>,
  PriceSummaryPostpaidProps
>(
  (
    {
      overviewOneTimeDisplayPrice,
      overviewRecurringDisplayPrices,
      bringback,
      nextStepMessageInfo,
      buttonProps,
      ...rest
    }: PriceSummaryPostpaidProps,
    ref,
  ) => {
    const themeContext = useContext(ThemeContext);
    const brand = themeContext?.contextSpecific.brand || "congstarWeb";
    return (
      <ThemeProvider
        backgroundColor={themeProviderBackgroundColorMapping[brand]}
      >
        <PriceSummaryBase
          ref={ref}
          shippingCostFree={
            overviewOneTimeDisplayPrice.shipping == null ||
            overviewOneTimeDisplayPrice.shipping === 0
          }
          nextStepMessageInfo={nextStepMessageInfo}
          leftSide={
            <LeftSide
              recurringItems={overviewRecurringDisplayPrices}
              brand={brand}
            />
          }
          rightSide={
            <RightSide
              oneTimePrice={overviewOneTimeDisplayPrice}
              bringback={bringback}
              brand={brand}
            />
          }
          buttonProps={buttonProps}
          {...rest}
        />
      </ThemeProvider>
    );
  },
);
PriceSummaryPostpaid.displayName = "PriceSummaryPostpaid";

const LeftSide = ({
  recurringItems,
  brand,
}: {
  recurringItems: OverviewRecurringDisplayPrice[];
  brand: Brand;
}) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);

  return (
    <BaseStyled.ListContainer>
      <Headline
        as={nextHeadline}
        size={sideHeadlineMapping[brand]}
        variant="bold"
        id="monatliche-kosten"
      >
        Monatliche Kosten
      </Headline>
      <BaseStyled.List>
        {recurringItems.map((priceElement) => (
          <BaseStyled.ListItem key={priceElement.title}>
            <BaseStyled.PriceText size="medium" variant="bold" forwardedAs="p">
              {priceElement.title}
              <BaseStyled.PriceText
                size="medium"
                variant="bold"
                $price
                trimmed
                forwardedAs="span"
              >
                {formatPrice(priceElement.amount)}
              </BaseStyled.PriceText>
            </BaseStyled.PriceText>
          </BaseStyled.ListItem>
        ))}
      </BaseStyled.List>
    </BaseStyled.ListContainer>
  );
};

const RightSide = ({
  oneTimePrice,
  bringback,
  brand,
}: {
  oneTimePrice: OverviewOneTimeDisplayPriceWithTitle;
  bringback?: Bringback;
  brand: Brand;
}) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);
  return (
    <Styled.Wrapper>
      <BaseStyled.ListContainer>
        <Headline
          as={nextHeadline}
          size={sideHeadlineMapping[brand]}
          variant="bold"
        >
          Einmalige Kosten
        </Headline>
        <BaseStyled.List>
          <BaseStyled.ListItem>
            <BaseStyled.PriceText size="medium" variant="bold" forwardedAs="p">
              {oneTimePrice.title || "Summe einmalig"}
              <BaseStyled.PriceText
                size="medium"
                variant="bold"
                $price
                trimmed
                forwardedAs="span"
              >
                {formatPrice(oneTimePrice.amount)}
              </BaseStyled.PriceText>
            </BaseStyled.PriceText>
          </BaseStyled.ListItem>
        </BaseStyled.List>
      </BaseStyled.ListContainer>

      {bringback && brand === "congstarWeb" && (
        <>
          <Divider orientation="horizontal" color="black" noGap={true} />
          <BringbackSection bringback={bringback} />
        </>
      )}
    </Styled.Wrapper>
  );
};

const BringbackSection = ({ bringback }: { bringback: Bringback }) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const bringBackHeadlineSize = getNextHeadlineTag(startingHeadline);
  const bringBackSubHeadlineSize = getNextHeadlineTag(bringBackHeadlineSize);
  return (
    <BaseStyled.ListContainer>
      <Styled.HeadlineWrapper>
        <Headline as={bringBackHeadlineSize} size="medium" variant="bold">
          {bringback.sectionHeader}
        </Headline>
        <IconTile
          size={{
            minAvailableSpace: "extraSmall",
            maxAvailableSpace: "extraSmall",
          }}
          icon={<BringbackIcon />}
          variant="outlined"
          color="white"
        />
      </Styled.HeadlineWrapper>
      <Headline as={bringBackSubHeadlineSize} size="small" variant="bold">
        {bringback.mainTitle}
      </Headline>

      <Styled.UnorderedList>
        <BaseStyled.ListItem>
          <Text size="large" variant="bold" id="bringback-price-requirement">
            {bringback.subTitle}
          </Text>
          <Styled.OrderedList>
            {bringback.priceOptions.map((option) => (
              <BaseStyled.ListItem key={option.title}>
                <Styled.PriceInLineText size="large" variant="light">
                  {option.title}
                  <Tag size="medium" as="span">
                    {typeof option.amount === "number"
                      ? formatPrice(option.amount)
                      : option.amount}
                  </Tag>
                </Styled.PriceInLineText>
              </BaseStyled.ListItem>
            ))}
          </Styled.OrderedList>
        </BaseStyled.ListItem>
        <BaseStyled.ListItem>
          <Styled.PriceInLineText size="large" variant="bold">
            {bringback.lastBoldOption.title}
            <Tag size="medium" as="span">
              {typeof bringback.lastBoldOption.amount === "number"
                ? formatPrice(bringback.lastBoldOption.amount)
                : bringback.lastBoldOption.amount}
            </Tag>
          </Styled.PriceInLineText>
        </BaseStyled.ListItem>
      </Styled.UnorderedList>
    </BaseStyled.ListContainer>
  );
};
