import styled, { css, DefaultTheme } from "styled-components";
import { Button as AriaButton } from "react-aria-components";
import { Slot as RadixSlot } from "@radix-ui/react-slot";
import { ButtonPrimaryCircleProps } from "./ButtonPrimaryCircle.types";
import { variantMixin } from "../variantMixin.styles";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import {
  highContrast,
  highContrastBorder,
} from "../../../../utils/accessibility";

type Props = Omit<ButtonPrimaryCircleProps, "variant">;

const getCircleButtonStyles = ({
  theme,
  $variant = "primary",
  disabled = false,
}: Props & {
  theme: DefaultTheme;
}) => css`
  all: unset;

  display: flex;
  box-sizing: border-box;
  cursor: ${disabled ? "not-allowed" : "pointer"};
  border-radius: ${theme.borderRadius["24"]};
  align-items: center;
  justify-content: center;

  &:focus-visible {
    ${theme.contextSpecific.focusStyles}
  }
  width: ${theme.space["48"]};
  height: ${theme.space["48"]};
  min-width: ${theme.space["48"]};
  border-radius: ${theme.borderRadius["24"]};

  ${highContrastBorder()}

  ${highContrast()} {
    background-color: transparent;
  }

  & svg {
    width: ${theme.space["24"]};
    height: ${theme.space["24"]};
  }
  ${up("md")} {
    width: ${theme.space["56"]};
    height: ${theme.space["56"]};
    border-radius: ${theme.borderRadius["48"]};
    & svg {
      width: ${theme.space["32"]};
      height: ${theme.space["32"]};
    }
  }

  ${variantMixin($variant, disabled, theme, false)}
`;

export const Button = styled(AriaButton)<Props>(getCircleButtonStyles);
export const Slot = styled(RadixSlot)<Props>(getCircleButtonStyles);
