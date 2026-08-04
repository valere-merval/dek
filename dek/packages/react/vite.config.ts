import { defineConfig, esmExternalRequirePlugin } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "unplugin-dts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@fair/react",
      fileName: `index`,
    },
    rolldownOptions: {
      plugins: [esmExternalRequirePlugin({ external: ["react"] })],
      external: [
        "react/jsx-runtime",
        "react-dom",
        "styled-components",
        //   This is necessary because a bug in combination with nextJs: https://github.com/remarkablemark/html-react-parser/issues/1427
        "html-react-parser",
        "@fair/icons",
        "@internationalized/date",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "styled-components": "styled",
          "html-react-parser": "html-react-parser",
          "@fair/icons": "@fair/icons",
          "@internationalized/date": "@internationalized/date",
        },
      },
    },
  },
});
