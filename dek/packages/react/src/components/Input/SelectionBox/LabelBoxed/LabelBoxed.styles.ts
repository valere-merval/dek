import styled, { css } from "styled-components";
import { LabelBoxedProps } from "./LabelBoxed.types";
import { Typography } from "../../../Typography/Typography";
import { LabelPromoted as LabelPromotedComponent } from "../../../Typography/LabelPromoted";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { errorColorMap } from "./mappings";
import { getMixedColor } from "../../../../theme/mappings/color";
import { Item as RadioItem } from "../../RadioGroupOld/RadioGroupOld.styles";
import { Root as CheckboxItem } from "../../CheckboxOld/Checkbox.styles";
import {
  highContrast,
  highContrastBorder,
} from "../../../../utils/accessibility";

export const Root = styled.label<LabelBoxedProps>`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      background-color: ${theme.color.NeutralShape80};

      gap: ${theme.space[12]};
      padding: ${theme.space[16]} ${theme.space[20]};
      border-radius: ${theme.borderRadius[12]};
      ${highContrastBorder()}

      ${up("md")} {
        padding: ${theme.space[20]} ${theme.space[24]};
        border-radius: ${theme.borderRadius[16]};
      }

      &:has(*[aria-invalid="true"]),
      *[aria-invalid="true"] & {
        border: 2px solid
          ${theme.color[errorColorMap[theme.contextSpecific.backgroundColor]]};
      }

      // checks if element has a checkbox or a radio item focused
      &:has(${CheckboxItem}:focus-visible),
      &:has(${RadioItem}:focus-visible) {
        ${theme.contextSpecific.focusStyles}

        // remove focusRing inside SelectionBoxOption for checkbox and radio inputs
        ${RadioItem},
        ${CheckboxItem} {
          &:focus-visible {
            outline: none;
          }
        }
      }

      // sets interactive color if element is checked
      // data-state attribute is neccessary if component is used without a form
      &:has(*[data-state="checked"]):not(:has(*:disabled)) {
        background-color: ${theme.color.InteractiveBlue};
      }

      &:hover {
        &:not(:has(*:disabled)) {
          &:not(:has(*:checked)):not(:has(*[data-state="checked"])) {
            background-color: ${getMixedColor(theme, {
              baseWeight: 0.75,
              mixColor: "InteractiveWhite",
              baseColor: "NeutralShape80",
            })};
          }

          &:has(input[type="checkbox"]:checked),
          &:has(*[data-state="checked"]) {
            background-color: ${getMixedColor(theme, {
              baseWeight: 0.75,
              mixColor: "InteractiveWhite",
              baseColor: "InteractiveBlue",
            })};
          }
        }
      }

      &:has(*:disabled) {
        cursor: not-allowed;
      }
    `;
  }}
`;

export const Content = styled.label`
  cursor: inherit;
`;

export const LabelPromoted = styled(LabelPromotedComponent)`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: -1rem;

      right: ${theme.space[20]};
      ${up("md")} {
        right: ${theme.space[24]};
      }
      ${highContrast()} {
        outline: 1px solid transparent;
      }
    `;
  }}
`;

export const Discount = styled(Typography)`
  ${({ theme }) => {
    return css`
      width: fit-content;
      max-width: 80%;
      background-color: ${theme.color.InteractiveBlack};
      margin: 0 -${theme.space[20]} -${theme.space[16]} auto;
      padding: ${theme.space["08"]} ${theme.space[20]};
      border-top-left-radius: ${theme.borderRadius[12]};
      border-bottom-right-radius: ${theme.borderRadius[12]};

      ${up("md")} {
        margin: 0 -${theme.space[24]} -${theme.space[20]} auto;
        padding: ${theme.space["08"]} ${theme.space[24]};
        border-top-left-radius: ${theme.borderRadius[16]};
        border-bottom-right-radius: ${theme.borderRadius[16]};
      }
      ${highContrast()} {
        outline: 1px solid transparent;
      }
      & p {
        margin: 0;
      }
    `;
  }}
`;
