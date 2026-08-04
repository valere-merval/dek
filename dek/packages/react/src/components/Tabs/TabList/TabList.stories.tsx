import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabList } from "./TabList";
import { AllowedBackgroundColors } from "../../../theme/theme";
import {
  bringBackDeviceContent,
  bringBackHighlightsContent,
  contentOfDeliveryContent,
  highlightsContent,
  shippingInfoContent,
  tabPanel1Content,
  tabPanel2Content,
  tabPanel3Content,
  technicalDataContent,
} from "./TabList.mock";
import { Modal } from "../../Modal/Modal";
import { action } from "storybook/actions";
import { useState } from "react";
import { Key } from "react-aria-components";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: TabList,
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
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { value: "tab-1", title: "Tab 1", content: tabPanel1Content },
      {
        value: "tab-2",
        title: "Tab 2",
        content: tabPanel2Content,
      },
      {
        value: "tab-3",
        title: "Tab 3",
        content: <div style={{ height: "1200px" }}>{tabPanel3Content}</div>,
      },
    ],
    defaultValue: "tab-1",
    onSelectionChange: action("Tab selection changed"),
  },
};

export const Sticky: Story = {
  args: {
    sticky: true,
    tabs: [
      {
        value: "tab-1",
        title: "Tab 1",
        content: tabPanel1Content,
      },
      {
        value: "tab-2",
        title: "Tab 2",
        content: <div style={{ height: "1200px" }}>{tabPanel2Content}</div>,
      },
      {
        value: "tab-3",
        title: "Tab 3",
        content: tabPanel3Content,
      },
    ],
  },
};

export const DeviceHighlights: Story = {
  args: {
    tabs: [
      { value: "highlights", title: "Highlights", content: highlightsContent },
      {
        value: "technicalData",
        title: "Technische Daten",
        content: technicalDataContent,
      },
      {
        value: "contentOfDelivery",
        title: "Lieferumfang",
        content: contentOfDeliveryContent,
      },
      {
        value: "shippingInfo",
        title: "Versandinformationen",
        content: shippingInfoContent,
      },
    ],
  },
};

export const WithinModal: Story = {
  args: {
    sticky: true,
    tabs: [
      { value: "highlights", title: "Highlights", content: highlightsContent },
      {
        value: "technicalData",
        title: "Technische Daten",
        content: technicalDataContent,
      },
      {
        value: "contentOfDelivery",
        title: "Lieferumfang",
        content: contentOfDeliveryContent,
      },
      {
        value: "shippingInfo",
        title: "Versandinformationen",
        content: shippingInfoContent,
      },
    ],
  },
  render: (args) => (
    <Modal.Root>
      <Modal.Trigger>Mehr Details</Modal.Trigger>
      <Modal.Content fullHeight>
        <Modal.Title>eSIM</Modal.Title>
        <Modal.Description>
          <TabList {...args} />
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  ),
};

export const BringbackDetails: Story = {
  args: {
    tabs: [
      {
        value: "highlights",
        title: "Highlights",
        content: bringBackHighlightsContent,
      },
      {
        value: "bringback",
        title: "Geräterückgabe",
        content: bringBackDeviceContent,
      },
    ],
  },
};

export const ControlledTabs: Story = {
  args: {
    tabs: [
      { value: "tab-1", title: "Tab 1", content: tabPanel1Content },
      {
        value: "tab-2",
        title: "Tab 2",
        content: tabPanel2Content,
      },
    ],
  },
  render: (args) => {
    const [selection, setSelection] = useState<Key>("tab-1");
    return (
      <TabList
        {...args}
        onSelectionChange={(key) => {
          setSelection(key);
        }}
        selectedKey={selection}
      />
    );
  },
};
