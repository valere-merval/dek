import { defineConfig } from "@playwright/experimental-ct-react";
import { mergeConfig } from "vite";
import { base } from "./base";

export default defineConfig(
  mergeConfig(base, {
    snapshotPathTemplate:
      "{testDir}/{testFileDir}/__screenshots-ct__/os-agnostic/{projectName}/{arg}{ext}",
    fullyParallel: false,
    forbidOnly: true,
    retries: 2,
    workers: 1,
  }),
);
