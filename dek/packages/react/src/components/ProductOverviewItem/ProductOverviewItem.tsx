"use client";

import React, { forwardRef, ElementRef } from "react";
import {
  ProductOverviewItemProductSpecsProps,
  ProductOverviewItemProps,
  SpecsColor,
} from "./ProductOverviewItem.types";
import * as Styled from "./ProductOverviewItem.styles";
import { Headline } from "../Typography/Headline";
import { Text } from "../Typography/Text";

const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  ProductOverviewItemProps
>(({ children, title, image, ...rest }: ProductOverviewItemProps, ref) => {
  return (
    <Styled.Root ref={ref} {...rest}>
      <Styled.ImageWrapper>{image}</Styled.ImageWrapper>
      <div>
        <Headline size="small" variant="bold" as="h3">
          {title}
        </Headline>
        {children}
      </div>
    </Styled.Root>
  );
});
Root.displayName = "ProductOverviewItem.Root";

const generateProductSpecsString = (color?: SpecsColor, memory?: string) => {
  const colorString = color ? `${color.name}` : undefined;

  return memory && color
    ? `${color.name} | ${memory}`
    : colorString || memory || undefined;
};

const ProductSpecs = forwardRef<
  ElementRef<typeof Styled.ProductSpecsContainer>,
  ProductOverviewItemProductSpecsProps
>(
  (
    {
      productColor,
      productMemory,
      ...rest
    }: ProductOverviewItemProductSpecsProps,
    ref,
  ) => {
    const specString = generateProductSpecsString(productColor, productMemory);
    return (
      <Styled.ProductSpecsContainer ref={ref} {...rest}>
        {productColor && (
          <Styled.StyledColorVariants
            colors={[{ hex: productColor.hex, name: productColor.name }]}
            aria-hidden
          />
        )}
        {specString && (
          <Text variant="light" size="large" as="span">
            {specString}
          </Text>
        )}
      </Styled.ProductSpecsContainer>
    );
  },
);
ProductSpecs.displayName = "ProductOverviewItem.ProductSpecs";

export const ProductOverviewItem = {
  Root,
  ProductSpecs,
};
