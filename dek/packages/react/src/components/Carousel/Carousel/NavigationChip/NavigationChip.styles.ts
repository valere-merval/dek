import styled, { css } from "styled-components";
import { trimFont } from "../../../../theme/mappings/typography";
import { colorMapping } from "./mappings";
import {
  highContrast,
  highContrastBorder,
} from "../../../../utils/accessibility";

export const Button = styled.button<{ $active: boolean }>(
  ({ theme, $active }) => {
    const backgroundColorMapping =
      colorMapping[theme.contextSpecific.backgroundColor];
    const backgroundColor = $active
      ? backgroundColorMapping.backgroundColorChecked
      : backgroundColorMapping.backgroundColor;
    const color = $active
      ? backgroundColorMapping.colorChecked
      : backgroundColorMapping.color;

    return css`
      all: unset;
      position: relative;
      padding: ${theme.size["08"]};
      width: fit-content;
      min-height: ${theme.size["48"]};
      box-sizing: border-box;
      border-radius: ${theme.borderRadius["08"]};
      display: flex;
      gap: ${theme.size["08"]};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      background-color: ${theme.color[backgroundColor]};
      color: ${theme.color[color]};

      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
      }

      &:hover {
        opacity: ${theme.opacity.Degree75};
      }

      ${highContrastBorder()}

      ${highContrast()} {
        ${$active &&
        css`
          filter: invert(100);
        `}
      }
    `;
  },
);

export const Title = styled.p(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography["BodyBold14"]};
    ${trimFont("BodyBold14")}
  `,
);

export const SecondLine = styled.p(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography["BodyLight14"]};
    ${trimFont("BodyLight14")}
  `,
);
