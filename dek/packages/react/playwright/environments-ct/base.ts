import { devices } from "@playwright/experimental-ct-react";
import type { PlaywrightTestConfig } from "@playwright/experimental-ct-react";

export type Browser = "chromium" | "firefox";

const projects = [
  {
    name: "chromium",
    grepInvert: /@firefox/,
    use: { ...devices["Desktop Chrome"] },
  },
  {
    name: "firefox",
    grep: /@firefox/,
    use: { ...devices["Desktop Firefox"] },
  },
] satisfies {
  name: Browser;
  use: object;
  grep?: RegExp;
  grepInvert?: RegExp;
}[];

export const base: PlaywrightTestConfig = {
  testDir: "../../",
  testMatch: "**/*.test-visual-ct.?(c|m)[jt]s?(x)",
  snapshotPathTemplate:
    "{testDir}/{testFileDir}/__screenshots-ct__/{platform}/{projectName}/{arg}{ext}",
  fullyParallel: true,
  workers: undefined,
  reporter: "html",
  timeout: 10 * 1000,
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    launchOptions: {
      ignoreDefaultArgs: ["--hide-scrollbars"],
    },
    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,
  },
  projects,
};
