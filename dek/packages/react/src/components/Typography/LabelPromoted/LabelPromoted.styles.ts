import styled, { css } from "styled-components";
import { LabelPromotedProps } from "./LabelPromoted.types";
import { ConvertToTransient } from "../../propTypes";
import {
  backgroundColorMap,
  borderRadiusMap,
  colorMap,
  heightMap,
  textTransformationMap,
  typoMap,
} from "./mappings";
import { highContrastBorder } from "../../../utils/accessibility";

export const LabelPromoted = styled.div<
  ConvertToTransient<LabelPromotedProps, "decorativeColor">
>(({ theme, $decorativeColor }) => {
  const brand = theme.contextSpecific.brand;
  const color =
    $decorativeColor ||
    backgroundColorMap[theme.contextSpecific.backgroundColor];
  return css`
    all: unset;
    display: flex;
    align-items: center;

    font: ${theme.typography[typoMap[brand]]};
    width: fit-content;
    height: ${theme.size[heightMap[brand]]};
    line-height: ${theme.space["16"]};
    padding: 0 ${theme.space["08"]};
    border-radius: ${theme.borderRadius[
      borderRadiusMap[theme.contextSpecific.brand]
    ]};
    text-transform: ${textTransformationMap[theme.contextSpecific.brand]};

    background: ${theme.color[colorMap[color].backgroundColor]};
    color: ${theme.color[colorMap[color].color]};

    ${highContrastBorder()}
  `;
});
