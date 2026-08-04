"use client";

import { forwardRef, ElementRef, useContext, useEffect, useState } from "react";
import { PaymentIconProps } from "./PaymentIcon.types";
import * as Styled from "./PaymentIcon.styles";
import {
  mapPaymentMethodToAltText,
  mapPaymentMethodToIcon,
} from "./utils/mapPaymentMethodToIcon";
import { ThemeContext } from "styled-components";

const getHighContrastVariant = (): "light" | "dark" | null => {
  if (typeof window === "undefined") return null;
  const isHighContrast = window.matchMedia("(forced-colors: active)").matches;
  if (!isHighContrast) return null;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const useHighContrastVariant = (): "light" | "dark" | null => {
  const [variant, setVariant] = useState<"light" | "dark" | null>(
    getHighContrastVariant,
  );

  useEffect(() => {
    const highContrastQuery = window.matchMedia("(forced-colors: active)");
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const update = () => setVariant(getHighContrastVariant());

    highContrastQuery.addEventListener("change", update);
    colorSchemeQuery.addEventListener("change", update);
    return () => {
      highContrastQuery.removeEventListener("change", update);
      colorSchemeQuery.removeEventListener("change", update);
    };
  }, []);

  return variant;
};

export const PaymentIcon = forwardRef<
  ElementRef<typeof Styled.Root>,
  PaymentIconProps
>(({ paymentMethod, size = "medium", ...rest }: PaymentIconProps, ref) => {
  const themeContext = useContext(ThemeContext);
  const backgroundColor =
    themeContext?.contextSpecific.backgroundColor || "white";
  const highContrastVariant = useHighContrastVariant();
  const variant =
    highContrastVariant ??
    (backgroundColor === "black" || backgroundColor === "darkGrey"
      ? "dark"
      : "light");

  return (
    <Styled.Root ref={ref} $size={size} $variant={variant} {...rest}>
      <img
        src={mapPaymentMethodToIcon[paymentMethod][variant]}
        alt={mapPaymentMethodToAltText[paymentMethod]}
      />
    </Styled.Root>
  );
});
PaymentIcon.displayName = "PaymentIcon";
