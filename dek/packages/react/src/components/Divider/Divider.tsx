"use client";

import { DividerProps } from "./Divider.types";
import * as Styled from "./Divider.styles";
import { Ref, ComponentPropsWithoutRef, forwardRef } from "react";
import { Text } from "../Typography/Text";

export const Divider = forwardRef<HTMLHRElement | HTMLDivElement, DividerProps>(
  ({ color, noGap, orientation = "horizontal", text, ...rest }, ref) => {
    const hasText = typeof text === "string" && text.trim().length > 0;

    if (hasText && orientation === "horizontal") {
      return (
        <Styled.DividerWithTextContainer
          ref={ref as Ref<HTMLDivElement>}
          $noGap={noGap}
          {...(rest as ComponentPropsWithoutRef<"div">)}
        >
          <Styled.DividerLine aria-hidden $color={color} />
          <Text size="large" variant="bold" as="span" trimmed>
            {text}
          </Text>
          <Styled.DividerLine aria-hidden $color={color} />
        </Styled.DividerWithTextContainer>
      );
    }

    return (
      <Styled.Divider
        ref={ref as Ref<HTMLHRElement>}
        aria-hidden
        $orientation={orientation}
        $color={color}
        $noGap={noGap}
        {...rest}
      />
    );
  },
);
Divider.displayName = "Divider";
