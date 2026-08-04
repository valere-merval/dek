"use client";

import { createGlobalStyle } from "styled-components";
import mainStyles from "@fair/global-css/dist/main.min.css?inline";
import mainJaStyles from "@fair/global-css/dist/mainJa.min.css?inline";
import mainPennyStyles from "@fair/global-css/dist/mainPenny.min.css?inline";

export const GlobalStyles = createGlobalStyle`
    ${mainStyles}
    ${mainJaStyles}
    ${mainPennyStyles}
`;
