import styled, { css } from "styled-components";
import {
  colorMap,
  congstarBackgroundColorMap,
  congstarBorderRadiusMap,
  congstarPaddingMap,
  fontSizeMap,
  lineHeightMap,
  marginMap,
} from "./mappings";
import {
  HeadlineHighlightedProps,
  HeadlineWrapperProps,
} from "./HeadlineHighlighted.types";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { ConvertToTransient } from "../../propTypes";
import { highContrastBorder } from "../../../utils/accessibility";

export const HeadlineWrapper = styled.div<HeadlineWrapperProps>(
  ({ size = "medium" }) => css`
    margin: ${marginMap[size].mobile};
    ${up("md")} {
      margin: ${marginMap[size].desktop};
    }
  `,
);

export const HeadlineHighlighted = styled.div<
  ConvertToTransient<HeadlineHighlightedProps, "decorativeColor">
>(({ theme, $decorativeColor, size = "medium" }) => {
  const brand = theme.contextSpecific.brand;

  return css`
    all: unset;

    font: ${theme.typography[fontSizeMap[brand][size].mobile]};
    ${lineHeightMap[brand]}

    ${up("md")} {
      font: ${theme.typography[fontSizeMap[brand][size].desktop]};
      ${lineHeightMap[brand]}
    }

    display: inline;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;

    color: ${theme.color[colorMap[theme.contextSpecific.backgroundColor]]};

    ${() => {
      if (
        $decorativeColor !== undefined &&
        (brand === "congstarApp" || brand === "congstarWeb")
      ) {
        return css`
          text-transform: uppercase;
          background-color: ${theme.color[
            congstarBackgroundColorMap[$decorativeColor]
          ]};

          padding: 0 ${theme.space[congstarPaddingMap[brand][size].mobile]};

          border-radius: ${theme.borderRadius[
            congstarBorderRadiusMap[brand][size].mobile
          ]};
          ${up("md")} {
            border-radius: ${theme.borderRadius[
              congstarBorderRadiusMap[brand][size].desktop
            ]};
            padding: 0 ${theme.space[congstarPaddingMap[brand][size].desktop]};
          }
        `;
      }
    }}

    ${highContrastBorder()}
  `;
});
