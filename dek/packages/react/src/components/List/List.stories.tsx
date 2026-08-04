import { List } from "./List";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { disableControls } from "../../stories/utils/disableControls";
import { ListRootProps } from "./List.types";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
  congstarApp: ["black", "darkGrey", "blue"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralWhite",
    "pennyNeutralLightGrey",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: List.Root,
  argTypes: {
    ...disableControls<ListRootProps>(["css", "as", "data-testid"]),
    decorativeColor: {
      control: {
        type: "radio",
      },
    },
  },
  parameters: { allowedBackgroundColors },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof List.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <List.Item data-testid="list-main-item-1">
          <List.Body>Nur Online: 32 GB statt 15 GB</List.Body>
          <List.Description data-testid="list-description-1">
            inkl. LTE 50 mit max. 50 Mbit/s
          </List.Description>
        </List.Item>
        <List.Item data-testid="list-main-item-2">
          <List.Body>Jedes Jahr 5 GB mehr</List.Body>
        </List.Item>
        <List.Item data-testid="list-main-item-3">
          <List.Body>Telefonie & SMS Flat</List.Body>
          <List.Description data-testid="list-description-4">
            in alle dt. Netze
          </List.Description>
        </List.Item>
        <List.Item data-testid="list-main-item-4">
          <List.Body>EU-Roaming inklusive</List.Body>
        </List.Item>
        <List.Item data-testid="list-main-item-5">
          <List.Body>
            Mehrzeiliger Textblock, um die Aufzählungspunkte anzuzeigen, enthält
            verschiedene Inhalte und Beispiele für eine strukturierte
            Darstellung. Dabei werden Absätze genutzt, um Informationen
            übersichtlich zu gliedern und klar verständlich zu machen. Zudem
            helfen prägnante Formulierungen, die wesentlichen Punkte
            hervorzuheben.
          </List.Body>
          <List.Description data-testid="list-description-5">
            in alle dt. Netze
          </List.Description>
        </List.Item>
      </>
    ),
    decorativeColor: "yellow",
  },
};

export const Variants: Story = {
  args: {
    children: (
      <>
        <List.Item data-testid="list-main-item-1">
          <List.Description data-testid="list-description-1" forwardedAs="span">
            inkl. LTE 50 mit max. 50 Mbit/s
          </List.Description>
        </List.Item>
        <List.Item data-testid="list-main-item-2">
          <List.Body forwardedAs="span">Jedes Jahr 5 GB mehr</List.Body>
        </List.Item>
        <List.Item data-testid="list-main-item-3">
          <List.Body>Telefonie & SMS Flat</List.Body>
          <List.Description data-testid="list-description-4">
            in alle dt. Netze
          </List.Description>
        </List.Item>
        <List.Item data-testid="list-main-item-4">
          <List.Description data-testid="list-description-5">
            Multiline Body to see the bulletpoint Incididunt Lorem nostrud
            cupidatat occaecat esse ad sit non cillum. Irure duis nisi amet ea
            aute in tempor dolore qui in esse Lorem. Occaecat et ad amet
            pariatur.{" "}
          </List.Description>
        </List.Item>
        <List.Item data-testid="list-main-item-5">
          <List.Body>
            Multiline Body to see the bulletpoint Incididunt Lorem nostrud
            cupidatat occaecat esse ad sit non cillum. Irure duis nisi amet ea
            aute in tempor dolore qui in esse Lorem. Occaecat et ad amet
            pariatur.
          </List.Body>
          <List.Description>in alle dt. Netze</List.Description>
        </List.Item>
      </>
    ),
    decorativeColor: "yellow",
  },
};

export const FlexboxInDescription: Story = {
  args: {
    children: (
      <List.Item data-testid="flexbox-item-1">
        <List.Description>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Dein Tarif</span>
            <span>€ 12,99</span>
          </div>
        </List.Description>
      </List.Item>
    ),
    decorativeColor: "yellow",
  },
};
