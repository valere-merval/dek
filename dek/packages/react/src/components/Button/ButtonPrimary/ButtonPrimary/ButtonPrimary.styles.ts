import styled, { css } from "styled-components";

import {
  ButtonPrimaryFullWidth,
  ButtonPrimaryProps,
  IconProps,
} from "./ButtonPrimary.types";
import { variantMixin } from "../variantMixin.styles";
import { ConvertToTransient } from "../../../propTypes";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { LoaderSpinner } from "../../../Loader/LoaderSpinner";
import { SpinnerViewbox } from "../../../Loader/LoaderSpinner/LoaderSpinner.styles";
import {
  ButtonPrimaryTypographyMap,
  calculateBorderRadius,
  heightMapping,
} from "../mappings";
import {
  highContrast,
  highContrastBorder,
} from "../../../../utils/accessibility";
import { trimFont } from "../../../../theme/mappings/typography";
import { ButtonBase } from "../../ButtonBase/ButtonBase";

type Props = ConvertToTransient<
  ButtonPrimaryProps,
  "fullWidth" | "variant" | "isLoading" | "startIcon" | "endIcon"
>;

const getButtonWidth = (
  variant: "mobile" | "desktop",
  $fullWidth?: ButtonPrimaryFullWidth,
) => {
  if (!$fullWidth) return "fit-content";

  const fromBoolean = (value: boolean) => (value ? "100%" : "fit-content");

  if (typeof $fullWidth === "boolean") return fromBoolean($fullWidth);
  if (variant === "mobile") return fromBoolean($fullWidth.mobile);
  return fromBoolean($fullWidth.desktop);
};

export const Button = styled(ButtonBase)<Props>(
  ({
    theme,
    $fullWidth,
    $variant = "primary",
    size = "medium",
    $isLoading = false,
    $startIcon,
    $endIcon,
    disabled = false,
  }) => css`
    all: unset;

    width: ${getButtonWidth("mobile", $fullWidth)};
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    cursor: ${disabled || $isLoading ? "not-allowed" : "pointer"};
    height: ${theme.space[heightMapping.medium]};
    ${calculateBorderRadius(theme, "medium")};

    ${highContrastBorder()}

    ${highContrast()} {
      background-color: transparent;
    }

    &:focus-visible {
      ${theme.contextSpecific.focusStyles}
    }

    ${up("md")} {
      width: ${getButtonWidth("desktop", $fullWidth)};
    }

    ${() => {
      switch (size) {
        case "medium":
          return css`
            padding-top: ${theme.space["12"]};
            padding-bottom: ${theme.space["12"]};
            padding-left: ${$startIcon ? theme.space["20"] : theme.space["32"]};
            padding-right: ${$endIcon ? theme.space["20"] : theme.space["32"]};

            ${up("md")} {
              ${$isLoading &&
              css`
                // resize SpinnerViewbox to fit the ButtonPrimary on medium size
                ${SpinnerViewbox} {
                  width: ${theme.size["24"]};
                  height: ${theme.size["24"]};

                  min-width: ${theme.size["24"]};
                  min-height: ${theme.size["24"]};
                }
              `}
            }
          `;
        case "large":
          return css`
            padding-top: ${theme.space["12"]};
            padding-bottom: ${theme.space["12"]};
            padding-left: ${$startIcon ? theme.space["24"] : theme.space["40"]};
            padding-right: ${$endIcon ? theme.space["24"] : theme.space["40"]};

            ${up("md")} {
              height: ${theme.space[heightMapping.large]};
              ${calculateBorderRadius(theme, "large")};
            }
          `;
      }
    }}
    ${variantMixin($variant, disabled, theme, $isLoading)};
  `,
);

export const IconTextWrapper = styled.div<IconProps>(
  ({ theme, $startIcon, $endIcon, $isLoading, $size }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.space["08"]};
    opacity: ${$isLoading ? 0 : 1};

    ${() => {
      if ($startIcon || $endIcon) {
        return css`
          justify-content: space-between;
        `;
      }
    }}

    & svg {
      width: ${theme.space["24"]};
      height: ${theme.space["24"]};
      vertical-align: middle;
    }

    ${() => {
      switch ($size) {
        case "large":
          return css`
            & svg {
              width: ${theme.space["32"]};
              height: ${theme.space["32"]};
            }
          `;
      }
    }}
  `,
);

export const CenteredLoaderSpinner = styled(LoaderSpinner)(
  () => css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
);

export const ButtonLabel = styled.span(
  ({ theme }) => css`
    all: unset;
    display: revert;
    color: inherit;

    font: ${theme.typography[
      ButtonPrimaryTypographyMap[theme.contextSpecific.brand]
    ]};
    ${trimFont(ButtonPrimaryTypographyMap[theme.contextSpecific.brand])}
  `,
);
