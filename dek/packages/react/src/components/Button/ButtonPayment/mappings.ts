import { SpaceVariant } from "../../../theme/mappings/space";
import { css, DefaultTheme } from "styled-components";
import { ButtonPaymentSize } from "./ButtonPayment.types";

export const heightMapping: Record<ButtonPaymentSize, SpaceVariant> = {
  medium: "48",
  large: "56",
};

export const widthMapping: Record<ButtonPaymentSize, string> = {
  medium: "260px",
  large: "320px",
};

export const calculateBorderRadius = (
  theme: DefaultTheme,
  size: ButtonPaymentSize,
) => {
  return css`
    border-radius: calc(${theme.space[heightMapping[size]]} / 2);
  `;
};
