import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { trimFont } from "../../../theme/mappings/typography";
import { getMoreDetailsButtonStyles } from "../../Button/ButtonMoreDetails/ButtonMoreDetails.styles";
import { ConvertToTransient } from "../../propTypes";
import { textColorMixin } from "../themeBackgroundColorMapping";
import { typoMap } from "./mappings";
import { TextProps } from "./Text.types";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled.p<
  ConvertToTransient<TextProps, "color" | "variant" | "trimmed">
>(({ theme, $variant, size, $color, $trimmed }) => {
  return css`
    all: unset;
    display: revert;
    font: ${theme.typography[
      typoMap[theme.contextSpecific.brand][$variant][size].mobile
    ]};
    ${$trimmed &&
    trimFont(typoMap[theme.contextSpecific.brand][$variant][size].mobile)};

    ${up("md")} {
      font: ${theme.typography[
        typoMap[theme.contextSpecific.brand][$variant][size].desktop
      ]};
      ${$trimmed &&
      trimFont(typoMap[theme.contextSpecific.brand][$variant][size].desktop)};
    }

    ${textColorMixin(theme, $color)}

    ${(props) =>
      props.as === "a" &&
      css`
        ${getMoreDetailsButtonStyles({ theme, $inheritFont: true })};
        color: inherit;
      `}

    a {
      ${getMoreDetailsButtonStyles({ theme, $inheritFont: true })};

      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid currentColor;

      ${highContrast()} {
        border-color: transparent;
      }

      &:has(svg) {
        position: relative;

        svg {
          padding-right: 2px;
          transform: translateY(3px);
        }
      }
    }

    b,
    strong {
      font-weight: 700;
    }

    del {
      text-decoration: line-through;
    }

    u {
      text-decoration: underline;
    }
  `;
});
