"use client";

import { forwardRef, ElementRef, useContext } from "react";
import {
  PrepaidMessageInfo,
  PriceElement,
  PriceSummaryPrepaidProps,
} from "./PriceSummaryPrepaid.types";
import { HeadlineContext, PriceSummaryBase } from "../Base";
import { MessageInfo } from "../../../Message/MessageInfo";
import * as BaseStyled from "../Base/PriceSummaryBase.styles";
import { formatPrice } from "../../../../utils/pricing";
import { ThemeContext } from "styled-components";
import {
  themeProviderBackgroundColorMapping,
  sideHeadlineMapping,
} from "../mappings";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Brand } from "../../../../theme/theme";
import { getNextHeadlineTag } from "../utils";
import { Headline } from "../../../Typography/Headline";
import { OverviewOneTimeDisplayPriceWithTitle } from "../Postpaid/PriceSummaryPostpaid.types";
import { Divider } from "../../../Divider";

/**
 * @deprecated Use `PriceSummary` with `additionalSection={{ type: 'prepaid', ... }}` instead.
 */
export const PriceSummaryPrepaid = forwardRef<
  ElementRef<typeof PriceSummaryBase>,
  PriceSummaryPrepaidProps
>(
  (
    {
      priceElement,
      overviewOneTimeDisplayPrice,
      prepaidMessageInfo,
      buttonProps,
    }: PriceSummaryPrepaidProps,
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
          leftSide={<LeftSide priceElement={priceElement} brand={brand} />}
          rightSide={
            prepaidMessageInfo ? (
              <RightSide
                prepaidMessageInfo={prepaidMessageInfo}
                oneTimePrice={overviewOneTimeDisplayPrice}
                brand={brand}
              />
            ) : null
          }
          buttonProps={buttonProps}
        />
      </ThemeProvider>
    );
  },
);
PriceSummaryPrepaid.displayName = "PriceSummaryPrepaid";

interface LeftSideProps {
  priceElement: PriceElement;
  brand: Brand;
}

const LeftSide = ({ priceElement, brand }: LeftSideProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);

  return (
    <BaseStyled.ListContainer>
      <Headline
        as={nextHeadline}
        size={sideHeadlineMapping[brand]}
        variant="bold"
        id="laufende-kosten"
      >
        Laufende Kosten
      </Headline>
      <BaseStyled.List>
        <BaseStyled.ListItem>
          <BaseStyled.PriceText size="medium" variant="bold" forwardedAs="p">
            {priceElement.description}
            <BaseStyled.PriceText
              size="medium"
              variant="bold"
              $price
              trimmed
              forwardedAs="span"
            >
              {formatPrice(priceElement.price)}
            </BaseStyled.PriceText>
          </BaseStyled.PriceText>
        </BaseStyled.ListItem>
      </BaseStyled.List>
    </BaseStyled.ListContainer>
  );
};

interface RightSideProps {
  prepaidMessageInfo: PrepaidMessageInfo;
  oneTimePrice?: OverviewOneTimeDisplayPriceWithTitle;
  brand: Brand;
}

const RightSide = ({
  prepaidMessageInfo,
  oneTimePrice,
  brand,
}: RightSideProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);

  return (
    <BaseStyled.ListContainer>
      {oneTimePrice && (
        <>
          <Headline
            as={nextHeadline}
            size={sideHeadlineMapping[brand]}
            variant="bold"
          >
            Einmalige Kosten
          </Headline>
          <BaseStyled.List>
            <BaseStyled.ListItem>
              <BaseStyled.PriceText
                size="medium"
                variant="bold"
                forwardedAs="p"
              >
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
          <Divider orientation="horizontal" color="black" noGap={true} />
        </>
      )}
      <Headline
        as={nextHeadline}
        size={sideHeadlineMapping[brand]}
        variant="bold"
        id="guthaben"
      >
        Guthaben
      </Headline>
      <MessageInfo {...prepaidMessageInfo} variant="outlined" />
    </BaseStyled.ListContainer>
  );
};
