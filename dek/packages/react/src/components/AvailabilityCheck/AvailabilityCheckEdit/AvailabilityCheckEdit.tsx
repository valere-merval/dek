"use client";

import React, { ElementRef, forwardRef } from "react";
import {
  AddressProps as DescriptionProps,
  AvailabilityCheckEditProps,
} from "./AvailabilityCheckEdit.types";
import * as Styled from "./AvailabilityCheckEdit.styles";
import { ThemeProvider } from "../../../theme/ThemeProvider";

export const AvailabilityCheckEdit = forwardRef<
  ElementRef<typeof Styled.Root>,
  AvailabilityCheckEditProps
>(
  (
    {
      status,
      headline,
      description,
      buttonLabel: buttonLabelFromProps,
      onButtonClick,
      headlineLevel = "h6",
      ...rest
    }: AvailabilityCheckEditProps,
    ref,
  ) => {
    const buttonLabel =
      buttonLabelFromProps ||
      (status !== "error" ? "Adresse ändern" : "Erneut versuchen");

    return (
      <ThemeProvider backgroundColor="darkGrey">
        <Styled.Root ref={ref} {...rest}>
          <Styled.Content>
            {headline && (
              <Styled.HeadlineTruncated
                size="small"
                variant="bold"
                forwardedAs={headlineLevel}
              >
                {headline}
              </Styled.HeadlineTruncated>
            )}
            {description && (
              <Description status={status} description={description} />
            )}
          </Styled.Content>
          <Styled.Button onClick={onButtonClick}>{buttonLabel}</Styled.Button>
        </Styled.Root>
      </ThemeProvider>
    );
  },
);

AvailabilityCheckEdit.displayName = "AvailabilityCheckEdit";

const Description = ({ status, description }: DescriptionProps) => {
  return (
    <Styled.Description>
      {status === "available" ? <Styled.SuccessIcon /> : <Styled.ErrorIcon />}
      <Styled.TextDescription forwardedAs="span" size="large" variant="light">
        {description}
      </Styled.TextDescription>
    </Styled.Description>
  );
};
