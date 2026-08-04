import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvailabilityCheckEdit } from "./AvailabilityCheckEdit";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: AvailabilityCheckEdit,
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
} satisfies Meta<typeof AvailabilityCheckEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onButtonClick: () => {
      console.log("clicked");
    },
    status: "available",
    headline: "Der Tarif ist verfügbar",
    description:
      "Bischöflich-Geistlicher-Rat-Josef-Zinnbauer-Str. 84, 84130 Dingolfing",
  },
};

export const Unavailable: Story = {
  args: {
    ...Default.args,
    status: "unavailable",
    headline: "Der Tarif ist nicht verfügbar",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    status: "error",
    headline: "Es ist ein Fehler aufgetreten",
    description: "Bitte versuche es gleich erneut.",
  },
};

export const WithCustomButtonLabel: Story = {
  args: {
    ...Default.args,
    buttonLabel: "Klick mich",
  },
};
