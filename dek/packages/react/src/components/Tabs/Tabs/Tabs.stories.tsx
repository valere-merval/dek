import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
import { Modal } from "../../Modal/Modal";
import { disableControls } from "../../../stories/utils/disableControls";
import { TabsRootProps } from "./Tabs.types";
import {
  contentOfDeliveryContent,
  highlightsContent,
  shippingInfoContent,
  technicalDataContent,
} from "./Tabs.mock";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: Tabs.Root,
  argTypes: {
    ...disableControls<TabsRootProps>(["asChild"]),
  },
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
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "highlights",
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List
        trigger={[
          {
            value: "highlights",
            children: "Highlights",
          },
          {
            value: "technical-data",
            children: "Technische Daten",
          },
          {
            value: "content-of-delivery",
            children: "Lieferumfang",
          },
          {
            value: "shipping-info",
            children: "Versandinformationen",
          },
        ]}
      />
      <Tabs.Content value="highlights">{highlightsContent}</Tabs.Content>
      <Tabs.Content value="technical-data">{technicalDataContent}</Tabs.Content>
      <Tabs.Content value="content-of-delivery">
        {contentOfDeliveryContent}
      </Tabs.Content>
      <Tabs.Content value="shipping-info">{shippingInfoContent}</Tabs.Content>
    </Tabs.Root>
  ),
};

export const Sticky: Story = {
  args: {
    defaultValue: "highlights",
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List
        trigger={[
          {
            value: "highlights",
            children: "Highlights",
          },
          {
            value: "technical-data",
            children: "Technische Daten",
          },
          {
            value: "content-of-delivery",
            children: "Lieferumfang",
          },
          {
            value: "shipping-info",
            children: "Versandinformationen",
          },
        ]}
        sticky
      />
      <Tabs.Content value="highlights">{highlightsContent}</Tabs.Content>
      <Tabs.Content value="technical-data">{technicalDataContent}</Tabs.Content>
      <Tabs.Content value="content-of-delivery">
        {contentOfDeliveryContent}
      </Tabs.Content>
      <Tabs.Content value="shipping-info">{shippingInfoContent}</Tabs.Content>
    </Tabs.Root>
  ),
};

/**
 The `Model.Content` has the property of fullHeight to avoid different heights in each tab
 */
export const WithModal: Story = {
  args: {
    defaultValue: "highlights",
  },
  render: (args) => (
    <Modal.Root>
      <Modal.Trigger>Mehr Details</Modal.Trigger>
      <Modal.Content fullHeight>
        <Modal.Title>eSIM</Modal.Title>
        <Modal.Description>
          <Tabs.Root {...args}>
            <Tabs.List
              trigger={[
                {
                  value: "highlights",
                  children: "Highlights",
                },
                {
                  value: "technical-data",
                  children: "Technische Daten",
                },
                {
                  value: "content-of-delivery",
                  children: "Lieferumfang",
                },
                {
                  value: "shipping-info",
                  children: "Versandinformationen",
                },
              ]}
            />
            <Tabs.Content value="highlights">{highlightsContent}</Tabs.Content>
            <Tabs.Content value="technical-data">
              {technicalDataContent}
            </Tabs.Content>
            <Tabs.Content value="content-of-delivery">
              {contentOfDeliveryContent}
            </Tabs.Content>
            <Tabs.Content value="shipping-info">
              {shippingInfoContent}
            </Tabs.Content>
          </Tabs.Root>
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  ),
};

export const EmptyTabContent: Story = {
  args: {
    defaultValue: "highlights",
  },
  render: (args) => (
    <Tabs.Root {...args}>
      <Tabs.List
        trigger={[
          {
            value: "highlights",
            children: "Highlights",
          },
          {
            value: "technical-data",
            children: "Technische Daten",
          },
          {
            value: "content-of-delivery",
            children: "Lieferumfang",
          },
          {
            value: "shipping-info",
            children: "Versandinformationen",
          },
        ]}
      />
    </Tabs.Root>
  ),
};
