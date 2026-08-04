"use client";

import { forwardRef, ElementRef, MouseEventHandler } from "react";
import { CardForwardingProps } from "./CardForwarding.types";
import * as Styled from "./CardForwarding.styles";
import { Text } from "../../Typography/Text";
import { Headline } from "../../Typography/Headline";
import { ChevronCircleRightFill } from "@fair/icons";
import { useObjectRef } from "react-aria";
import { Price } from "../../Price/Price";
import { useTheme } from "styled-components";

export const CardForwarding = forwardRef<
  ElementRef<typeof Styled.Button>,
  CardForwardingProps
>(
  (
    {
      title,
      headlineLevel = "h3",
      description,
      overwriteButton,
      price,
      promotionTop,
      headerImage,
      headerImageSize,
      "data-testid": dataTestid,
      ...rest
    }: CardForwardingProps,
    ref,
  ) => {
    const buttonRef = useObjectRef(ref);

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
      const target = event.target as HTMLElement;
      if (!target.closest("button, a")) {
        buttonRef.current?.click();
      }
    };

    const theme = useTheme();
    const size =
      theme.contextSpecific.brand !== "congstarWeb" ? "medium" : "small";

    return (
      <Styled.Root
        backgroundColor="darkGrey"
        size={size}
        onClick={handleClick}
        promotionTop={promotionTop}
        headerImage={headerImage}
        headerImageSize={headerImageSize}
        data-testid={dataTestid}
      >
        <Styled.ContentWrapper>
          <Styled.LeftColumn>
            <Styled.HeadlineDescriptionWrapper>
              <Headline size="small" variant="bold" as={headlineLevel}>
                {title}
              </Headline>
              {description && (
                <Text size="medium" variant="light" as="p">
                  {description}
                </Text>
              )}
            </Styled.HeadlineDescriptionWrapper>
            {price && (
              <Price size={{ desktop: "small", mobile: "small" }} {...price} />
            )}
          </Styled.LeftColumn>
          <Styled.Button
            asChild={overwriteButton ? true : false}
            ref={buttonRef}
            aria-label={`Weiter zu ${title}`}
            {...rest}
          >
            {overwriteButton ? (
              overwriteButton(<ChevronCircleRightFill />)
            ) : (
              <ChevronCircleRightFill />
            )}
          </Styled.Button>
        </Styled.ContentWrapper>
      </Styled.Root>
    );
  },
);
CardForwarding.displayName = "CardForwarding";
