import styled, { css } from "styled-components";
import {
  backgroundColorMapping,
  backgroundTextColorMap,
} from "../../../theme/theme";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled.div(
  ({ theme }) => css`
    all: unset;
    box-sizing: border-box;
    display: flex;
    background-color: ${theme.color[
      backgroundColorMapping[theme.contextSpecific.backgroundColor]
    ]};
    padding: ${theme.space["08"]} ${theme.space["20"]};
    border-radius: ${theme.borderRadius[16]};
    align-items: center;
    justify-content: space-between;
    box-shadow: ${theme.shadow.Opacity15Elevation2};

    // fixes issue inside a grid container
    // without the text will not be truncated and the text will overflow out of the grid
    min-width: 0;

    min-height: ${theme.size["72"]};
    max-height: ${theme.size["72"]};

    ${highContrast()} {
      border: 2px solid transparent;
    }
  `,
);

export const Head = styled.span(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography.BodyBold16};
    color: ${theme.color[
      backgroundTextColorMap[theme.contextSpecific.backgroundColor]
    ]};
    transform: translateY(-2px);
  `,
);
