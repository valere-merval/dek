"use client";

import React, { forwardRef, useContext } from "react";
import * as StickyBoxSideStyled from "./StickyBoxSideActivation.styles";
import { ArrowRight } from "@fair/icons";
import { ButtonPrimary } from "../../../Button/ButtonPrimary";
import { ActivationProps } from "../Activation.types";
import { Price } from "../../../Price/Price";
import { ThemeContext } from "styled-components";
import { stickyBoxBackgroundColorMapping } from "../mappings";
import { ThemeProvider } from "../../../../theme/ThemeProvider";

export const StickyBoxSideActivation = forwardRef<
  HTMLHRElement,
  ActivationProps
>(
  (
    {
      price,
      onButtonClick,
      header,
      buttonText = "Weiter",
      listItems,
      ...rest
    }: ActivationProps,
    ref,
  ) => {
    const themeContext = useContext(ThemeContext);
    const brand = themeContext?.contextSpecific.brand || "congstarWeb";

    return (
      <StickyBoxSideStyled.ShoppingCartWrapper
        ref={ref}
        data-testid="sticky-box-side-prepaid-activation"
        {...rest}
      >
        <ThemeProvider backgroundColor={stickyBoxBackgroundColorMapping[brand]}>
          <StickyBoxSideStyled.StickyBoxSidePrepaidWrapper
            price={price}
            header={header}
            listItems={listItems}
          />
          <Price size={{ mobile: "medium", desktop: "medium" }} {...price} />
          <ButtonPrimary
            endIcon={<ArrowRight />}
            size="large"
            fullWidth
            onClick={onButtonClick}
          >
            {buttonText}
          </ButtonPrimary>
        </ThemeProvider>
      </StickyBoxSideStyled.ShoppingCartWrapper>
    );
  },
);

StickyBoxSideActivation.displayName = "StickyBoxSideActivation";
