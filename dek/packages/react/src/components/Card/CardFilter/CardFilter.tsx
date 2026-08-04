"use client";

import React, { ElementRef, forwardRef } from "react";
import { CardFilterProps } from "./CardFilter.types";
import * as Styled from "./CardFilter.styles";
import { Headline } from "../../Typography/Headline";
import { Card } from "../shared";
import { Switch } from "../../Input/Switch";
import { CardFilled } from "../CardFilled";
import { Text } from "../../Typography/Text";
import { IconTile } from "../../IconTile";

export const CardFilter = forwardRef<
  ElementRef<typeof Card.Root>,
  CardFilterProps
>(
  (
    {
      id,
      name,
      title,
      description,
      headlineLevel = "h3",
      icon,
      moreDetails,
      switchDescription,
      ...rest
    }: CardFilterProps,
    ref,
  ) => {
    return (
      <CardFilled.Root size="medium" ref={ref} backgroundColor="darkGrey">
        <Headline size="medium" variant="bold" as={headlineLevel}>
          {title}
        </Headline>
        <Styled.TextWrapper>
          <Text size="large" variant="light" as="p">
            {description}
          </Text>
          {icon && (
            <IconTile
              size={{ minAvailableSpace: "small", maxAvailableSpace: "medium" }}
              icon={icon}
              variant="outlined"
              color="white"
            />
          )}
        </Styled.TextWrapper>
        {moreDetails && (
          <Styled.DetailsWrapper>{moreDetails}</Styled.DetailsWrapper>
        )}
        <Switch.RootWrapper name={name}>
          <Styled.ToggleWrapper>
            <Switch.Root id={id} name={name} {...rest} />
            <Switch.Label htmlFor={id} variant="BodyBold14">
              {switchDescription}
            </Switch.Label>
          </Styled.ToggleWrapper>
        </Switch.RootWrapper>
      </CardFilled.Root>
    );
  },
);
CardFilter.displayName = "CardFilter";
