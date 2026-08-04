"use client";

import { forwardRef, ElementRef, useContext } from "react";
import {
  PriceSummaryProps,
  RecurringCosts,
  OneTimeCosts,
  AdditionalSection,
} from "./PriceSummary.types";
import {
  HeadlineContext,
  PriceSummaryBase,
  PriceSummarySubHeadline,
} from "./Base";
import * as BaseStyled from "./Base/PriceSummaryBase.styles";
import * as Styled from "./PriceSummary.styles";
import { Headline } from "../../Typography/Headline";
import { Divider } from "../../Divider";
import { sideHeadlineMapping } from "./mappings";
import { Brand } from "../../../theme/theme";
import { ThemeContext } from "styled-components";
import { getNextHeadlineTag } from "./utils";
import { CardFilled } from "../../Card/CardFilled";
import { PrepaidSection } from "./AdditionalSection/PrepaidSection";
import { BringbackSection } from "./AdditionalSection/BringbackSection";
import { BonusBucketSection } from "./AdditionalSection/BonusBucketSection";

export const PriceSummary = forwardRef<
  ElementRef<typeof PriceSummaryBase>,
  PriceSummaryProps
>(
  (
    {
      recurringCosts,
      oneTimeCosts,
      additionalSection,
      nextStepMessageInfo,
      shippingCostFree = true,
      buttonProps,
      headlineLevel,
      messages,
      ...rest
    }: PriceSummaryProps,
    ref,
  ) => {
    const themeContext = useContext(ThemeContext);
    const brand = themeContext?.contextSpecific.brand || "congstarWeb";

    return (
      <CardFilled.Root backgroundColor="white" size="large">
        <PriceSummaryBase
          ref={ref}
          shippingCostFree={shippingCostFree}
          nextStepMessageInfo={nextStepMessageInfo}
          headlineLevel={headlineLevel}
          leftSide={<LeftSide recurringCosts={recurringCosts} brand={brand} />}
          rightSide={
            <RightSide
              oneTimeCosts={oneTimeCosts}
              additionalSection={additionalSection}
              brand={brand}
            />
          }
          buttonProps={buttonProps}
          messages={messages}
          {...rest}
        />
      </CardFilled.Root>
    );
  },
);
PriceSummary.displayName = "PriceSummary";

// ============================================================================
// Left Side - Recurring Costs
// ============================================================================

interface LeftSideProps {
  recurringCosts: RecurringCosts;
  brand: Brand;
}

const LeftSide = ({ recurringCosts, brand }: LeftSideProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);
  const headline = recurringCosts.headline || "Monatliche Kosten";

  return (
    <BaseStyled.ListContainer>
      <Headline
        as={nextHeadline}
        size={sideHeadlineMapping[brand]}
        variant="bold"
        id="recurring-costs"
      >
        {headline}
      </Headline>
      <BaseStyled.List>
        {recurringCosts.items.map((priceElement) => (
          <BaseStyled.ListItem key={priceElement.title}>
            <PriceSummarySubHeadline price={priceElement.amount}>
              {priceElement.title}
            </PriceSummarySubHeadline>
          </BaseStyled.ListItem>
        ))}
      </BaseStyled.List>
    </BaseStyled.ListContainer>
  );
};

// ============================================================================
// Right Side - One-Time Costs + Additional Section
// ============================================================================

interface RightSideProps {
  oneTimeCosts?: OneTimeCosts;
  additionalSection?: AdditionalSection;
  brand: Brand;
}

const RightSide = ({
  oneTimeCosts,
  additionalSection,
  brand,
}: RightSideProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);

  // Wenn keine einmaligen Kosten und keine zusätzliche Sektion, null zurückgeben
  if (!oneTimeCosts && !additionalSection) {
    return null;
  }

  return (
    <Styled.Wrapper>
      {oneTimeCosts && (
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
              <PriceSummarySubHeadline price={oneTimeCosts.amount}>
                {oneTimeCosts.title || "Summe einmalig"}
              </PriceSummarySubHeadline>
            </BaseStyled.ListItem>
          </BaseStyled.List>
        </BaseStyled.ListContainer>
      )}

      {additionalSection && (
        <>
          {oneTimeCosts &&
            (additionalSection.type === "prepaid" ||
              brand === "congstarWeb") && (
              <Divider orientation="horizontal" color="black" noGap={true} />
            )}
          {additionalSection.type === "prepaid" && (
            <PrepaidSection prepaidInfo={additionalSection} brand={brand} />
          )}
          {additionalSection.type === "bringback" &&
            brand === "congstarWeb" && (
              <BringbackSection bringbackInfo={additionalSection} />
            )}
          {additionalSection.type === "bonus" && brand === "congstarWeb" && (
            <BonusBucketSection bonusBucketInfo={additionalSection} />
          )}
        </>
      )}
    </Styled.Wrapper>
  );
};
