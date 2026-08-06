"use client";

import React, {
  createContext,
  ElementRef,
  forwardRef,
  useContext,
} from "react";
import {
  CardFilledColor,
  CardFilledDividerProps,
  CardFilledFooterProps,
  CardFilledHeaderProps,
  CardFilledProps,
} from "./CardFilled.types";
import * as Styled from "./CardFilled.styles";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import { ThemeContext } from "styled-components";
import { AllowedBackgroundColors, Brand } from "../../../theme/theme";
import {
  footerBackgroundColorMapping,
  PromotionTopColorMapping,
} from "./mappings";
import { CardHeader } from "../shared/CardHeader";
import { useContainerPress } from "../shared/hooks/useContainerPress";
import { ContainerPressContext } from "../shared/contexts/ContainerPressContext";

const CardFilledContext = createContext<CardFilledProps>({} as CardFilledProps);

export const allowedBackgroundColors = {
  congstarWeb: ["white", "lightGrey", "darkGrey", "blue"],
  congstarApp: ["darkGrey"],
  ja: ["jaGeneralWhite"],
  penny: ["pennyNeutralWhite"],
} satisfies AllowedBackgroundColors;

const getBrandSpecificBackgroundColor = (
  brand: Brand,
  backgroundColor: CardFilledColor,
): CardFilledColor =>
  allowedBackgroundColors[brand].find(
    (allowedBackgroundColor) => allowedBackgroundColor === backgroundColor,
  )
    ? backgroundColor
    : (allowedBackgroundColors[brand].at(0) as CardFilledColor);

export const Root = forwardRef<ElementRef<typeof Styled.Root>, CardFilledProps>(
  (props: CardFilledProps, ref) => {
    const {
      backgroundColor,
      children,
      promotionTop,
      headerImage,
      headerImageSize = "medium",
      promotionTopId,
      ...rest
    } = props;
    const themeContext = useContext(ThemeContext);
    const brand = themeContext?.contextSpecific.brand || "congstarWeb";
    const brandSpecificBackgroundColor = getBrandSpecificBackgroundColor(
      brand,
      backgroundColor,
    );

    const { pressProps, contextValue, isTrigger } = useContainerPress();

    return (
      <ContainerPressContext.Provider value={contextValue}>
        <Styled.Root
          $backgroundColor={brandSpecificBackgroundColor}
          $isClickable={isTrigger}
          ref={ref}
          {...rest}
          {...pressProps}
        >
          <ThemeProvider backgroundColor={brandSpecificBackgroundColor}>
            {promotionTop && (
              <Styled.PromotionTop
                id={promotionTopId}
                decorativeColor={
                  PromotionTopColorMapping[brandSpecificBackgroundColor]
                }
              >
                {promotionTop}
              </Styled.PromotionTop>
            )}
            {headerImage && (
              <Styled.HeaderImageWrapper
                $headerImageSize={headerImageSize}
                $size={props.size}
              >
                {headerImage}
              </Styled.HeaderImageWrapper>
            )}

            <CardFilledContext.Provider value={props}>
              {children}
            </CardFilledContext.Provider>
          </ThemeProvider>
        </Styled.Root>
      </ContainerPressContext.Provider>
    );
  },
);
Root.displayName = "CardFilled.Root";

const Footer = forwardRef<
  ElementRef<typeof Styled.Footer>,
  CardFilledFooterProps
>(({ children, ...rest }, ref) => {
  const { size } = useContext(CardFilledContext);
  const themeContext = useContext(ThemeContext);
  const brand = themeContext?.contextSpecific.brand || "congstarWeb";

  return (
    <Styled.Footer ref={ref} {...rest} $size={size}>
      <ThemeProvider backgroundColor={footerBackgroundColorMapping[brand]}>
        {children}
      </ThemeProvider>
    </Styled.Footer>
  );
});
Footer.displayName = "CardFilled.Footer";

const Divider = forwardRef<
  ElementRef<typeof Styled.Divider>,
  CardFilledDividerProps
>(({ children, ...rest }, ref) => {
  const { size } = useContext(CardFilledContext);
  const themeContext = useContext(ThemeContext);
  const brand = themeContext?.contextSpecific.brand || "congstarWeb";

  return (
    <Styled.Divider ref={ref} {...rest} $size={size}>
      <ThemeProvider backgroundColor={footerBackgroundColorMapping[brand]}>
        {children}
      </ThemeProvider>
    </Styled.Divider>
  );
});
Divider.displayName = "CardFilled.Divider";

const Header = forwardRef<ElementRef<typeof CardHeader>, CardFilledHeaderProps>(
  (props, ref) => {
    return <CardHeader ref={ref} {...props} />;
  },
);
Header.displayName = "CardFilled.Header";

export const CardFilled = {
  Root,
  Footer,
  Divider,
  Header,
};
