import styled, { css } from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HORIZONTAL_DEVICE_BOX_MIN_WIDTH,
  BOX_DEVICE_ITEM_CONTAINER_NAME,
} from "../shared/BoxDevice.styles";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";
import { Divider } from "../../../Divider";
import {
  highContrast,
  highContrastBorder,
} from "../../../../utils/accessibility";

export const ContentTop = styled.div(
  ({ theme }) => css`
    max-width: ${CONTENT_MAX_WIDTH};

    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: ${theme.space["04"]};
    align-items: center;

    text-align: center;
  `,
);

export const ContentBottom = styled.div(
  ({ theme }) => css`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};
  `,
);

export const MultiPriceRowWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    gap: ${theme.space["06"]};
    margin-bottom: ${theme.space["08"]};
  `,
);

export const MultiPriceRow = styled.div(
  () => css`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    text-align: center;
  `,
);

export const MultiDivider = styled(Divider)(
  () => css`
    flex-shrink: 0;
  `,
);

export const PriceRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;

    white-space: nowrap;
  `,
);

export const ActualPrice = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.TagBold20};
    ${textColorMixin(theme)};
  `,
);

export const SecondaryPrice = styled.div(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};

    text-align: center;
    text-wrap: balance;
  `,
);

export const BringbackSuffix = styled.div(
  ({ theme }) => css`
    font: ${theme.typography.BodyBold14};
    ${textColorMixin(theme)};

    text-align: center;
    text-wrap: balance;
  `,
);

export const Content = styled.div(
  ({ theme }) => css`
    max-width: ${CONTENT_MAX_WIDTH};
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${theme.space["16"]};
    align-items: center;
    flex-grow: 1;

    @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      // Eine feste Breite ist nötig, dass der Content das Bild nicht verkleinert und somit die Kacheln unterschiedlich skallieren
      width: 320px;
    }
  `,
);

export const ProductSpecs = styled.div(
  ({ theme }) => css`
    display: flex;
    row-gap: ${theme.space["04"]};
    column-gap: ${theme.space["16"]};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `,
);

export const ForwardTradeInInfoBubble = styled.div(
  ({ theme }) => css`
    position: relative;

    color: ${theme.color["NeutralPrimaryBlack"]};
    background-color: ${theme.color["DecorativeSecondaryLime"]};

    box-sizing: border-box;
    border-radius: ${theme.borderRadius["08"]};
    width: ${theme.space["40"]};
    height: ${theme.space["40"]};
    padding: ${theme.space["04"]};

    // height of the triangle + actual margin bottom
    margin-bottom: calc(${theme.space["08"]} + ${theme.space["04"]});
    ${highContrastBorder()}

    &::after {
      content: "";
      position: absolute;
      left: ${theme.space["12"]};

      bottom: -${theme.space["08"]};
      border-left: ${theme.space["08"]} solid transparent;
      border-right: ${theme.space["08"]} solid transparent;
      border-top: ${theme.space["08"]} solid
        ${theme.color["DecorativeSecondaryLime"]};
      ${highContrast()} {
        clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
      }
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `,
);

export const StrikeThroughRoot = styled.div(
  ({ theme }) => css`
    white-space: nowrap;
    font: ${theme.typography.BodyLight14};
  `,
);

export const StrikeThrough = styled.span`
  text-decoration: line-through;
`;
