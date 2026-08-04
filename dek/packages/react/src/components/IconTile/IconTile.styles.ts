import styled, { css } from "styled-components";
import {
  IconTileColor,
  IconTileContainerQueryConfiguration,
  IconTileMediaSize,
  IconTileVariant,
} from "./IconTile.types";
import {
  IconTileBorderColorMap,
  IconTileColorMap,
  IconTileSizeMap,
} from "./mapping";
import { up } from "../../theme/mappings/mediaBreakpoints";
import { getContrast } from "polished";
import { containerUp } from "../../utils/container";

export const Root = styled.div<{
  $size: IconTileMediaSize;
  $color: IconTileColor;
  $variant: IconTileVariant;
  $containerQueryConfiguration?: IconTileContainerQueryConfiguration;
}>(({ theme, $color, $variant, $size, $containerQueryConfiguration }) => {
  const brand = theme.contextSpecific.brand;
  const background = theme.contextSpecific.backgroundColor;
  const color = theme.color[IconTileColorMap[$color]];
  const borderColor =
    theme.color[IconTileBorderColorMap[theme.contextSpecific.backgroundColor]];
  const borderSize = theme.size["02"];
  const paddingMobile =
    theme.space[IconTileSizeMap[brand][$size.minAvailableSpace].padding];
  const dimensionMobile =
    theme.size[IconTileSizeMap[brand][$size.minAvailableSpace].icon];
  const borderRadiusMobile =
    theme.borderRadius[
      IconTileSizeMap[brand][$size.minAvailableSpace].borderRadius
    ];
  const paddingDesktop =
    theme.space[IconTileSizeMap[brand][$size.maxAvailableSpace].padding];
  const dimensionDesktop =
    theme.size[IconTileSizeMap[brand][$size.maxAvailableSpace].icon];
  const borderRadiusDesktop =
    theme.borderRadius[
      IconTileSizeMap[brand][$size.maxAvailableSpace].borderRadius
    ];

  const minStyles = css`
    border-radius: ${borderRadiusMobile};
    padding: ${paddingMobile};
    height: calc(calc(${paddingMobile} * 2) + ${dimensionMobile});
    width: calc(calc(${paddingMobile} * 2) + ${dimensionMobile});

    svg {
      width: ${dimensionMobile};
      height: ${dimensionMobile};
    }
  `;
  const maxStyles = css`
    border-radius: ${borderRadiusDesktop};
    padding: ${paddingDesktop};
    height: calc(calc(${paddingDesktop} * 2) + ${dimensionDesktop});
    width: calc(calc(${paddingDesktop} * 2) + ${dimensionDesktop});

    svg {
      width: ${dimensionDesktop};
      height: ${dimensionDesktop};
    }
  `;

  const isBlueBackground =
    background === "blue" &&
    (brand === "congstarApp" || brand === "congstarWeb");

  const contrastRatio = getContrast(`${color}`, "#fff");
  return css`
    all: unset;
    box-sizing: border-box;
    display: inline flex;
    align-items: center;
    justify-content: center;
    outline: ${borderSize} solid transparent;

    ${minStyles}
    ${$containerQueryConfiguration
      ? css`
          ${containerUp(
            $containerQueryConfiguration.containerName,
            $containerQueryConfiguration.containerBreakpoint,
          )} {
            ${maxStyles}
          }
        `
      : css`
          ${up("md")} {
            ${maxStyles}
          }
        `}

    ${$variant === "filled" &&
    css`
      background-color: ${isBlueBackground
        ? theme.color.NeutralPrimaryBlack
        : color};
      color: ${isBlueBackground || contrastRatio >= 10
        ? theme.color.NeutralPrimaryWhite
        : theme.color.NeutralPrimaryBlack};
    `}

    ${$variant === "outlined" &&
    css`
      color: ${isBlueBackground ? theme.color.NeutralPrimaryBlack : color};
      outline-color: oklch(
        from ${borderColor} l c h / ${theme.opacity.Degree15}
      );
    `}
  `;
});
