import styled, { css } from "styled-components";
import { typoMap } from "./mappings";
import { LabelProps } from "./Label.types";
import { textColorMixin } from "../themeBackgroundColorMapping";
import { ConvertToTransient } from "../../propTypes";

export const Root = styled.label<ConvertToTransient<LabelProps, "color">>`
  ${({ theme, size, $color }) => {
    const brand = theme.contextSpecific.brand;

    return css`
      all: unset;
      display: revert;

      font: ${theme.typography[typoMap[brand][size]]};

      ${textColorMixin(theme, $color)}
    `;
  }}
`;
