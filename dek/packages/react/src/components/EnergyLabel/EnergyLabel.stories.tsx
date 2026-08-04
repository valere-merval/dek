import type { Meta, StoryObj } from "@storybook/react-vite";
import { EnergyLabel } from "./EnergyLabel";
import { AllowedBackgroundColors } from "../../theme/theme";
import XiaomiEnergyLabel from "../../../.storybook/assets/images/xiaomi-eneryLabel.png";

import { Text } from "../Typography/Text";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey", "blue"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: EnergyLabel,
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof EnergyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: "A",
  },
};

export const WithModal: Story = {
  args: {
    rating: "A",
    footnotes: [
      {
        header: "Xiaomi 15 Ultra",
        description: (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Text variant="bold" size="large">
              Xiaomi 15 Ultra
            </Text>
            <img
              src={XiaomiEnergyLabel}
              alt="Xiaomi 15 Ultra Energie Label A"
              width={300}
            />
          </div>
        ),
      },
    ],
  },
};
