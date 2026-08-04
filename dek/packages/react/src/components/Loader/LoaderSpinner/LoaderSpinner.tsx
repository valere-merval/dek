import React, { ElementRef, forwardRef } from "react";
import { LoaderSpinnerProps } from "./LoaderSpinner.types";
import * as Styled from "./LoaderSpinner.styles";
import { Text } from "../../Typography/Text";

export const LoaderSpinner = forwardRef<
  ElementRef<typeof Styled.SpinnerViewbox>,
  LoaderSpinnerProps
>(({ fallbackText = "Lädt...", size, ...rest }: LoaderSpinnerProps, ref) => {
  return (
    <>
      <Styled.SpinnerViewbox
        data-testid="loading-spinner"
        ref={ref}
        viewBox={`0 0 32 32`}
        xmlns="http://www.w3.org/2000/svg"
        $size={size}
        {...rest}
      >
        <Styled.Spinner cx={16} cy={16} r={14} />
      </Styled.SpinnerViewbox>
      <Styled.FallbackWrapper>
        <Text size="large" variant="bold" color="inherit">
          {fallbackText}
        </Text>
      </Styled.FallbackWrapper>
    </>
  );
});
LoaderSpinner.displayName = "LoaderSpinnerCSS";
