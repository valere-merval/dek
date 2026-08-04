import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardFilled } from "./CardFilled";
import { Headline } from "../../Typography/Headline";
import { Text } from "../../Typography/Text";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { cardFilledColors, CardFilledProps } from "./CardFilled.types";
import { disableControls } from "../../../stories/utils/disableControls";
import { AllowedBackgroundColors } from "../../../theme/theme";
import fritzbox from "../../../../.storybook/assets/images/AVM_FRITZ_Box_7530_AX_front.avif";
import { ExternalLink } from "@fair/icons";
import { ComponentProps, ComponentType } from "react";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

type CardHeaderArgs = ComponentProps<typeof CardFilled.Header>;

type StoryArgs = ComponentProps<typeof CardFilled.Root> &
  Partial<CardHeaderArgs>;

const meta = {
  component: CardFilled.Root,
  argTypes: {
    ...disableControls<CardFilledProps>(["data-testid", "as", "css"]),
    backgroundColor: {
      control: {
        type: "radio",
      },
      options: cardFilledColors,
    },
    trigger: {
      control: {
        type: "radio",
      },
      options: ["button", "card"] satisfies Partial<
        ComponentProps<typeof CardFilled.Header>
      >["trigger"][],
      if: { arg: "trigger", exists: true },
    },
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
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<
  Omit<typeof meta, "component"> & { component: ComponentType<StoryArgs> }
>;

export const Default: Story = {
  args: {
    size: "medium",
    backgroundColor: "darkGrey",
    children: (
      <>
        <Headline size="large" variant="bold" as="h1">
          Card
        </Headline>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <ButtonPrimary variant="primary">Button</ButtonPrimary>
        </div>
      </>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    size: "medium",
    backgroundColor: "white",
    children: (
      <>
        <Headline size="large" variant="bold" as="h1">
          Card
        </Headline>
        <Text size="medium" variant="light">
          Text
        </Text>
        <CardFilled.Divider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <ButtonPrimary variant="primary">Button</ButtonPrimary>
          </div>
        </CardFilled.Divider>
        <Text size="medium" variant="light">
          more content
        </Text>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    size: "medium",
    backgroundColor: "white",
    children: (
      <>
        <Headline size="large" variant="bold" as="h1">
          Card
        </Headline>

        <CardFilled.Footer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <ButtonPrimary variant="primary">Button</ButtonPrimary>
          </div>
        </CardFilled.Footer>
      </>
    ),
  },
};

export const WithPromotionAndHeaderImage: Story = {
  args: {
    backgroundColor: "darkGrey",
    size: "small",
    promotionTop: "Aktion",
    headerImage: <img src={fritzbox} alt="" />,
    children: (
      <Text size="large" variant="light">
        Mit der Fritz!Box 7530 AX jetzt noch schneller ins Netz.
      </Text>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    backgroundColor: "darkGrey",
    size: "small",
  },
  parameters: {
    docs: {
      description: {
        story:
          "⚠️ Achtung: CardFilled.Header kann nur auf manchen Hintergründen genutzt werden. Aktuell kein autoscaling möglich",
      },
    },
  },
  render: (args) => (
    <CardFilled.Root {...args}>
      <CardFilled.Header>Header</CardFilled.Header>
    </CardFilled.Root>
  ),
};

export const WithHeaderAsButton: Story = {
  ...WithHeader,
  args: {
    ...WithHeader.args,
    trigger: "button",
  },
  render: ({ trigger, ...args }) => (
    <CardFilled.Root {...args}>
      <CardFilled.Header
        buttonProps={{
          onClick: () =>
            console.log(`CardHeader button triggered, trigger = ${trigger}`),
        }}
        trigger={trigger}
      >
        Header
      </CardFilled.Header>
    </CardFilled.Root>
  ),
};

export const WithHeaderAsLink: Story = {
  ...WithHeader,
  args: {
    ...WithHeader.args,
    trigger: "button",
  },
  render: ({ trigger, ...args }) => (
    <CardFilled.Root {...args}>
      <CardFilled.Header
        buttonProps={{ href: "https://congstar.de", asChild: true }}
        trigger={trigger}
      >
        Header
      </CardFilled.Header>
    </CardFilled.Root>
  ),
};

export const WithHeaderCardTrigger: Story = {
  ...WithHeader,
  args: {
    ...WithHeader.args,
    trigger: "card",
  },
  render: ({ trigger, ...args }) => (
    <CardFilled.Root {...args}>
      <CardFilled.Header
        buttonProps={{
          onClick: () =>
            console.log(`CardHeader button triggered, trigger = ${trigger}`),
        }}
        trigger={trigger}
      >
        Header
      </CardFilled.Header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <ButtonPrimary
          variant="primary"
          onClick={() => console.log("button clicked")}
        >
          Button
        </ButtonPrimary>
      </div>
    </CardFilled.Root>
  ),
};

export const WithHeaderAndCustomIcon: Story = {
  ...WithHeader,
  args: {
    ...WithHeader.args,
    trigger: "button",
  },
  render: ({ trigger, ...args }) => (
    <CardFilled.Root {...args}>
      <CardFilled.Header
        buttonProps={{
          href: "https://congstar.de",
          endIcon: <ExternalLink aria-hidden />,
          asChild: true,
        }}
        trigger={trigger}
      >
        Header
      </CardFilled.Header>
    </CardFilled.Root>
  ),
};
