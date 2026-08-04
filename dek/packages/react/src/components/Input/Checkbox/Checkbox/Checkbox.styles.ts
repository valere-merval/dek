import styled, { css } from "styled-components";
import { Check } from "@fair/icons";
import { mix } from "polished";
import { getMixedColor } from "../../../../theme/mappings/color";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { backgroundColorMap, typoMap } from "../shared/mappings";
import { highContrast } from "../../../../utils/accessibility";

export const Container = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;

    flex-direction: column;
    gap: ${theme.space["08"]};
  `,
);

export const Icon = styled(Check)(({ theme }) => {
  return css`
    width: ${theme.size[16]};
    height: ${theme.size[16]};
    display: none;
    ${highContrast()} {
      forced-color-adjust: preserve-parent-color;
    }
  `;
});

export const Indicator = styled.div(({ theme }) => {
  const background = theme.contextSpecific.backgroundColor;
  const backgroundColor =
    theme.color[backgroundColorMap[background].backgroundColor];
  const color = theme.color[backgroundColorMap[background].color];

  return css`
    all: unset;
    display: flex;
    flex-shrink: 0;
    align-self: start;
    align-items: center;
    justify-content: center;
    position: relative;
    width: ${theme.space["20"]};
    height: ${theme.space["20"]};
    background-color: ${backgroundColor};
    color: ${color};
    border: 2px solid ${color};
    border-radius: ${theme.borderRadius["04"]};
  `;
});

export const CheckboxContainer = styled(AriaCheckbox)(({ theme }) => {
  const background = theme.contextSpecific.backgroundColor;
  const disabled = theme.color[backgroundColorMap[background].disabled];
  const error = theme.color[backgroundColorMap[background].error];

  return css`
    all: unset;
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: pointer;

    column-gap: ${theme.space["12"]};
    ${up("md")} {
      column-gap: ${theme.space["16"]};
    }

    align-items: center;

    &[data-selected],
    &[data-indeterminate] {
      ${Indicator} {
        ${highContrast()} {
          border-color: Highlight;
          color: Highlight;
        }
        > ${Icon} {
          display: revert;
        }
      }
    }

    &[data-focus-visible="true"] {
      ${Indicator} {
        ${theme.contextSpecific.focusStyles}
        ${highContrast()} {
          outline-color: Highlight;
        }
      }
    }

    &[data-hovered="true"]:not([data-disabled="true"]) {
      ${Indicator} {
        background-color: ${getMixedColor(
          theme,
          backgroundColorMap[background].hover,
        )};
      }
    }

    &[data-disabled="true"] {
      cursor: not-allowed;
      ${Indicator} {
        border: 2px solid ${disabled};
        color: ${disabled};
        ${highContrast()} {
          border-color: GrayText;
          color: GrayText;
        }
      }
    }

    &[data-invalid="true"] {
      ${Indicator} {
        border-color: ${error};
        color: ${error};
        ${highContrast()} {
          border-color: LinkText;
          color: LinkText;
        }
      }
    }

    &[data-invalid="true"][data-hovered="true"]:not([data-disabled="true"]) {
      ${Indicator} {
        background-color: ${mix(
          0.85,
          theme.color[
            backgroundColorMap[theme.contextSpecific.backgroundColor]
              .backgroundColor
          ],
          theme.color[
            backgroundColorMap[theme.contextSpecific.backgroundColor].error
          ],
        )};
      }
    }
  `;
});

export const CheckboxLabel = styled.span(({ theme }) => {
  const brand = theme.contextSpecific.brand;

  return css`
    all: unset;
    display: flex;
    cursor: pointer;
    ${textColorMixin(theme)};

    ${CheckboxContainer}[data-disabled="true"] & {
      cursor: not-allowed;
    }
    font: ${theme.typography[typoMap[brand].mobile]};
    ${up("md")} {
      font: ${theme.typography[typoMap[brand].desktop]};
    }
    align-self: center;
  `;
});
