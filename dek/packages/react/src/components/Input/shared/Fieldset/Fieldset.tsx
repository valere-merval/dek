"use client";

import React, { forwardRef, ElementRef } from "react";
import { FieldsetProps } from "./Fieldset.types";
import * as Styled from "./Fieldset.styles";

export const Fieldset = forwardRef<
  ElementRef<typeof Styled.Root>,
  FieldsetProps
>((props: FieldsetProps, ref) => {
  return (
    <Styled.Root ref={ref} {...props}>
      {props.children}
    </Styled.Root>
  );
});
Fieldset.displayName = "Fieldset";
