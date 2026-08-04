import styled, { css } from "styled-components";
import { Label as AriaLabel } from "react-aria-components";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { typoMap } from "./mappings";
import { typoMap as descriptionTypoMap } from "../shared/mappings";
import { Text } from "../../../Typography/Text";
import { Checkbox } from "../Checkbox";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";
import { ItemGapSize } from "../../shared/ItemGapSize";
import {
  CheckboxGroup,
  FieldError as AriaFieldError,
} from "react-aria-components";

export const Root = styled(CheckboxGroup)(() => {
  return css`
    all: unset;
    display: flex;
    flex-direction: column;
  `;
});

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

export const Description = styled(Text)(({ theme }) => {
  const brand = theme.contextSpecific.brand;

  return css`
    margin-bottom: ${theme.size["20"]};
    ${textColorMixin(theme)};
    font: ${theme.typography[descriptionTypoMap[brand].mobile]};
    ${up("md")} {
      font: ${theme.typography[descriptionTypoMap[brand].desktop]};
    }
  `;
});

export const ItemContainer = styled.div<{
  $itemGapSize: Required<ItemGapSize>;
}>`
  ${({ theme, $itemGapSize }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      gap: ${theme.space[$itemGapSize.vertical.mobile]};
      ${up("md")} {
        gap: ${theme.space[$itemGapSize.vertical.desktop]};
      }
    `;
  }}
`;

export const Item = styled(Checkbox.Root)``;

export const FieldError = styled(AriaFieldError)`
  ${({ theme }) => {
    return css`
      display: block;
      margin-top: ${theme.size["16"]};
      ${up("md")} {
        margin-top: ${theme.size["20"]};
      }
    `;
  }}
`;
