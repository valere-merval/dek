"use client";

import { ElementRef, forwardRef, Fragment } from "react";
import { ColorVariantsProps } from "./ColorVariants.types";
import * as Styled from "./ColorVariants.styles";
import { VisuallyHidden as ScreenReaderOnly } from "react-aria";

const COLOR_MAX_LENGTH = 4;

export const ColorVariants = forwardRef<
  ElementRef<typeof Styled.Root>,
  ColorVariantsProps
>(({ colors, ...rest }: ColorVariantsProps, ref) => {
  const additionalColors = colors.length - COLOR_MAX_LENGTH;

  return (
    <Styled.Root ref={ref} {...rest}>
      <Styled.ColorWrapper>
        {colors.map(
          (color, index) =>
            index < COLOR_MAX_LENGTH && (
              <Fragment key={color.name}>
                <Styled.Color
                  color={color.hex}
                  aria-label={color.name}
                  role="img"
                />
                <Styled.highContrastWrapper
                  $hasAdditionalColors={colors.length > COLOR_MAX_LENGTH}
                >
                  {color.name}
                </Styled.highContrastWrapper>
              </Fragment>
            ),
        )}
        {colors.length > COLOR_MAX_LENGTH && (
          <>
            <Styled.Counter variant="BodyLight14" aria-hidden>
              +{additionalColors}
            </Styled.Counter>
            <ScreenReaderOnly>
              {additionalColors === 1
                ? "eine weitere Farbe"
                : additionalColors + " weitere Farben"}
            </ScreenReaderOnly>
          </>
        )}
      </Styled.ColorWrapper>
    </Styled.Root>
  );
});
ColorVariants.displayName = "ColorVariants";
