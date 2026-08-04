import styled, { css } from "styled-components";
import {
  CONTENT_MAX_WIDTH,
  HORIZONTAL_DEVICE_BOX_MIN_WIDTH,
  BOX_DEVICE_ITEM_CONTAINER_NAME,
} from "../shared/BoxDevice.styles";
import { Price as PriceComponent } from "../../../Price/Price";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";

export const ContentTop = styled.div(
  ({ theme }) => css`
    max-width: ${CONTENT_MAX_WIDTH};

    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};
    align-items: center;

    text-align: center;

    @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      align-items: flex-start;
      text-align: left;
    }
  `,
);

export const ContentBottom = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${CONTENT_MAX_WIDTH};

    display: flex;
    flex-direction: column;
    gap: ${theme.space["12"]};
    align-items: flex-start;

    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};

    @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      align-items: flex-start;
    }
  `,
);

export const Price = styled(PriceComponent)(
  ({ theme }) => css`
    margin-top: ${theme.space["04"]};
  `,
);
