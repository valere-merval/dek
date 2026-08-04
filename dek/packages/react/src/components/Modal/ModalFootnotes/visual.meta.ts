import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "ModalFootnotes",
  categories: ["overlay", "feedback"],
  visualTraits: [
    "Modal dialog dedicated to one or multiple footnote sections",
    "Displays headline-like footnote headers with long explanatory text",
    "Scrollable overlay content for detailed legal or product explanations",
    "Often used for rich formatted text, HTML fragments, or multiple note blocks",
  ],
  useWhen: [
    "Footnotes or legal explanations are too long for inline display",
    "Product details require expandable modal reading space",
    "Several footnotes need to be collected in one overlay",
  ],
  notUseWhen: [
    "A small tooltip or inline note is sufficient",
    "The overlay contains generic modal content unrelated to footnotes",
  ],
  similarComponents: [
    {
      component: "Modal",
      difference:
        "Modal is a general-purpose dialog, ModalFootnotes is tailored to detailed note content",
    },
    {
      component: "HtmlParser",
      difference:
        "HtmlParser renders HTML content inline, ModalFootnotes presents explanatory content inside a dialog",
    },
  ],
});
