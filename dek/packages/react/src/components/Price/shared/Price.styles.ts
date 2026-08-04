import styled, { css } from "styled-components";
import { PriceMediaSize } from "./Price.types";
import { backgroundTextColorMap } from "../../../theme/theme";
import { gapMapping, priceTypographyMap } from "./mappings";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { ButtonMicroIcon } from "../../Button/ButtonMicroIcon";
import { trimFont } from "../../../theme/mappings/typography";

export const BillingPeriod = styled.span<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    display: revert;
    color: inherit;
    font: ${theme.typography[
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].billingPeriod
    ]};
    ${trimFont(
      priceTypographyMap[theme.contextSpecific.brand][size.mobile]
        .billingPeriod,
    )}
  `,
);

export const Amount = styled.div<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.space[gapMapping[size.mobile].eurosToCents]};
    align-items: flex-end;
    ${up("md")} {
      gap: ${theme.space[gapMapping[size.desktop].eurosToCents]};
    }
  `,
);

export const Euro = styled.div<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    white-space: nowrap;
    font: ${theme.typography[
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].euro
    ]};
    ${trimFont(
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].euro,
    )}
    ${up("md")} {
      font: ${theme.typography[
        priceTypographyMap[theme.contextSpecific.brand][size.desktop].euro
      ]};
      ${trimFont(
        priceTypographyMap[theme.contextSpecific.brand][size.desktop].euro,
      )}
    }
  `,
);

export const Cent = styled.div<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    position: absolute;
    top: 0;
    font: ${theme.typography[
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].cents
    ]};
    ${trimFont(
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].cents,
    )}
    ${up("md")} {
      font: ${theme.typography[
        priceTypographyMap[theme.contextSpecific.brand][size.desktop].cents
      ]};
      ${trimFont(
        priceTypographyMap[theme.contextSpecific.brand][size.desktop].cents,
      )}
    }
  `,
);

export const Currency = styled.div<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    display: block;
    font: ${theme.typography[
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].currency
    ]};
    ${trimFont(
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].currency,
    )}
    ${up("md")} {
      font: ${theme.typography[
        priceTypographyMap[theme.contextSpecific.brand][size.desktop].currency
      ]};
      ${trimFont(
        priceTypographyMap[theme.contextSpecific.brand][size.desktop].currency,
      )}
    }
  `,
);

export const PriceAndPrefixWrapper = styled.div<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    all: unset;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: ${theme.space[gapMapping[size.mobile].eurosToCents]};
    row-gap: ${theme.space[gapMapping[size.mobile].rows]};
    ${up("md")} {
      gap: ${theme.space[gapMapping[size.desktop].eurosToCents]};
      row-gap: ${theme.space[gapMapping[size.desktop].rows]};
    }
  `,
);
export const Wrapper = styled.div<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    position: relative;
    row-gap: ${theme.space[gapMapping[size.mobile].eurosToCents]};
    ${up("md")} {
      row-gap: ${theme.space[gapMapping[size.desktop].rows]};
    }
  `,
);

export const Root = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: column;
    color: ${theme.color[
      backgroundTextColorMap[theme.contextSpecific.backgroundColor]
    ]};
    gap: ${theme.space["08"]};
  `,
);

export const Suffix = styled.p<{ size: PriceMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    color: inherit;
    font: ${theme.typography[
      priceTypographyMap[theme.contextSpecific.brand][size.mobile].suffix
    ]};
  `,
);

export const Asterisk = styled(ButtonMicroIcon)(() => css``);
