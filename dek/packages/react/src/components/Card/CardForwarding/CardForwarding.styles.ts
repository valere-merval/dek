import styled, { css } from "styled-components";
import { CardFilled } from "../CardFilled";
import { ButtonBase } from "../../Button/ButtonBase/ButtonBase";
import { buttonColorMapping } from "./mappings";
import { highContrastBorder } from "../../../utils/accessibility";

export const Root = styled(CardFilled.Root)(
  ({ theme }) => css`
    cursor: pointer;
    ${highContrastBorder()}

    &:has(${Button}:focus-visible) {
      ${theme.contextSpecific.focusStyles}
    }
  `,
);

export const ContentWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.space["12"]};
  `,
);

export const LeftColumn = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["12"]};
  `,
);

export const HeadlineDescriptionWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["06"]};
  `,
);

export const Button = styled(ButtonBase)(
  ({ theme }) => css`
    all: unset;

    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    color: ${theme.color[
      buttonColorMapping[theme.contextSpecific.brand].color
    ]};

    & svg {
      aspect-ratio: auto;
      width: ${theme.space["24"]};
      height: auto;
    }

    &:hover {
      opacity: ${theme.opacity.Degree75};
    }
  `,
);
