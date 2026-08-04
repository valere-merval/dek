import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardLinkList } from "./CardLinkList";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { ExternalLink } from "@fair/icons";
import { ButtonPrimary } from "../../Button/ButtonPrimary";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: CardLinkList.Root,
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
} satisfies Meta<typeof CardLinkList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.Header>Headline</CardLinkList.Header>
      <CardLinkList.List>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
        <CardLinkList.Button
          onClick={() => {
            alert("click");
          }}
        >
          Click me
        </CardLinkList.Button>
      </CardLinkList.List>
    </CardLinkList.Root>
  ),
};

export const WithSingleItem: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.Button asChild>
        <a href={"www.congstar.de"}>Click me </a>
      </CardLinkList.Button>
    </CardLinkList.Root>
  ),
};

export const MixedIcons: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.List>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
        <CardLinkList.Button asChild endIcon={<ExternalLink />}>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
      </CardLinkList.List>
    </CardLinkList.Root>
  ),
};

export const WithLink: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.List>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
      </CardLinkList.List>
    </CardLinkList.Root>
  ),
};

export const WithExternalLink: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.List>
        <CardLinkList.Button asChild endIcon={<ExternalLink aria-hidden />}>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
        <CardLinkList.Button asChild endIcon={<ExternalLink aria-hidden />}>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
      </CardLinkList.List>
    </CardLinkList.Root>
  ),
};

export const WithButton: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.List>
        <CardLinkList.Button
          onClick={() => {
            alert("click");
          }}
        >
          Click me
        </CardLinkList.Button>
        <CardLinkList.Button
          onClick={() => {
            alert("click");
          }}
        >
          Click me
        </CardLinkList.Button>
      </CardLinkList.List>
    </CardLinkList.Root>
  ),
};

export const WithOtherElements: Story = {
  args: {},
  render: (args) => (
    <CardLinkList.Root {...args}>
      <CardLinkList.Header>Headline</CardLinkList.Header>
      <CardLinkList.List>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Link</a>
        </CardLinkList.Button>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>Link</a>
        </CardLinkList.Button>
        <CardLinkList.Button asChild endIcon={<ExternalLink aria-hidden />}>
          <a href={"www.congstar.de"}>Click me </a>
        </CardLinkList.Button>
        <CardLinkList.Button
          onClick={() => {
            alert("click");
          }}
        >
          Click me
        </CardLinkList.Button>
        <CardLinkList.Button asChild>
          <a href={"www.congstar.de"}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </a>
        </CardLinkList.Button>
      </CardLinkList.List>
      <ButtonPrimary variant="outlined" fullWidth style={{ margin: "8px 0" }}>
        Button
      </ButtonPrimary>
    </CardLinkList.Root>
  ),
};
