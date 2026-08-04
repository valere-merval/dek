import styled, { css } from "styled-components";
import { ColorVariant } from "../../../theme/mappings/color";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { reducedMotion } from "../../../utils/accessibility";
import { ConvertToTransient } from "../../propTypes";
import { LoaderSpinnerProps } from "./LoaderSpinner.types";
import { sizeMapping } from "./mappings";

export const SpinnerViewbox = styled.svg<
  ConvertToTransient<LoaderSpinnerProps, "size">
>(({ theme, $size }) => {
  const mediumSize = theme.size[sizeMapping[$size || "medium"]];
  const largeSize = theme.size[sizeMapping[$size || "large"]];
  return css`
    all: unset;

    transform: rotate(35deg);

    width: ${mediumSize};
    height: ${mediumSize};

    min-width: ${mediumSize};
    min-height: ${mediumSize};

    ${up("md")} {
      width: ${largeSize};
      height: ${largeSize};

      min-width: ${largeSize};
      min-height: ${largeSize};
    }

    @media (prefers-reduced-motion) {
      display: none;
    }
  `;
});

export const FallbackWrapper = styled.div(
  () => css`
    display: none;
    @media (prefers-reduced-motion) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  `,
);

export const Spinner = styled.circle<{
  $stroke?: ColorVariant;
}>(({ theme, $stroke }) => {
  const internalCircumference = 2 * Math.PI * 14;

  const wedgeAngle = 70; // inferred from congstar brand logo
  const offsetFilled = (internalCircumference * wedgeAngle) / 360;
  const offsetEmpty = internalCircumference;

  return css`
    fill: none;

    stroke: ${$stroke ? theme.color[$stroke] : "currentColor"};
    stroke-width: ${theme.size["04"]};
    stroke-dasharray: ${internalCircumference};

    transform-origin: 50% 50%;
    animation: 1.8s ease-in-out infinite forwards spinner-animation;

    @keyframes spinner-animation {
      0% {
        stroke-dashoffset: ${offsetEmpty};
      }
      50% {
        stroke-dashoffset: ${offsetFilled};
        transform: rotate(0deg);
      }

      100% {
        stroke-dashoffset: ${offsetEmpty};
        transform: rotate(${360 - wedgeAngle}deg);
      }
    }

    ${reducedMotion} {
      display: none;
    }
  `;
});
