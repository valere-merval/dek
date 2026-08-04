import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepperCheckout } from "./StepperCheckout";
import { StepperRootProps } from "../shared";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "darkGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite"],
  penny: ["pennyNeutralLightGrey", "pennyNeutralWhite"],
};

const meta = {
  component: StepperCheckout.Root,
  argTypes: {
    ...disableControls<StepperRootProps>(["css", "as"]),
  },
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
} satisfies Meta<typeof StepperCheckout.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <StepperCheckout.List>
          <StepperCheckout.Item state="completed" label="Bestellübersicht" />
          <StepperCheckout.Item state="completed" label="Persönliche Daten" />
          <StepperCheckout.Item state="current" label="Zahlungsdaten" />
          <StepperCheckout.Item state="open" label="Legitimation" />
          <StepperCheckout.Item state="open" label="Zusammenfassung" />
        </StepperCheckout.List>
      </>
    ),
  },
};

export const MnpInExample: Story = {
  args: {
    children: (
      <div>
        <StepperCheckout.List>
          <StepperCheckout.Item state="completed" label="Rufnummermitnahme" />
          <StepperCheckout.Item state="completed" label="Persönliche Daten" />
          <StepperCheckout.Item state="current" label="Zahlungsdaten" />
          <StepperCheckout.Item state="open" label="Übersicht" />
        </StepperCheckout.List>
      </div>
    ),
  },
};

export const WithHiddenLabels: Story = {
  args: {
    children: (
      <>
        <StepperCheckout.List>
          <StepperCheckout.Item
            state="completed"
            label="Bestellübersicht"
            hideLabel
          />
          <StepperCheckout.Item
            state="completed"
            label="Persönliche Daten"
            hideLabel
          />
          <StepperCheckout.Item state="current" label="Zahlungsdaten" />
          <StepperCheckout.Item state="open" label="Legitimation" />
          <StepperCheckout.Item state="open" label="Zusammenfassung" />
        </StepperCheckout.List>
      </>
    ),
  },
};

export const WithClickableItems: Story = {
  args: {
    children: (
      <>
        <StepperCheckout.List>
          <StepperCheckout.Item
            state="completed"
            label="Bestellübersicht"
            link="http://www.congstar.de"
          />
          <StepperCheckout.Item
            state="completed"
            label="Persönliche Daten"
            link="http://www.congstar.de"
          />
          <StepperCheckout.Item state="current" label="Zahlungsdaten" />
          <StepperCheckout.Item state="open" label="Legitimation" />
          <StepperCheckout.Item state="open" label="Zusammenfassung" />
        </StepperCheckout.List>
      </>
    ),
  },
};
