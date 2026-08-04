import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.?(c|m)[jt]s?(x)"],
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["text", "text-summary"],
      provider: "v8",
    },
  },
});
