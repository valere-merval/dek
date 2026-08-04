"use client";

import React, { forwardRef, ElementRef } from "react";
import { LoaderSkeletonProps } from "./LoaderSkeleton.types";
import * as Styled from "./LoaderSkeleton.styles";

const SkeletonBoxes = () => {
  return (
    <Styled.SkeletonBoxWrapper>
      <Styled.SkeletonRotate>
        <Styled.SkeletonBox1></Styled.SkeletonBox1>
        <Styled.SkeletonBox2></Styled.SkeletonBox2>
        <Styled.SkeletonBox3></Styled.SkeletonBox3>
      </Styled.SkeletonRotate>
    </Styled.SkeletonBoxWrapper>
  );
};

export const LoaderSkeleton = forwardRef<
  ElementRef<typeof Styled.Root>,
  LoaderSkeletonProps
>(({ height = "100%", width = "100%", ...rest }: LoaderSkeletonProps, ref) => {
  return (
    <Styled.SkeletonContainer $height={height} $width={width}>
      <Styled.Root ref={ref} {...rest}>
        <SkeletonBoxes />
      </Styled.Root>
    </Styled.SkeletonContainer>
  );
});
LoaderSkeleton.displayName = "Skeleton";
