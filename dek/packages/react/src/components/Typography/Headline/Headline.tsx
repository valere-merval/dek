"use client";

import { ElementRef, forwardRef } from "react";
import { HeadlineProps } from "./Headline.types";
import * as Styled from "./Headline.styles";

/**
 Note:
 The Headline requires either `forwardedAs` or `as`. If you want to wrap the component with `styled()` choose `forwardedAs`(not recommended)([Documentation](https://styled-components.com/docs/api#forwardedas-prop)).
 */
export const Headline = forwardRef<
  ElementRef<typeof Styled.Root>,
  HeadlineProps
>(
  (
    { children, size, variant, color, trimmed, ...rest }: HeadlineProps,
    ref,
  ) => {
    return (
      <Styled.Root
        size={size}
        $color={color}
        $variant={variant}
        $trimmed={trimmed}
        ref={ref}
        {...rest}
      >
        {children}
      </Styled.Root>
    );
  },
);
Headline.displayName = "Headline";
