import styled, { css } from "styled-components";
import { typoMap } from "./mappings";
import { TagProps } from "./Tag.types";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { textColorMixin } from "../themeBackgroundColorMapping";
import { ConvertToTransient } from "../../propTypes";

export const Root = styled.div<ConvertToTransient<TagProps, "color">>`
  ${({ theme, size, $color }) => {
    return css`
      all: unset;
      display: revert;

      font: ${theme.typography[typoMap[size].mobile]};
      ${up("md")} {
        font: ${theme.typography[typoMap[size].desktop]};
      }

      ${textColorMixin(theme, $color)}
    `;
  }}
`;
