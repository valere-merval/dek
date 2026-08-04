import type { AppProps } from "next/app";
import { GlobalStyles, ThemeProvider } from "@fair/react";

export default function DemoApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
