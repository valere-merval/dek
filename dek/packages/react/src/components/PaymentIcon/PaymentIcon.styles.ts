import styled, { css } from "styled-components";
import { ConvertToTransient } from "../propTypes";
import { PaymentIconSize } from "./PaymentIcon.types";

interface PaymentIconWrapperProps {
  size: PaymentIconSize;
  variant: "dark" | "light";
}

export const Root = styled.div<
  ConvertToTransient<PaymentIconWrapperProps, "size" | "variant">
>(
  ({ theme, $size, $variant }) => css`
    border-radius: ${theme.borderRadius["04"]};
    box-sizing: border-box;
    border: 1px solid
      ${$variant === "light"
        ? theme.color.NeutralSecondary60
        : theme.color.NeutralSecondary40};
    background-color: ${$variant === "light"
      ? theme.color.NeutralPrimaryWhite
      : theme.color.NeutralPrimaryBlack};
    height: ${theme.space["32"]};
    width: ${$size !== "small" ? theme.space["72"] : theme.space["48"]};
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      object-fit: contain;
    }
  `,
);
