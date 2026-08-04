import styled, { css } from "styled-components";
import { ColorVariants } from "../ColorVariants";
import { highContrast } from "../../utils/accessibility";

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    column-gap: ${theme.space["20"]};
  `,
);

export const ProductSpecsContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    column-gap: ${theme.space["08"]};
    align-items: center;
  `,
);

export const ImageWrapper = styled.div(
  ({ theme }) => css`
    & img {
      max-width: 100%;
      height: ${theme.space["80"]};
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }
  `,
);

export const ContentContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["04"]};
  `,
);

export const StyledColorVariants = styled(ColorVariants)(
  () => css`
    ${highContrast()} {
      display: none;
    }
  `,
);
