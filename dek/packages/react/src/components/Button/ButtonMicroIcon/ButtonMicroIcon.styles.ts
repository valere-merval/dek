import styled, { css } from "styled-components";
import { svgColorMap } from "./mappings";
import { Alignment } from "./ButtonMicroIcon.types";
import { highContrast } from "../../../utils/accessibility";

const alignmentMap: Record<Alignment, string> = {
  top: "top",
  center: "baseline",
};

export const Button = styled.button<{ $align: Alignment }>(
  ({ theme, $align }) => css`
    all: unset;
    font: inherit;
    width: fit-content;

    padding: ${theme.space["04"]};
    margin: -${theme.space["04"]};
    cursor: pointer;
    color: ${theme.color[
      svgColorMap[theme.contextSpecific.backgroundColor].color
    ]};
    border-radius: 50%;
    background-color: inherit;
    &:hover {
      opacity: ${theme.opacity.Degree75};
    }

    &:focus-visible svg {
      border-radius: inherit;
      ${theme.contextSpecific.focusStyles}
      outline-offset: ${theme.space["02"]};

      ${highContrast} {
        outline-color: ButtonBorder;
      }
    }

    & svg {
      font: inherit;
      width: ${theme.size["16"]};
      height: ${theme.size["16"]};
      vertical-align: ${alignmentMap[$align]};

      ${$align === "center" &&
      css`
        transform: translateY(0.2rem);
      `}
    }
  `,
);
