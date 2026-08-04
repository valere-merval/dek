"use client";

import React, { forwardRef, ElementRef, createContext } from "react";
import { PriceSummaryBaseProps } from "./PriceSummaryBase.types";
import * as Styled from "./PriceSummaryBase.styles";
import { ArrowRight } from "@fair/icons";
import { Text } from "../../../Typography/Text";
import { MessageInfo } from "../../../Message/MessageInfo";
import { HeadlineTag } from "../../../Typography/Headline";
import { useFieldMessages } from "../../../Input/shared/FieldMessages";
import { FieldMessageContainer } from "./PriceSummaryBase.styles";

export const HeadlineContext = createContext<{
  startingHeadline: HeadlineTag;
}>({} as { startingHeadline: HeadlineTag });

export const PriceSummaryBase = forwardRef<
  ElementRef<typeof Styled.Root>,
  PriceSummaryBaseProps
>(
  (
    {
      buttonProps,
      shippingCostFree,
      leftSide,
      rightSide,
      nextStepMessageInfo,
      headlineLevel: startingHeadline = "h2",
      messages,
      ...rest
    }: PriceSummaryBaseProps,
    ref,
  ) => {
    const { FieldMessages } = useFieldMessages(
      messages,
      "price-summary-submit",
      "outlined",
      true,
    );
    const hasMessages = messages && messages.length > 0;

    return (
      <Styled.Root ref={ref} {...rest}>
        <Styled.MainContainer>
          <Styled.MainHeadline
            forwardedAs={startingHeadline}
            size="large"
            variant="bold"
          >
            Gesamtkosten
            <Text as="span" size="large" variant="light">
              (Alle Preise inkl. MwSt.)
            </Text>
          </Styled.MainHeadline>
          <Styled.InnerContainer>
            <HeadlineContext.Provider value={{ startingHeadline }}>
              <Styled.InnerContainer>{leftSide}</Styled.InnerContainer>
              <Styled.HorizontalDivider
                orientation="horizontal"
                color="black"
              />
              <Styled.VerticalDivider
                noGap={true}
                orientation="vertical"
                color="black"
              />
              <Styled.InnerContainer>{rightSide}</Styled.InnerContainer>
            </HeadlineContext.Provider>
          </Styled.InnerContainer>
        </Styled.MainContainer>
        {shippingCostFree && (
          <Text variant="light" size="large">
            Versandkostenfrei
          </Text>
        )}
        {nextStepMessageInfo ? (
          <Styled.FooterContainer>
            <MessageInfo {...nextStepMessageInfo} variant="primary" />
            <Styled.Button
              endIcon={<ArrowRight />}
              isLoading={buttonProps.loading}
            >
              {buttonProps.text}
            </Styled.Button>
          </Styled.FooterContainer>
        ) : (
          <Styled.Button
            endIcon={<ArrowRight />}
            isLoading={buttonProps.loading}
          >
            {buttonProps.text}
          </Styled.Button>
        )}
        <FieldMessageContainer aria-live="polite">
          {hasMessages && <FieldMessages />}
        </FieldMessageContainer>
      </Styled.Root>
    );
  },
);
PriceSummaryBase.displayName = "PriceSummaryBase";
