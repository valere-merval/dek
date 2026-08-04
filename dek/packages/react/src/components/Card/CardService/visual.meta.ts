import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "CardService",
  categories: ["product", "layout"],
  visualTraits: [
    "Compact service card shown on darker background contexts",
    "Contains service-related headline and supporting content",
    "Card styling is more informational than transactional",
    "Designed as a standalone content block rather than a full checkout summary",
  ],
  useWhen: [
    "Presenting a service teaser or service information in card form",
    "Grouping service-related content on landing pages or overview sections",
    "Showing concise content blocks with card emphasis",
  ],
  notUseWhen: [
    "A price- or checkout-focused card is required",
    "The content is only a simple text paragraph without card treatment",
  ],
  similarComponents: [
    {
      component: "CardFilled",
      difference:
        "CardFilled is a generic filled card surface, CardService is tailored to service presentation",
    },
    {
      component: "CardLinkList",
      difference:
        "CardLinkList is action-list driven, CardService is primarily informational",
    },
  ],
});
