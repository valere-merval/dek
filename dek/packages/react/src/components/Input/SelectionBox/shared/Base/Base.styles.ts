import styled, { css, DefaultTheme } from "styled-components";

import { highContrast } from "../../../../../utils/accessibility";
import {
  boxColorMapping,
  discountFontMap,
  fontMappings,
  discountSpaceMap,
  discountBackgroundColorMapping,
  errorColorMap,
} from "./mappings";
import { CardFilled, CardFilledColor } from "../../../../Card/CardFilled";
import { Text } from "../../../../Typography/Text/Text";
import { Brand, getFocusStyles } from "../../../../../theme/theme";
import { textColorMixin } from "../../../../Typography/themeBackgroundColorMapping";
import { TypographyVariant } from "../../../../Typography/Typography";
import { up } from "../../../../../theme/mappings/mediaBreakpoints";

export const Root = styled(CardFilled.Root)`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      position: relative;
      background-color: ${theme.color[
        boxColorMapping[theme.contextSpecific.backgroundColor].backgroundColor
      ]};
      cursor: pointer;
      ${brand === "congstarWeb"
        ? `padding-left: ${theme.space[20]};
      padding-right: ${theme.space[20]};
      ${up("md")} {
        padding-left: ${theme.space[24]};
        padding-right: ${theme.space[24]};
      };`
        : ``}
      @media (hover: hover) {
        &:hover {
          background-color: oklch(
            from
              ${theme.color[
                boxColorMapping[theme.contextSpecific.backgroundColor]
                  .backgroundColor
              ]}
              l c h / ${theme.opacity.Degree75}
          );
        }
      }
      &:has([data-selected="true"]) {
        background-color: ${theme.color[
          boxColorMapping[theme.contextSpecific.backgroundColor].colorIfSelected
        ]};
        @media (hover: hover) {
          &:hover {
            background-color: oklch(
              from
                ${theme.color[
                  boxColorMapping[theme.contextSpecific.backgroundColor]
                    .colorIfSelected
                ]}
                l c h / ${theme.opacity.Degree75}
            );
          }
        }
      }
      &:has([data-invalid="true"]) {
        border: 2px solid
          ${theme.color[errorColorMap[theme.contextSpecific.backgroundColor]]};
      }
      &:has([data-focus-visible="true"]) {
        ${getFocusStyles(theme.contextSpecific.backgroundColor)};
      }
    `;
  }}
`;

export const HeaderImageSideMarginCorrection = styled.div`
  ${({ theme }) => css`
    margin-left: -${theme.space["04"]};
    margin-right: -${theme.space["04"]};
  `}
`;

export const Discount = styled.div<{ $backgroundColor: CardFilledColor }>`
  ${({ theme, $backgroundColor }) => {
    const backgroundColor = $backgroundColor;

    const brand = theme.contextSpecific.brand;
    const borderMobile = theme.space[discountSpaceMap[brand].border.mobile];
    const borderDesktop = theme.space[discountSpaceMap[brand].border.desktop];
    const paddingXMobile = theme.space[discountSpaceMap[brand].paddingX.mobile];
    const paddingXDesktop =
      theme.space[discountSpaceMap[brand].paddingX.desktop];
    const paddingYMobile = theme.space[discountSpaceMap[brand].paddingY.mobile];
    const paddingYDesktop =
      theme.space[discountSpaceMap[brand].paddingY.desktop];
    const marginRightMobile =
      theme.space[discountSpaceMap[brand].marginRight.mobile];
    const marginRightDesktop =
      theme.space[discountSpaceMap[brand].marginRight.desktop];
    const marginBottomMobile =
      theme.space[discountSpaceMap[brand].marginBottom.mobile];
    const marginBottomDesktop =
      theme.space[discountSpaceMap[brand].marginBottom.desktop];

    return css`
      width: fit-content;
      font: ${theme.typography[discountFontMap[brand]]};
      max-width: 80%;
      justify-content: space-between;

      background-color: ${theme.color[
        discountBackgroundColorMapping[backgroundColor].backgroundColor
      ]};
      color: ${theme.color[
        discountBackgroundColorMapping[backgroundColor].textColor
      ]};

      ${Root}:has([data-selected="true"]) & {
        background-color: ${theme.color[
          discountBackgroundColorMapping[backgroundColor]
            .backgroundcolorSelected
        ]};
        color: ${theme.color[
          discountBackgroundColorMapping[backgroundColor].textColorSelected
        ]};
      }

      padding: ${paddingYMobile} ${paddingXMobile};
      border-top-left-radius: ${borderMobile};
      border-bottom-right-radius: ${borderMobile};

      margin: 0 -${marginRightMobile} -${marginBottomMobile} auto;

      ${up("md")} {
        padding: ${paddingYDesktop} ${paddingXDesktop};
        border-top-left-radius: ${borderDesktop};
        border-bottom-right-radius: ${borderDesktop};
        margin: 0 -${marginRightDesktop} -${marginBottomDesktop} auto;
      }

      ${Root}:has([data-invalid="true"]) & {
        margin: 0 calc(-${marginRightMobile} - ${theme.space["02"]})
          calc(-${marginBottomMobile} - ${theme.space["02"]}) auto;
        ${up("md")} {
          margin: 0 calc(-${marginRightDesktop} - ${theme.space["02"]})
            calc(-${marginBottomDesktop} - ${theme.space["02"]}) auto;
        }
      }

      ${highContrast()} {
        outline: 1px solid transparent;
      }
      & p {
        margin: 0;
      }
    `;
  }}
`;

export const ContentWrapper = styled.div<{ $hasHeaderImage: boolean }>`
  ${({ theme, $hasHeaderImage }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.contextSpecific.brand === "congstarWeb"
        ? theme.space[12]
        : theme.space["08"]};
      color: white !important;
      ${brand !== "congstarWeb" &&
      `padding-right: ${theme.space["04"]};
      padding-left:${theme.space["04"]}; 
      padding-bottom: ${theme.space["04"]}
      ${$hasHeaderImage && `padding-top: ${theme.space["04"]};`}
        ${up("md")} {
          padding-right: ${theme.space["08"]};
          padding-left:${theme.space["08"]}; 
      ;`}
    `;
  }}
`;

export const CheckedContentWrapper = styled.div`
  display: none;

  ${Root}:has([data-selected="true"]) & {
    display: flex;
  }
`;

export const IndentedContent = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space[12]};
      margin-left: calc(${theme.space[32]} + ${theme.space["04"]});
      ${up("md")} {
        margin-left: ${theme.space[40]};
      }
    `;
  }}
`;

export const ContentAndDiscountWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      gap: ${theme.space[12]};
    `;
  }}
`;

export const SubText = styled(Text)`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      margin-top: -${theme.space[12]};
      ${brand !== "congstarWeb" && `margin-top: -${theme.space["08"]};`}
    `;
  }}
`;

export const Content = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["06"]};
      ${brand === "congstarWeb" &&
      `
      ${up("md")} {
        gap: ${theme.space["08"]};
      }
        `}
    `;
  }}
`;

export const DurationContentContainer = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["08"]};
      ${up("md")} {
        ${brand === "congstarWeb" && `gap: ${theme.space[16]};`}
      }
    `;
  }}
`;

export const DurationPrice = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      gap: ${theme.space["08"]};
    `;
  }}
`;

export const StrikeThroughPrice = styled.span`
  text-decoration: line-through;
`;

export const PriceWrapper = styled.span`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: ${theme.space["04"]};
    `;
  }}
`;

export const TotalPrice = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      display: flex;
      flex-direction: row;
      align-items: baseline;
      gap: ${({ theme }) => theme.space["04"]};
      ${up("md")} {
        ${brand === "congstarWeb" && `gap: ${theme.space["08"]};`}
      }
    `;
  }}
`;

export const DurationPrices = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["04"]};
      ${up("md")} {
        ${brand === "congstarWeb" && `gap: ${theme.space["08"]};`}
      }
    `;
  }}
`;

export const BelowDividerContainer = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    return css`
      display: flex;
      flex-direction: column;
      gap: ${theme.space["08"]};
      ${up("md")} {
        ${brand === "congstarWeb" &&
        `margin-top: ${theme.space["04"]};
    gap: ${theme.space[12]};`}
      }
    `;
  }}
`;

export const PriceLabel = styled.span(({ theme }) => {
  return getFontFromMapping(theme, fontMappings.priceLabel);
});

export const StrikeThroughLabelAndTotalPriceLabel = styled.span(({ theme }) => {
  return getFontFromMapping(
    theme,
    fontMappings.strikeThroughAndTotalPriceLabel,
  );
});

export const PriceTag = styled.span(({ theme }) => {
  return getFontFromMapping(theme, fontMappings.priceTag);
});

const getFontFromMapping = (
  theme: DefaultTheme,
  mapping: Record<
    Brand,
    { mobile: TypographyVariant; desktop: TypographyVariant }
  >,
) => {
  const brand = theme.contextSpecific.brand;
  return css`
    font: ${theme.typography[mapping[brand].mobile]};
    ${up("md")} {
      font: ${theme.typography[mapping[brand].desktop]};
    }
    ${textColorMixin(theme)};
  `;
};
