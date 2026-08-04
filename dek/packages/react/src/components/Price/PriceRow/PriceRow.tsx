"use client";

import React, {
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import { useTheme } from "styled-components";
import { PriceRowProps, PriceRowRootProps } from "./PriceRow.types";
import * as Styled from "./PriceRow.styles";
import { getCents, getEuros } from "../../../utils/pricing";
import { Text } from "../../Typography/Text";
import { ModalFootnotes } from "../../Modal/ModalFootnotes";
import * as SharedStyled from "../shared/Price.styles";

const PriceRowContext = createContext<{ onlyRight?: boolean }>({
  onlyRight: false,
});

export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  PriceRowRootProps
>(({ children, onlyRight, ...rest }: PriceRowRootProps, ref) => {
  return (
    <Styled.Root ref={ref} $onlyRight={onlyRight} {...rest}>
      <PriceRowContext.Provider value={{ onlyRight }}>
        {children}
      </PriceRowContext.Provider>
    </Styled.Root>
  );
});
Root.displayName = "PriceRow.Root";

export const Price = forwardRef<ElementRef<typeof Styled.Price>, PriceRowProps>(
  (
    {
      price,
      strikeThroughPrice,
      /*
       * Whitespace to ensure that the prefix is correctly aligned
       * if prefix is not set
       */
      prefix = "\u00A0",
      suffix,
      footnotes,
      ...rest
    }: PriceRowProps,
    ref,
  ) => {
    const theme = useTheme();
    const brand = theme.contextSpecific.brand;

    const euros = getEuros(price);
    const cents = getCents(price);
    const { onlyRight } = useContext(PriceRowContext);
    const priceString = `${euros},${cents} €`;
    const fontSize = brand === "congstarWeb" ? "large" : "medium";

    return (
      <Styled.Price $onlyRight={onlyRight} ref={ref} {...rest}>
        <Text as="div" size={fontSize} variant="light">
          {prefix}
        </Text>
        <Styled.Wrapper size={{ mobile: "small", desktop: "small" }}>
          <Styled.Amount>{priceString}</Styled.Amount>
          {footnotes && footnotes.length > 0 && (
            <Styled.FootnotesWrapper>
              &nbsp;
              <ModalFootnotes
                footnotes={footnotes}
                trigger={<SharedStyled.Asterisk />}
              />
            </Styled.FootnotesWrapper>
          )}
          {strikeThroughPrice != undefined && price < strikeThroughPrice && (
            <Styled.PriceStrikeThrough
              price={strikeThroughPrice}
              size={{ mobile: "small", desktop: "small" }}
            />
          )}
        </Styled.Wrapper>
        <Text as="div" size={fontSize} variant="light">
          {suffix}
        </Text>
      </Styled.Price>
    );
  },
);
Price.displayName = "PriceRow.Price";

export const PriceRow = { Root, Price };
