import { defineVisualMeta } from "../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "HtmlParser",
  categories: ["misc"],
  visualTraits: ["pares html content and renders it as fair react components"],
  useWhen: [
    "when you want to render html content that you get from an content-API ",
  ],
  notUseWhen: [],
  similarComponents: [],
});
