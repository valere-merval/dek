import { create } from "storybook/theming";
import logoUrl from "./fairRect.svg";

export default create({
  base: "dark",
  colorPrimary: "#fff",
  colorSecondary: "#55BBE9",

  // UI
  appBg: "black",
  appContentBg: "black",
  appBorderColor: "grey",
  appBorderRadius: 2,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#fff",
  textInverseColor: "rgba(255,255,255,0.9)",
  textMutedColor: "#fff",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "#55BBE9",

  // Form colors
  inputBg: "black",
  inputTextColor: "white",
  inputBorder: "silver",
  inputBorderRadius: 2,
  brandTitle: "fair - congstar Design System",
  brandUrl: "https://congstar.com",
  brandImage: logoUrl,
  brandTarget: "_self",
});
