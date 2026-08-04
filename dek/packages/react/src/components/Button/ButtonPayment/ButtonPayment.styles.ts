import styled, { css } from "styled-components";
import { ButtonBase } from "../ButtonBase/ButtonBase";
import { calculateBorderRadius, heightMapping, widthMapping } from "./mappings";
import { highContrast, highContrastBorder } from "../../../utils/accessibility";
import {
  ButtonPaymentFullWidth,
  ButtonPaymentProps,
  IconProps,
} from "./ButtonPayment.types";
import { ConvertToTransient } from "../../propTypes";
import { up } from "../../../theme/mappings/mediaBreakpoints";

type Props = ConvertToTransient<
  Omit<ButtonPaymentProps, "paymentMethod">,
  "fullWidth"
>;

const getButtonWidth = (
  variant: "mobile" | "desktop",
  $fullWidth?: ButtonPaymentFullWidth,
) => {
  const defaultWidth =
    variant === "mobile" ? widthMapping.medium : widthMapping.large;

  if ($fullWidth === undefined || $fullWidth === false) return defaultWidth;

  const isFullWidth =
    typeof $fullWidth === "boolean" ? $fullWidth : $fullWidth[variant];

  return isFullWidth ? "100%" : "fit-content";
};

export const Button = styled(ButtonBase)<Props>(
  ({ theme, $fullWidth, disabled, size }) => css`
    all: unset;
    display: inline-block;
    box-sizing: border-box;

    cursor: ${disabled ? "not-allowed" : "pointer"};
    background-color: ${theme.color.InteractiveWhite};
    justify-content: center;
    align-items: center;

    height: ${theme.space[heightMapping.medium]};
    width: ${getButtonWidth("mobile", $fullWidth)};
    max-width: 100%;
    ${up("md")} {
      width: ${getButtonWidth("desktop", $fullWidth)};
    }
    ${calculateBorderRadius(theme, "medium")};

    ${highContrastBorder()}

    ${highContrast()} {
      background-color: transparent;
    }

    &:focus-visible {
      ${theme.contextSpecific.focusStyles}
    }

    &:disabled {
      background-color: ${theme.color.NeutralSecondary40};
      cursor: not-allowed;
    }

    &:hover {
      opacity: ${!disabled && theme.opacity.Degree75};
    }

    ${() => {
      switch (size) {
        case "medium":
          return css`
            padding-top: ${theme.space["12"]};
            padding-bottom: ${theme.space["12"]};
            padding-left: ${theme.space["32"]};
            padding-right: ${theme.space["32"]};
          `;
        case "large":
          return css`
            padding-top: ${theme.space["12"]};
            padding-bottom: ${theme.space["12"]};
            padding-left: ${theme.space["40"]};
            padding-right: ${theme.space["40"]};

            ${up("md")} {
              height: ${theme.space[heightMapping.large]};
              ${calculateBorderRadius(theme, "large")};
            }
          `;
      }
    }}
  `,
);

export const IconTextWrapper = styled.div<
  ConvertToTransient<IconProps, "size">
>(
  ({ theme, $size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      height: ${theme.space["24"]};

      ${up("md")} {
        height: ${theme.space["32"]};
      }
    }

    ${() => {
      switch ($size) {
        case "medium":
          return css`
            & img {
              height: ${theme.space["24"]};
            }
          `;
        case "large":
          return css`
            & img {
              height: ${theme.space["24"]};

              ${up("md")} {
                height: ${theme.space["32"]};
              }
            }
          `;
      }
    }}
  `,
);
