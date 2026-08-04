import styled, { css, DefaultTheme } from "styled-components";
import { itemSizeMap } from "../shared/mappings";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { backgroundColorMapping } from "../../../theme/theme";
import { Stepper } from "../shared";
import { Text } from "../../Typography/Text";
import {
  Item as StepperHorizontalItem,
  Separator as StepperHorizontalSeparator,
  List as StepperHorizontalList,
} from "../StepperHorizontal/StepperHorizontal.styles";
import { generateStepStyle } from "../shared/Stepper.styles";

type Direction = "right" | "left";

const hideLine = (direction: Direction, theme: DefaultTheme) => {
  return css`
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      z-index: -1;
      ${direction}: 0;
      width: 50%;
      height: 60%;
      background-color: ${theme.color[
        backgroundColorMapping[theme.contextSpecific.backgroundColor]
      ]};
    }
  `;
};

export const List = styled(StepperHorizontalList)(({ theme }) => {
  return css`
    align-items: flex-start;

    ${up("md")} {
      display: flex;
      > *:first-child {
        ${hideLine("left", theme)}
      }
      > *:nth-last-child(2) {
        ${hideLine("right", theme)}
      }
    }
  `;
});

export const Item = styled(StepperHorizontalItem)(({ theme }) => {
  return css`
    flex-shrink: 1;
    flex-basis: 0;
    flex-direction: column;
    align-items: center;
    max-width: fit-content;
    gap: 0;
    ${up("md")} {
      flex-grow: 1;
      gap: ${theme.space["08"]};
    }
  `;
});

export const Separator = styled(StepperHorizontalSeparator)(({ theme }) => {
  return css`
    top: calc(${theme.size[itemSizeMap["large"].indicatorDimension]} / 2);
    ${up("md")} {
      top: calc(
        ${theme.size[itemSizeMap["extraLarge"].indicatorDimension]} / 2
      );
    }
  `;
});

export const Indicator = styled(Stepper.Indicator)(({ theme, state }) => {
  const indicatorDimensionsExtraLarge =
    theme.size[itemSizeMap["extraLarge"].indicatorDimension];
  const iconDimensionsExtraLarge =
    theme.size[itemSizeMap["extraLarge"].iconDimension];
  const indicatorDimensionsLarge =
    theme.size[itemSizeMap["large"].indicatorDimension];
  const iconDimensionsLarge = theme.size[itemSizeMap["large"].iconDimension];

  return css`
    height: ${indicatorDimensionsLarge};
    min-width: ${indicatorDimensionsLarge};
    max-width: ${indicatorDimensionsLarge};
    & svg {
      width: ${iconDimensionsLarge};
      height: ${iconDimensionsLarge};
      vertical-align: middle;
    }

    ${up("md")} {
      height: ${indicatorDimensionsExtraLarge};
      min-width: ${indicatorDimensionsExtraLarge};
      max-width: ${indicatorDimensionsExtraLarge};

      & svg {
        width: ${iconDimensionsExtraLarge};
        height: ${iconDimensionsExtraLarge};
        vertical-align: middle;
      }
    }
    ${generateStepStyle(theme, state)}
    ${Link}:focus-visible & {
      ${theme.contextSpecific.focusStyles}
    }
  `;
});

export const Label = styled(Text)`
  display: none;

  ${up("md")} {
    display: flex;
    cursor: default;
  }
`;

export const Link = styled.a`
  all: unset;
  cursor: pointer;
`;
