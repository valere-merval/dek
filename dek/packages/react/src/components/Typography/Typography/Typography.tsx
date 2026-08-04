"use client";

import * as Styled from "./Typography.styles";
import { TypographyProps } from "./Typography.types";
import { ElementRef, forwardRef } from "react";

/**
 * If you need autoscaling between Desktop and Mobile, please use dedicated Typography Components e.g. Headline, Label...
 */
export const Typography = forwardRef<
  ElementRef<typeof Styled.Typography>,
  TypographyProps
>(({ color, variant, trimFont, asChild, ...rest }: TypographyProps, ref) => {
  if (asChild) {
    return (
      <Styled.Slot
        $color={color}
        $variant={variant}
        $trimFont={trimFont}
        ref={ref}
        {...rest}
      />
    );
  }
  return (
    <Styled.Typography
      $color={color}
      $variant={variant}
      $trimFont={trimFont}
      ref={ref}
      {...rest}
    />
  );
});
Typography.displayName = "Typography";
