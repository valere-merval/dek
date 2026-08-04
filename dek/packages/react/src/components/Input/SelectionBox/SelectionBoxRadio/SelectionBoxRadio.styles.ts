import styled, { css } from "styled-components";
import { RadioGroup } from "../../RadioGroup";
import { getMixedColor } from "../../../../theme/mappings/color";
import { Base } from "../shared/Base/Base";
import { mix } from "polished";
import { Indicator as RadioItemIndicator } from "../../RadioGroup/RadioGroup.styles";
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
              ${RadioItemIndicator} {
                background-color: ${getMixedColor(theme, hoverColor)};
              }
              &[data-invalid] {
                ${RadioItemIndicator} {
                  background-color: ${mix(0.85, backgroundColor, errorColor)};
                }
              }
            }
          }
        }
      }
      ${Item} {
        &[data-focus-visible] ${RadioItemIndicator} {
          outline: none;
        }
      }
    `;
  }}
`;

export const Item = styled(RadioGroup.Item)``;
