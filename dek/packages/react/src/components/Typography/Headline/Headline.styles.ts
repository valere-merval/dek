import styled, { css } from "styled-components";
import { typoMap } from "./mappings";
import { HeadlineProps } from "./Headline.types";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { textColorMixin } from "../themeBackgroundColorMapping";
import { ConvertToTransient } from "../../propTypes";
import { trimFont } from "../../../theme/mappings/typography";

export const Root = styled.div<
  ConvertToTransient<HeadlineProps, "color" | "variant" | "trimmed">
>`
  ${({ theme, $variant, size, $color, $trimmed }) => {
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
    `;
  }}
`;
