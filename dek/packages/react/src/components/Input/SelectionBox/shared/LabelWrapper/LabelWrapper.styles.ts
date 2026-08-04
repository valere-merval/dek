import styled, { css } from "styled-components";
import { textColorMixin } from "../../../../Typography/themeBackgroundColorMapping";
import { up } from "../../../../../theme/mappings/mediaBreakpoints";
import { basicFontMapping, priceFontMapping } from "./mappings";
import { Tag } from "../../../../Typography/Tag";

export const Container = styled.div<{ $additionalMargin?: boolean }>(
  ({ theme, $additionalMargin }) => {
    const brand = theme.contextSpecific.brand;
    let marginTop = "0";
    if ($additionalMargin) {
      if (brand === "congstarWeb") {
        marginTop = `-${theme.space["02"]}`;
      } else if (brand === "congstarApp") {
        marginTop = theme.space["02"];
      } else {
        marginTop = `calc(${theme.space["02"]} + ${theme.space["01"]})`;
      }
    } else if (brand !== "congstarWeb") {
      marginTop = theme.space["02"];
    }
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      ${up("md")} {
        margin-top: ${marginTop};
      }
    `;
  },
);

export const LabelPriceContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: ${theme.space["08"]};
    width: 100%;
  `,
);

export const Label = styled.span(({ theme }) => {
  const brand = theme.contextSpecific.brand;
  return css`
    height: 100%;
    font: ${theme.typography[basicFontMapping[brand].mobile]};
    ${up("md")} {
      font: ${theme.typography[basicFontMapping[brand].desktop]};
    }
    ${textColorMixin(theme)};
  `;
});

export const Price = styled(Tag)(({ theme }) => {
  const brand = theme.contextSpecific.brand;
  return css`
    text-align: right;
    white-space: nowrap;
    width: fit-content;
    ${textColorMixin(theme)};
    ${brand !== "congstarWeb" &&
    `font: ${theme.typography[priceFontMapping[brand]]};`}
  `;
});
