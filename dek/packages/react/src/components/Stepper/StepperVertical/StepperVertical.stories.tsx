import type { Meta, StoryObj } from "@storybook/react-vite";
import { disableControls } from "../../../stories/utils/disableControls";
import { Headline } from "../../Typography/Headline";
import { Text } from "../../Typography/Text";
import { Stepper, StepperRootProps } from "../shared";
import { StepperVertical } from "./StepperVertical";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { ArrowRight, PhoneFill } from "@fair/icons";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import * as Styled from "../shared/Stepper.styles";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "darkGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite"],
  penny: ["pennyNeutralLightGrey", "pennyNeutralWhite"],
};

const meta = {
  component: StepperVertical.Root,
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
} satisfies Meta<typeof StepperVertical.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <StepperVertical.Root {...args}>
      <StepperVertical.Item state="completed">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Auftragseingang
          </Headline>
          <Text as="strong" variant="light" size="small">
            Dein Auftrag ist am 13.05.2024 bei uns eingegangen.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="completed">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Anbieterwechsel
          </Headline>
          <Text as="strong" variant="light" size="small">
            NetCologne hat deinen Wechsel zum 01.06.2024 bestätigt.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="current">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Auftragsbestätigung
          </Headline>
          <Text as="strong" variant="light" size="small">
            Wir haben deinen Wechsel bei NetCologne angefragt.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="open">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Starttermin
          </Headline>
          <Styled.StyledContent>
            <Text as="strong" variant="light" size="small">
              Wir bestätigen deinen Starttermin mit Technikereinsatz am
              01.06.2024.
            </Text>
            <Text as="strong" variant="light" size="small">
              Bitte sorge dafür, dass unser Techniker dann Zugang zum
              Hausanschluss (APL) hat.
            </Text>
          </Styled.StyledContent>
          <ButtonSecondary endIcon={<ArrowRight />} asChild>
            <a href="https://www.congstar.de">Starttermin ändern</a>
          </ButtonSecondary>
        </Stepper.Content>
      </StepperVertical.Item>
    </StepperVertical.Root>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <StepperVertical.Root {...args}>
      <StepperVertical.Item state="completed">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Auftragseingang
          </Headline>
          <Text as="strong" variant="light" size="small">
            Dein Auftrag ist am 13.05.2024 bei uns eingegangen.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="completed">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Anbieterwechsel
          </Headline>
          <Text as="strong" variant="light" size="small">
            NetCologne hat deinen Wechsel zum 01.06.2024 bestätigt.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="error">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
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
          <ButtonPrimary variant="outlined" startIcon={<PhoneFill />} asChild>
            <a
              href="tel:0221 79 700 700"
              aria-label="Telefonnummer: 0221 79 700 700"
            >
              0221 79 700 700
            </a>
          </ButtonPrimary>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="open">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Starttermin
          </Headline>
          <Styled.StyledContent>
            <Text as="strong" variant="light" size="small">
              Wir bestätigen deinen Starttermin mit Technikereinsatz am
              01.06.2024.
            </Text>
            <Text as="strong" variant="light" size="small">
              Bitte sorge dafür, dass unser Techniker dann Zugang zum
              Hausanschluss (APL) hat.
            </Text>
          </Styled.StyledContent>

          <ButtonSecondary endIcon={<ArrowRight />} asChild>
            <a href="https://www.congstar.de">Starttermin ändern</a>
          </ButtonSecondary>
        </Stepper.Content>
      </StepperVertical.Item>
    </StepperVertical.Root>
  ),
};

export const WithPendingState: Story = {
  render: (args) => (
    <StepperVertical.Root {...args}>
      <StepperVertical.Item state="completed">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Bestelleingang
          </Headline>
          <Text as="strong" variant="light" size="small">
            Deine Bestellung ist am 20.11.2024 bei uns eingegangen.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="completed">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Bestellbearbeitung
          </Headline>
          <Text as="strong" variant="light" size="small">
            Wir haben deine Bestellung bearbeitet.
          </Text>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="pending">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Versandvorbereitung
          </Headline>
          <Styled.StyledContent>
            <Text as="strong" variant="light" size="small">
              Leider verzögert sich der Versand deiner Bestellung.
            </Text>
            <Text as="strong" variant="light" size="small">
              Wir bitten dich noch um etwas Geduld.
            </Text>
          </Styled.StyledContent>
        </Stepper.Content>
      </StepperVertical.Item>
      <StepperVertical.Item state="open">
        <Stepper.Content>
          <Headline size="medium" variant="bold" as="h3" trimmed>
            Versand
          </Headline>
        </Stepper.Content>
      </StepperVertical.Item>
    </StepperVertical.Root>
  ),
};
