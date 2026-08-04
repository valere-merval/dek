"use client";

import { ReactNode, useContext } from "react";
import {
  ThemeContext,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import {
  BackgroundColor,
  Brand,
  defaultFairTheme,
  getFocusStyles,
} from "./theme";
import { I18nProvider } from "react-aria";

export interface ThemeProviderProps {
  /**
   * Choose the backgroundColor your fair components should react on.
   * Be aware that not every backgroundColor is compatible with the chosen brand.
   */
  backgroundColor?: BackgroundColor;
  /**
   * Choose the Brand your fair components should look like.
   */
  brand?: Brand;
  children: ReactNode;
}

/**
 * Provides the fair Theme to your component tree. Needs to be a wrapper around fair components.
 *
 * > You can nest the ThemeProvider as often as you like to define a sepcific backgroundColor or brand for the children fair components.
 * > But we would recommend to use the {@link CardFilled} component instead if possible, because it provides a ThemeProvider with backgroundColor mapping internally.
 */
export const ThemeProvider = ({
  backgroundColor = "black",
  brand: brandOverwrite,
  children,
}: ThemeProviderProps) => {
  const themeContext = useContext(ThemeContext);
  const brand =
    brandOverwrite || themeContext?.contextSpecific.brand || "congstarWeb";

  return (
    <I18nProvider locale="de-DE">
      <StyledComponentsThemeProvider
        theme={(theme = defaultFairTheme) => ({
          ...theme,
          contextSpecific: {
            backgroundColor,
            brand,
            focusStyles: getFocusStyles(backgroundColor),
          },
        })}
      >
        {children}
      </StyledComponentsThemeProvider>
    </I18nProvider>
  );
};
