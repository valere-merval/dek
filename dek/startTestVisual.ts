import nodepath from "path";
import { existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import Dockerode from "dockerode";

const __dirname = nodepath.dirname(fileURLToPath(import.meta.url));

const argv = process.argv;
const commandsToExecute = argv.length > 2 ? argv.slice(2) : [];

const reactPath = nodepath.join(__dirname, "packages", "react");

const testResultsPath = nodepath.join(reactPath, "test-results");
if (!existsSync(testResultsPath)) {
  mkdirSync(testResultsPath);
}

const rootMounts = [
  "pnpm-lock.yaml",
  "package.json",
  "examples/nextjs/package.json",
];

const mounts = [
  "src",
  "test-results",
  "playwright/fixtures.ts",
  "playwright/environments-ct/base.ts",
  "playwright/environments-ct/playwright.config.local.os-agnostic.ts",
  "playwright/environments-ct/playwright/index.html",
  "playwright/environments-ct/playwright/index.tsx",
  ".storybook/main.ts",
  ".storybook/preview.tsx",
  ".storybook/manager.tsx",
  ".storybook/utils/createStoryUrl.ts",
  ".storybook/utils/composeBackgroundColorStories.ts",
  ".storybook/assets",
  "package.json",
];

new Dockerode()
  .run(process.env.IMAGE_NAME, commandsToExecute, process.stdout, {
    HostConfig: {
      Binds: [
        ...rootMounts.map(
          (rootMount) =>
            `${nodepath.join(__dirname, rootMount)}:/fair/${rootMount}`,
        ),
        ...mounts.map(
          (mount) =>
            `${nodepath.join(reactPath, mount)}:/fair/packages/react/${mount}`,
        ),
      ],

      CpuShares: 4,
      IpcMode: "host",
      AutoRemove: true,
    },
    Env: ["CI=True"],
    AttachStdin: true,
    AttachStdout: true,
    Tty: true,
  })
  .catch((error) => console.log({ error }));
