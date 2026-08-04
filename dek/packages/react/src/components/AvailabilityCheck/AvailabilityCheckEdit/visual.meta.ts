import { defineVisualMeta } from "../../../../scripts/storybook-llms-extractor/types.js";

export default defineVisualMeta({
  component: "AvailabilityCheckEdit",
  categories: ["availability"],
  visualTraits: [
    "Status indicator with icon (checkmark for available, X for unavailable, warning for error)",
    "Headline text displaying availability status",
    "Description text showing address or error message",
    "Action button to edit or retry availability check",
    "Responsive layout adapting to sm, md, and lg viewports",
  ],
  useWhen: [
    "Displaying result of an availability check for a tariff or service",
    "Showing address confirmation after availability verification",
    "Allowing users to edit or retry an availability check",
    "Error state display when availability check fails",
  ],
  notUseWhen: [
    "Initial availability check form is needed (use AvailabilityCheckStart instead)",
    "No address or location context is required",
    "Simple status display without edit action",
  ],
  similarComponents: [
    {
      component: "AvailabilityCheckStart",
      difference: "For initiating availability check, not showing results",
    },
    {
      component: "Alert",
      difference: "General alerts without address/availability context",
    },
  ],
});
