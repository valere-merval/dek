"use client";

import { forwardRef, ElementRef } from "react";
import { CardServiceProps } from "./CardService.types";
import * as Styled from "./CardService.styles";
import { CardFilled } from "../CardFilled";
import { Text } from "../../Typography/Text";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { PhoneFill } from "@fair/icons";

const serviceHotline = "0221 79 700 710";

export const CardService = forwardRef<
  ElementRef<typeof CardFilled.Root>,
  CardServiceProps
>(({ headlineLevel, ...rest }: CardServiceProps, ref) => {
  return (
    <CardFilled.Root
      {...rest}
      backgroundColor="darkGrey"
      ref={ref}
      size="small"
    >
      <CardFilled.Header forwardedAs={headlineLevel}>
        Service Hotline
      </CardFilled.Header>
      <Styled.Content>
        <Text
          variant="light"
          size="medium"
          aria-label="Montag bis Samstag von 8 bis 22 Uhr. Sonn- und feiertags von 9 bis 18 Uhr."
        >
          Montag - Samstag von 8 bis 22 Uhr
          <br />
          Sonn- und feiertags von 9 bis 18 Uhr
        </Text>
        <ButtonPrimary
          asChild
          size="medium"
          variant="outlined"
          startIcon={<PhoneFill aria-hidden />}
        >
          <a
            aria-label={`Service Hotline Telefonnummer: ${serviceHotline}`}
            href={`tel:${serviceHotline}`}
          >
            {serviceHotline}
          </a>
        </ButtonPrimary>
      </Styled.Content>
    </CardFilled.Root>
  );
});
CardService.displayName = "CardService";
