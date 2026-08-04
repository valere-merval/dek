import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "AvailabilityCheckStart",
  categories: ["availability"],
  visualTraits: [
    "Prompt text asking user about tariff availability",
    "Action button to initiate availability check",
    "Configurable background color (white or dark)",
    "Can trigger a modal for address input flow",
  ],
  useWhen: [
    "Starting an availability check flow for fixed-line or home tariffs",
    "Prompting users to verify service availability at their address",
    "Entry point before showing AvailabilityCheckEdit results",
  ],
  notUseWhen: [
    "Displaying availability check results (use AvailabilityCheckEdit instead)",
    "Mobile-only tariffs without address requirements",
    "Inline form fields are preferred over button-triggered flow",
  ],
  similarComponents: [
    {
      component: "AvailabilityCheckEdit",
      difference: "For displaying results, not initiating check",
    },
    {
      component: "Button",
      difference: "Generic button without availability context",
    },
  ],
});
