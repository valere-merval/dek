import styled, { css } from "styled-components";
import { containerUp } from "../../utils/container";
import { textColorMixin } from "../Typography/themeBackgroundColorMapping";
import { IconTile } from "../IconTile";

export const containerBreakpoint = "400px";
export const containerName = "rating-bar-container";

export const ContainerProvider = styled.div(
  () => css`
    container-name: ${containerName};
    container-type: inline-size;
  `,
);

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["12"]};

    ${containerUp(containerName, containerBreakpoint)} {
      width: 100%;

      align-items: center;
      gap: ${theme.space["48"]};
      flex-direction: row;
    }
  `,
);

export const DescriptionWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 20rem;
    flex-shrink: 0;

    gap: ${theme.space["12"]};
  `,
);

export const NumberWrapper = styled.div(
  ({ theme }) => css`
    flex-shrink: 0;
    display: flex;
    justify-content: end;

    width: ${theme.space["32"]};

    ${containerUp(containerName, containerBreakpoint)} {
      width: ${theme.space["40"]};
    }
  `,
);

export const BarWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    flex-grow: 1;

    gap: ${theme.space["12"]};
    ${containerUp(containerName, containerBreakpoint)} {
      gap: ${theme.space["24"]};
    }
  `,
);

export const Icon = styled(IconTile)(
  () => css`
    display: none;
    ${containerUp(containerName, containerBreakpoint)} {
      display: flex;
    }
  `,
);

export const Text = styled.p(
  ({ theme }) => css`
    margin: 0;

    ${textColorMixin(theme)}
    font: ${theme.typography.LabelBold16};

    ${containerUp(containerName, containerBreakpoint)} {
      font: ${theme.typography.LabelBold20};
    }
  `,
);
