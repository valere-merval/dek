import styled, { css } from "styled-components";
import { Button as ButtonMoreDetails } from "../Button/ButtonMoreDetails/ButtonMoreDetails.styles";
import { Text } from "../Typography/Text";
import { containerUp } from "../../utils/container";
import { highContrast } from "../../utils/accessibility";
export const containerBreakpoint = "400px";
export const containerName = "promoter-share-container";

export const ContainerProvider = styled.div(
  () => css`
    container-type: inline-size;
    container-name: ${containerName};
  `,
);

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;

    gap: ${theme.space["12"]};
    @container ${containerName} (inline-size > ${containerBreakpoint}) {
      gap: ${theme.space["20"]};
    }
  `,
);

export const PromoterGraphic = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${theme.size["56"]};
    height: ${theme.size["56"]};
    background-color: ${theme.color.DecorativePrimaryOrange};
    border-radius: ${theme.borderRadius["16"]};

    img {
      width: ${theme.size["40"]};
      height: ${theme.size["40"]};
    }

    ${highContrast} {
      outline: 1px solid transparent;
      forced-color-adjust: none;
    }

    @container ${containerName} (inline-size > ${containerBreakpoint}) {
      border-radius: ${theme.borderRadius["20"]};
      width: ${theme.size["72"]};
      height: ${theme.size["72"]};
      img {
        width: ${theme.size["48"]};
        height: ${theme.size["48"]};
      }
    }
  `,
);

export const Title = styled(Text)(
  ({ theme }) => css`
    font: ${theme.typography.HeadlineBold20};

    ${containerUp(containerName, containerBreakpoint)} {
      font: ${theme.typography.HeadlineBold24};
    }
  `,
);

export const Description = styled(Text)(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight14};

    ${containerUp(containerName, containerBreakpoint)} {
      font: ${theme.typography.BodyLight16};
    }
  `,
);

export const TextWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.space["04"]};

    & ${ButtonMoreDetails} {
      font: ${theme.typography.BodyLight14};
    }

    ${containerUp(containerName, containerBreakpoint)} {
      gap: ${theme.space["06"]};

      & ${ButtonMoreDetails} {
        font: ${theme.typography.BodyLight16};
      }
    }
  `,
);

export const ButtonMoreDetailsWrapper = styled.div<{
  $hasDescription: boolean;
}>(
  ({ $hasDescription, theme }) => css`
    ${$hasDescription &&
    css`
      margin-top: ${theme.space["04"]};
    `}
  `,
);
