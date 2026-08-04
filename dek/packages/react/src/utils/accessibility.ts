import { css } from "styled-components";

export const highContrast = () => {
  return `@media (forced-colors: active)`;
};

export const highContrastBorder = () => css`
  ${highContrast()} {
    border: 1px solid transparent;
  }
`;

export const reducedMotion = () => {
  return `@media (prefers-reduced-motion)`;
};
