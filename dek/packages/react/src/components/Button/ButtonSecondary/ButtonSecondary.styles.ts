import styled, { css, DefaultTheme } from "styled-components";
import {
  ButtonSecondaryColor,
  ButtonSecondaryProps,
} from "./ButtonSecondary.types";
import {
  backgroundMap,
  colorMap,
  iconSizeMap,
  labelFontSizeMap,
} from "./mappings";
import { trimFont } from "../../../theme/mappings/typography";
import { highContrast } from "../../../utils/accessibility";
import { focusRingColorMap } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { ButtonBase } from "../ButtonBase/ButtonBase";

const getColor = (
  theme: DefaultTheme,
  color?: ButtonSecondaryColor,
): ColorVariant => {
  const brand = theme.contextSpecific.brand;
  if (color && (brand === "congstarWeb" || brand === "congstarApp")) {
    return colorMap[color];
  }

  return backgroundMap[theme.contextSpecific.backgroundColor];
};

export const Button = styled(ButtonBase)<ButtonSecondaryProps>(
  ({ theme, color }) => css`
    all: unset;
    display: inline-block;
    color: ${theme.color[getColor(theme, color)]};
    cursor: pointer;
    position: relative;
    width: fit-content;

    &:focus-visible::after {
      position: absolute;
      content: "";

      // 'inset' is not supported in older browsers, so we use top, right, bottom and left instead
      top: -${theme.space["08"]};
      right: -${theme.space["08"]};
      bottom: -${theme.space["08"]};
      left: -${theme.space["08"]};

      border: 2px solid
        ${theme.color[focusRingColorMap[theme.contextSpecific.backgroundColor]]};
      border-radius: ${theme.borderRadius["08"]};
      ${highContrast()} {
        border: 2px solid Highlight;
      }
    }

    &:hover {
      opacity: ${theme.opacity.Degree75};
    }
  `,
);

export const IconTextWrapper = styled.div(
  ({ theme }) => css`
    all: unset;

    display: flex;
    gap: ${theme.space["08"]};
    align-items: center;
    white-space: nowrap;

    & svg {
      ${highContrast()} {
        color: LinkText;
      }
      min-width: ${theme.size[iconSizeMap[theme.contextSpecific.brand]]};
      min-height: ${theme.size[iconSizeMap[theme.contextSpecific.brand]]};
      max-width: ${theme.size[iconSizeMap[theme.contextSpecific.brand]]};
      max-height: ${theme.size[iconSizeMap[theme.contextSpecific.brand]]};
      vertical-align: middle;
    }
  `,
);

export const ButtonSecondaryLabel = styled.span<{
  $shouldTrimFont?: boolean;
}>(
  ({ theme, $shouldTrimFont }) => css`
    // increase specifity of button label color
    && {
      color: inherit;
      ${highContrast()} {
        color: LinkText;
      }
      font: ${theme.typography[labelFontSizeMap[theme.contextSpecific.brand]]};
      ${$shouldTrimFont &&
      trimFont(labelFontSizeMap[theme.contextSpecific.brand])};
    }
  `,
);
