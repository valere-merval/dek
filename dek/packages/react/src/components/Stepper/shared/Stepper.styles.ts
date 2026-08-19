import styled, { css, DefaultTheme } from "styled-components";
import {
  StepperContentProps,
  StepperIndicatorProps,
  StepperItemState,
  StepperRootProps,
  StepperSize,
} from "./Stepper.types";
import {
  accentColorMap,
  itemFontMap,
  itemSizeMap,
  stepTextColorMap,
} from "./mappings";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { ConvertToTransient } from "../../propTypes";
import { backgroundColorMapping } from "../../../theme/theme";

const COUNTER_NAME = "stepper";

export const StepperList = styled.ul<StepperRootProps>(
  () => css`
    all: unset;
    position: relative;
    display: flex;
    list-style: none;
    // resets the counter for every list
    counter-reset: ${COUNTER_NAME};
  `,
);

export const StepperIndicator = styled.div<
  ConvertToTransient<Omit<StepperIndicatorProps, "step">, "state" | "checkout"> & {
    $size?: StepperSize;
  }
>(({ theme, $state, $size, $checkout }) => {
  const indicatorDimensionsMedium =
    theme.size[itemSizeMap[$size || "medium"].indicatorDimension];
  const indicatorDimensionsLarge =
    theme.size[itemSizeMap[$size || "large"].indicatorDimension];
  const iconDimensionsMedium =
    theme.size[itemSizeMap[$size || "medium"].iconDimension];
  const iconDimensionsLarge =
    theme.size[itemSizeMap[$size || "large"].iconDimension];
  const accentColor = theme.color[accentColorMap[theme.contextSpecific.brand]];
  const fontMapForBrand = itemFontMap[theme.contextSpecific.brand];
  const stepFontVariant = fontMapForBrand[$size || "medium"];
  const stepFontVariantLarge = fontMapForBrand[$size || "large"];
  const stepCheckoutFontVariant = fontMapForBrand["large"];
  const stepCheckoutFontVariantLarge = fontMapForBrand["extraLarge"];

  return css`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font: ${theme.typography[
      $checkout ? stepCheckoutFontVariant : stepFontVariant
    ]};

    border: 1px solid ${accentColor};
    border-radius: 50%;

    color: ${accentColor};
    background-color: ${theme.color[
      backgroundColorMapping[theme.contextSpecific.backgroundColor]
    ]};

    height: ${indicatorDimensionsMedium};
    min-width: ${indicatorDimensionsMedium};
    max-width: ${indicatorDimensionsMedium};

    & svg {
      width: ${iconDimensionsMedium};
      height: ${iconDimensionsMedium};
      vertical-align: middle;
    }

    &[data-step]::before {
      content: attr(data-step);
    }

    ${up("md")} {
      font: ${theme.typography[
        $checkout ? stepCheckoutFontVariantLarge : stepFontVariantLarge
      ]};

      height: ${indicatorDimensionsLarge};
      min-width: ${indicatorDimensionsLarge};
      max-width: ${indicatorDimensionsLarge};

      & svg {
        width: ${iconDimensionsLarge};
        height: ${iconDimensionsLarge};
        vertical-align: middle;
      }
    }

    ${generateStepStyle(theme, $state)}
  `;
});

export const StepperContent = styled.div<StepperContentProps>(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: column;
    gap: ${theme.space["04"]};
    ${up("md")} {
      gap: ${theme.space["08"]};
    }
  `,
);

export const generateStepStyle = (
  theme: DefaultTheme,
  state: StepperItemState,
) => {
  const accentColor = theme.color[accentColorMap[theme.contextSpecific.brand]];
  const textColor = theme.color[stepTextColorMap[theme.contextSpecific.brand]];
  return css`
    ${() => {
      switch (state) {
        case "current":
          return css`
            background-color: ${accentColor};
            color: ${textColor};
          `;
        case "completed":
          return css`
            background-color: ${theme.color[
              backgroundColorMapping[theme.contextSpecific.backgroundColor]
            ]};
            color: ${accentColor};
          `;
        case "error":
          return css`
            background-color: ${theme.color.StatusOnDarkError};
            border-color: ${theme.color.StatusOnDarkError};
            color: ${textColor};
          `;
        case "pending":
          return css`
            background-color: ${theme.color.StatusOnDarkWarning};
            border-color: ${theme.color.StatusOnDarkWarning};
            color: ${textColor};
          `;
      }
    }}
  `;
};

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;
