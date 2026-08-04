import React, { forwardRef, ElementRef } from "react";
import { CardProps } from "./Card.types";
import * as Styled from "./Card.styles";

export const Root = forwardRef<ElementRef<typeof Styled.Root>, CardProps>(
  (props: CardProps, ref) => {
    const { children, size, ...rest } = props;
    return (
      <Styled.Root $size={size} ref={ref} {...rest}>
        {children}
      </Styled.Root>
    );
  },
);
Root.displayName = "Card.Root";

export const Card = { Root };
