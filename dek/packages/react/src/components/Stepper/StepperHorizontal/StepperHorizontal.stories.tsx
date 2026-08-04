import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepperHorizontal } from "./StepperHorizontal";
import { Stepper, StepperRootProps } from "../shared";
import { disableControls } from "../../../stories/utils/disableControls";
import { Headline } from "../../Typography/Headline";
import { Text } from "../../Typography/Text";
import { AllowedBackgroundColors } from "../../../theme/theme";
import * as Styled from "../shared/Stepper.styles";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "darkGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite"],
  penny: ["pennyNeutralLightGrey", "pennyNeutralWhite"],
};

const meta = {
  component: StepperHorizontal.Root,
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
} satisfies Meta<typeof StepperHorizontal.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <StepperHorizontal.List>
          <StepperHorizontal.Item state="completed" />
          <StepperHorizontal.Item state="completed" />
          <StepperHorizontal.Item state="current"></StepperHorizontal.Item>
          <StepperHorizontal.Item state="open" />
        </StepperHorizontal.List>
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3">
            Auftragsbestätigung
          </Headline>
          <Text as="strong" variant="light" size="small">
            Wir haben deinen Wechsel bei NetCologne angefragt.
          </Text>
        </Stepper.Content>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    children: (
      <>
        <StepperHorizontal.List>
          <StepperHorizontal.Item state="completed" />
          <StepperHorizontal.Item state="completed" />
          <StepperHorizontal.Item state="error" />
          <StepperHorizontal.Item state="open" />
        </StepperHorizontal.List>
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3">
            Router-Versand
          </Headline>
          <Styled.StyledContent>
            <Text as="strong" variant="light" size="small">
              Bitte melde dich bei der Service Hotline
            </Text>
            <Text as="strong" variant="light" size="small">
              Montag – Samstag von 8 bis 22 Uhr
            </Text>
            <Text as="strong" variant="light" size="small">
              Sonn- und feiertags von 9 bis 18 Uhr
            </Text>
          </Styled.StyledContent>
        </Stepper.Content>
      </>
    ),
  },
};

export const WithPendingState: Story = {
  args: {
    children: (
      <>
        <StepperHorizontal.List>
          <StepperHorizontal.Item state="completed" />
          <StepperHorizontal.Item state="completed" />
          <StepperHorizontal.Item state="pending" />
          <StepperHorizontal.Item state="open" />
        </StepperHorizontal.List>
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3">
            Versandvorbereitung
          </Headline>
          <Text as="strong" variant="light" size="small">
            Leider verzögert sich der Versand deiner Bestellung. Wir bitten dich
            noch um ein wenig Geduld.
          </Text>
        </Stepper.Content>
      </>
    ),
  },
};
