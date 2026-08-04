import styled, { css } from "styled-components";
import { getMixedColor } from "../../../../theme/mappings/color";
import { mix } from "polished";
import { Indicator as CheckboxIndicator } from "../../Checkbox/Checkbox/Checkbox.styles";
import { Base } from "../shared/Base/Base";
import { CheckboxGroup } from "../../Checkbox/CheckboxGroup";
import { backgroundColorMap } from "../shared/mappings";

export const Box = styled(Base)`
  ${({ theme }) => {
    const background = theme.contextSpecific.backgroundColor;
    const backgroundColor =
      theme.color[backgroundColorMap[background].backgroundColor];
    const hoverColor = backgroundColorMap[background].hover;
    const errorColor = theme.color[backgroundColorMap[background].error];
    return css`
      @media (hover: hover) {
        &:hover {
          ${Item} {
            &:not([data-selected]) {
              ${CheckboxIndicator} {
                background-color: ${getMixedColor(theme, hoverColor)};
              }
              &[data-invalid] {
                ${CheckboxIndicator} {
                  background-color: ${mix(0.85, backgroundColor, errorColor)};
                }
              }
            }
            &[data-hovered] {
              &[data-selected] {
                ${CheckboxIndicator} {
                  background-color: ${theme.color[
                    backgroundColorMap[background].selected
                  ]};
                }
              }
            }
          }
        }
      }
      ${Item} {
        &[data-focus-visible] ${CheckboxIndicator} {
          outline: none;
        }
      }
    `;
  }}
`;

export const Item = styled(CheckboxGroup.Item)``;

export const ErrorContainer = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;

    flex-direction: column;
    gap: ${theme.space["08"]};
  `,
);
