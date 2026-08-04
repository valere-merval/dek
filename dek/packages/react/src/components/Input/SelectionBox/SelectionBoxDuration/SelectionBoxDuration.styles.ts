import styled, { css } from "styled-components";
import { Divider } from "../../../Divider";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";
import { RadioGroupOld } from "../../RadioGroupOld";

export const DurationWrapper = styled.label`
  display: flex;
  flex-direction: column;
  container-name: duration-wrapper;
  container-type: inline-size;
  cursor: inherit;
`;

export const Separator = styled(Divider)`
  ${({ theme }) => {
    return css`
      margin: ${theme.space[12]} 0;
      ${up("md")} {
        margin: ${theme.space[16]} 0;
      }
    `;
  }}
`;

export const ItemWrapper = styled.label`
  ${({ theme }) => {
    return css`
      display: flex;
      cursor: inherit;

      gap: ${theme.space[12]};
      ${up("md")} {
        gap: ${theme.space[16]};
      }
    `;
  }}
`;

export const Prices = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;

      gap: ${theme.space["04"]};
      ${up("md")} {
        gap: ${theme.space["08"]};
      }
    `;
  }}
`;

export const Price = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      flex-direction: column;
      gap: ${theme.space["04"]};
      @container duration-wrapper (min-width: 300px) {
        flex-direction: row;
      }
    `;
  }}
`;

export const PriceLabel = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};

    ${up("md")} {
      font: ${theme.typography.BodyLight16};
    }
  `,
);

export const PriceText = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.TagBold16};
    ${textColorMixin(theme)};

    ${up("md")} {
      font: ${theme.typography.TagBold20};
    }
  `,
);

export const TotalPrice = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: start;
      align-items: baseline;
      flex-wrap: wrap;
      gap: ${theme.space["04"]};

      margin-top: ${theme.space["08"]};
      ${up("md")} {
        margin-top: ${theme.space[16]};
      }
    `;
  }}
`;

export const TotalPriceDescription = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};
  `,
);

export const TotalPriceText = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.TagBold16};
    ${textColorMixin(theme)};
    ${up("md")} {
      font: ${theme.typography.TagBold20};
    }
  `,
);

export const StrikeThroughPrice = styled.span(
  ({ theme }) => css`
    white-space: nowrap;

    font: ${theme.typography.BodyLight12};
    ${textColorMixin(theme)};
    ${up("md")} {
      font: ${theme.typography.BodyLight14};
    }
  `,
);

export const MoreDetailsWrapper = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.space["08"]};
      ${up("md")} {
        margin-top: ${theme.space[12]};
      }
    `;
  }}
`;

export const RadioItem = styled(RadioGroupOld.Item)`
  ${() => {
    return css`
      flex-shrink: 0;
    `;
  }}
`;

export const RadioLabelText = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.BodyBold16};
    ${textColorMixin(theme)};

    ${up("md")} {
      font: ${theme.typography.HeadlineBold20};
    }
  `,
);
