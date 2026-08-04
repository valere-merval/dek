"use client";

import React, { ElementRef, forwardRef, MouseEventHandler } from "react";
import { ButtonAsteriskProps } from "./ButtonAsterisk.types";
import * as Styled from "./ButtonAsterisk.styles";
import { FootnoteCircleFill } from "@fair/icons";

/**
 * @deprecated Please use ButtonMicroIcon instead
 * */
export const ButtonAsterisk = forwardRef<
  ElementRef<typeof Styled.Button>,
  ButtonAsteriskProps
>(({ onClick, ...rest }: ButtonAsteriskProps, ref) => {
  const handleClick: MouseEventHandler<ElementRef<"button">> = (event) => {
    event.stopPropagation();
    onClick?.(event);
  };

  return (
    <Styled.Button
      onClick={handleClick}
      aria-label="Mehr Details"
      ref={ref}
      {...rest}
    >
      <FootnoteCircleFill />
    </Styled.Button>
  );
});
ButtonAsterisk.displayName = "ButtonAsterisk";
