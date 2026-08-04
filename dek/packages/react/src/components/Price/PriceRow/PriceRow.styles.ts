import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { trimFont } from "../../../theme/mappings/typography";
import { PriceStrikeThrough as PriceStrikeThroughBase } from "../PriceStrikeThrough";
import * as SharedStyled from "../shared/Price.styles";
import {
  priceRowPriceStrikeThroughTypographyMap,
  priceRowPriceTypographyMap,
} from "./mappings";
import { backgroundTextColorMap } from "../../../theme/theme";

export const Root = styled.div<{ $onlyRight?: boolean }>(
  ({ theme, $onlyRight }) => css`
    display: flex;
    justify-content: ${$onlyRight ? "flex-end" : "space-between"};
    color: ${theme.color[
      backgroundTextColorMap[theme.contextSpecific.backgroundColor]
    ]};
  `,
);

const getAlignment = (onlyRight?: boolean) => {
  if (onlyRight) {
    return css`
      align-items: flex-end;
      text-align: right;

      > div {
        justify-content: flex-end;
      }
    `;
  }

  return css`
    &:first-of-type {
      align-items: flex-start;
    }
    &:not(:only-child):last-child {
      align-items: flex-end;
      text-align: right;

      > div {
        justify-content: flex-end;
      }
    }
  `;
};

export const Price = styled.div<{ $onlyRight?: boolean }>(
  ({ $onlyRight }) => css`
    display: flex;
    flex-direction: column;

    ${getAlignment($onlyRight)};
  `,
);

export const Amount = styled.div(
  ({ theme }) => css`
    all: unset;
    margin-top: ${theme.space["04"]};
    margin-bottom: ${theme.space["06"]};
    font: ${theme.typography[
      priceRowPriceTypographyMap[theme.contextSpecific.brand].mobile
    ]};
    ${trimFont(priceRowPriceTypographyMap[theme.contextSpecific.brand].mobile)};

    ${up("md")} {
      font: ${theme.typography[
        priceRowPriceTypographyMap[theme.contextSpecific.brand].desktop
      ]};
      ${trimFont(
        priceRowPriceTypographyMap[theme.contextSpecific.brand].desktop,
      )};
    }
  `,
);

export const Wrapper = styled(SharedStyled.Wrapper)(
  ({ theme }) => css`
    column-gap: ${theme.space["04"]};
  `,
);

export const FootnotesWrapper = styled.div(
  ({ theme }) => css`
    align-self: flex-start; /* Align the SVG at the top */
    margin-top: ${theme.space["02"]};
  `,
);

export const PriceStrikeThrough = styled(PriceStrikeThroughBase)(
  ({ theme }) => css`
    margin-bottom: ${theme.space["06"]};
    margin-right: -${theme.space["04"]};
    font: ${theme.typography[
      priceRowPriceStrikeThroughTypographyMap[theme.contextSpecific.brand]
    ]};
  `,
);
