import styled, { css } from "styled-components";
import { ContingentMediaSize } from "./Contingent.types";
import { gapMap, typographyMap } from "./mappings";
import { BackgroundColor } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { trimFont } from "../../../theme/mappings/typography";

const colorMap: Record<BackgroundColor, ColorVariant> = {
  white: "NeutralPrimaryBlack",
  black: "NeutralPrimaryWhite",
  blue: "NeutralPrimaryBlack",
  lightGrey: "NeutralPrimaryBlack",
  darkGrey: "NeutralPrimaryWhite",
  jaAgave20: "JaAgave80",
  jaAgave80: "JaGeneralWhite",
  jaAgaveOutlinesSecondary: "JaGeneralWhite",
  jaGeneralWhite: "JaAgave80",
  pennyNeutralLightGrey: "PennyRed",
  pennyNeutralWhite: "PennyRed",
  pennyRed: "PennyNeutralWhite",
  pennyRedDark: "PennyNeutralWhite",
};
export const Root = styled.div<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    all: unset;

    display: flex;
    flex-direction: column;
    gap: ${theme.space[gapMap[size.mobile].rows]};
    color: ${theme.color[colorMap[theme.contextSpecific.backgroundColor]]};
    ${up("md")} {
      gap: ${theme.space[gapMap[size.desktop].rows]};
    }
  `,
);
export const Wrapper = styled.div<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    display: flex;
    flex-direction: row;
    row-gap: ${theme.space[gapMap[size.mobile].rows]};
    align-items: flex-end;
    flex-wrap: wrap;
    position: relative;
    ${up("md")} {
      row-gap: ${theme.space[gapMap[size.desktop].rows]};
    }
  `,
);
export const AmountWrapper = styled.div<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.space[gapMap[size.mobile].amountGap]};
    align-items: flex-end;
    ${up("md")} {
      gap: ${theme.space[gapMap[size.desktop].amountGap]};
    }
  `,
);
export const Amount = styled.p<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    font: ${theme.typography[typographyMap[size.mobile].amount]};
    ${trimFont(typographyMap[size.mobile].amount)}

    ${up("md")} {
      font: ${theme.typography[typographyMap[size.desktop].amount]};
      ${trimFont(typographyMap[size.desktop].amount)}
    }
  `,
);

export const AmountUnit = styled.p<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    position: absolute;
    top: 0;
    white-space: nowrap;
    font: ${theme.typography[typographyMap[size.mobile].unit]};
    ${trimFont(typographyMap[size.mobile].unit)}

    ${up("md")} {
      font: ${theme.typography[typographyMap[size.desktop].unit]};
      ${trimFont(typographyMap[size.desktop].unit)}
    }
  `,
);

export const SuffixWrapper = styled.p<{ size: ContingentMediaSize }>(
  ({ theme, size }) => css`
    all: unset;
    font: ${theme.typography[typographyMap[size.mobile].suffix]};
    ${trimFont(typographyMap[size.mobile].suffix)}

    ${up("md")} {
      font: ${theme.typography[typographyMap[size.desktop].suffix]};
      ${trimFont(typographyMap[size.desktop].suffix)}
    }
  `,
);
