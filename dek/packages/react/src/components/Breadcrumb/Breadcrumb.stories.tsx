import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./Breadcrumb";
import type { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
};

const meta = {
  component: Breadcrumb,
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * "Gerätedetailseiten" example. Produces exactly the schema.org BreadcrumbList
 * from the spec (positions congstar / Geräte mit Vertrag / Apple / iPhone 15 Pro Max).
 */
export const Default: Story = {
  args: {
    home: {
      label: "congstar",
      ariaLabel: "Zurück zur Übersicht",
    },
    baseUrl: "https://www.congstar.de",
    path: [
      { segment: "geraete", label: "Geräte mit Vertrag" },
      { segment: "apple" },
      { segment: "iphone-15-pro-max", label: "iPhone 15 Pro Max" },
    ],
  },
};

/**
 * A deep path with `collapseOnMobile`: below the `md` viewport the middle
 * segments are collapsed into a clickable `…`
 * (`⌂ / first / … / previous / current`). From `md` upwards the full path is
 * shown. Only takes effect with more than four items in total.
 */
export const Collapsed: Story = {
  args: {
    home: { label: "congstar" },
    baseUrl: "https://www.congstar.de",
    collapseOnMobile: true,
    path: [
      { segment: "geraete", label: "Geräte mit Vertrag" },
      { segment: "smartphones", label: "Smartphones" },
      { segment: "apple", label: "Apple" },
      { segment: "iphone", label: "iPhone" },
      { segment: "iphone-15-pro-max", label: "iPhone 15 Pro Max" },
    ],
  },
};
