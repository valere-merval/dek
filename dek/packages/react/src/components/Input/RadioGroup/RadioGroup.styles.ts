import { RadioGroup, Radio, Label as AriaLabel } from "react-aria-components";
import styled, { css } from "styled-components";
import {
  backgroundColorMap,
  descriptionTypoMap,
  indicatorMap,
  radioItemTypoMap,
  typoMap,
} from "./mappings";
import { highContrast } from "../../../utils/accessibility";
import { getMixedColor } from "../../../theme/mappings/color";
import { mix } from "polished";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { ItemGapSize } from "../shared/ItemGapSize";
import { textColorMixin } from "../../Typography/themeBackgroundColorMapping";

export const Root = styled(RadioGroup)``;

export const Label = styled(AriaLabel)<{ $additionalMarginBottom?: boolean }>`
  ${({ theme, $additionalMarginBottom }) => {
    const brand = theme.contextSpecific.brand;

    return css`
      display: inline-block;
      font: ${theme.typography[typoMap[brand].mobile]};
      ${textColorMixin(theme)};
      margin-bottom: ${$additionalMarginBottom
        ? theme.size[16]
        : theme.size["02"]};
      ${up("md")} {
        font: ${theme.typography[typoMap[brand].desktop]};
        margin-bottom: ${$additionalMarginBottom
          ? theme.size[20]
          : theme.size["04"]};
      }
    `;
  }}
`;

export const ItemContainer = styled.div<{
  $itemGapSize: Required<ItemGapSize>;
}>`
  ${({ theme, $itemGapSize }) => {
    return css`
      display: flex;

      flex-direction: column;

      gap: ${theme.size[$itemGapSize.vertical.mobile]};
      ${up("md")} {
        gap: ${theme.size[$itemGapSize.vertical.desktop]};
      }

      ${Root}[data-orientation="horizontal"] & {
        flex-direction: row;
        gap: ${theme.size[$itemGapSize.horizontal.mobile]};
        ${up("md")} {
          gap: ${theme.size[$itemGapSize.horizontal.desktop]};
        }
      }
    `;
  }}
`;

export const Description = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;

    return css`
      margin-bottom: ${theme.size["20"]};
      font: ${theme.typography[descriptionTypoMap[brand].mobile]};
      ${textColorMixin(theme)};
      ${up("md")} {
        font: ${theme.typography[descriptionTypoMap[brand].desktop]};
      }
    `;
  }}
`;
export const Details = styled.div``;

export const ErrorBlock = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.size["16"]};
      ${up("md")} {
        margin-top: ${theme.size["20"]};
      }
    `;
  }}
`;

export const Indicator = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    const background = theme.contextSpecific.backgroundColor;
    const backgroundColor =
      theme.color[backgroundColorMap[background].backgroundColor];
    const accentColor = theme.color[backgroundColorMap[background].color];
    const mobileIndicatorTopSwift = indicatorMap[brand].mobile.topSwift;
    const desktopIndicatorTopSwift = indicatorMap[brand].desktop.topSwift;

    return css`
      display: flex;
      position: relative;
      border-radius: 50%;

      cursor: pointer;
      box-sizing: border-box;
      height: ${theme.size[24]};
      width: ${theme.size[24]};
      min-width: ${theme.size[24]};
      border-radius: 50%;
      border: 2px solid ${accentColor};
      background-color: ${backgroundColor};
      align-items: center;
      justify-content: center;

      transform: translateY(${mobileIndicatorTopSwift});

      ${up("md")} {
        transform: translateY(${desktopIndicatorTopSwift});
      }
    `;
  }}
`;

export const Dot = styled.div`
  ${({ theme }) => {
    return css`
      display: block;
      position: absolute;
      width: calc(${theme.size[24]} / 2);
      height: calc(${theme.size[24]} / 2);
      border-radius: 50%;
      ${highContrast()} {
        width: calc(${theme.size[24]} / 6);
        height: calc(${theme.size[24]} / 6);
        box-sizing: border-box;
      }
    `;
  }}
`;

export const RadioItem = styled(Radio)`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;
    const background = theme.contextSpecific.backgroundColor;
    const backgroundColor =
      theme.color[backgroundColorMap[background].backgroundColor];
    const accentColor = theme.color[backgroundColorMap[background].color];
    const disabledColor = theme.color[backgroundColorMap[background].disabled];
    const errorColor = theme.color[backgroundColorMap[background].error];
    const hoverColor = backgroundColorMap[background].hover;
    const mobileIndicatorSpace = theme.space[indicatorMap[brand].mobile.space];
    const desktopIndicatorSpace =
      theme.space[indicatorMap[brand].desktop.space];

    return css`
      all: unset;
      display: flex;
      align-items: start;

      gap: ${mobileIndicatorSpace};
      ${up("md")} {
        gap: ${desktopIndicatorSpace};
      }
      flex-direction: row;
      cursor: pointer;

      &[data-selected] {
        ${Indicator} {
          ${highContrast()} {
            background-color: transparent;
            border-color: Highlight;
          }
        }
        ${Dot} {
          background-color: ${accentColor};
          ${highContrast()} {
            border: 6px solid Highlight;
          }
        }
      }
      &[data-focus-visible] ${Indicator} {
        ${theme.contextSpecific.focusStyles}
        ${highContrast()} {
          outline-color: Highlight;
        }
      }

      &[data-hovered]:not([data-selected]) {
        ${Indicator} {
          background-color: ${getMixedColor(theme, hoverColor)};
        }
      }
      ${Root}[data-invalid] & {
        ${Indicator} {
          border-color: ${errorColor};
          ${highContrast()} {
            background-color: transparent;
            border-color: LinkText;
          }
        }

        &[data-selected] ${Dot} {
          background-color: ${errorColor};
          ${highContrast()} {
            background-color: transparent;
            border-color: LinkText;
          }
        }
      }

      ${Root}[data-invalid] &[data-hovered]:not([data-selected]) {
        ${Indicator} {
          background-color: ${mix(0.85, backgroundColor, errorColor)};
        }
      }

      &[data-disabled] {
        cursor: not-allowed;
        color: ${disabledColor};
        ${Indicator} {
          border: 2px solid ${disabledColor};
          cursor: not-allowed;
          ${highContrast()} {
            background-color: transparent;
            border-color: GrayText;
          }
        }
        &[data-selected] ${Dot} {
          background-color: ${disabledColor};
          ${highContrast()} {
            background-color: transparent;
            border-color: GrayText;
          }
        }
      }
    `;
  }}
`;

export const RadioItemText = styled.div`
  ${({ theme }) => {
    const brand = theme.contextSpecific.brand;

    return css`
      ${textColorMixin(theme)};
      width: 100%;

      font: ${theme.typography[radioItemTypoMap[brand].mobile]};

      ${up("md")} {
        font: ${theme.typography[radioItemTypoMap[brand].desktop]};
      }
    `;
  }}
`;
