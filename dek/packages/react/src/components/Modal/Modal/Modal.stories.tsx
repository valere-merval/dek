import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { defaultContent, modalWithinModalContent } from "./Modal.mock";
import {
  bringBackDeviceContent,
  bringBackHighlightsContent,
} from "../../Tabs/TabList/TabList.mock";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { ButtonMoreDetails } from "../../Button/ButtonMoreDetails";
import { ExclamationMarkTriangleOutline } from "@fair/icons";
import { MessageInfo } from "../../Message/MessageInfo";
import { Select } from "../../Input/Select";
import { ComboBox } from "../../Input/ComboBox";
import { TabList } from "../../Tabs/TabList";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { useState } from "react";
import { TextField } from "../../Input/TextField";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaAgave80", "jaAgaveOutlinesSecondary", "jaGeneralWhite"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: Modal.Root,
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
} satisfies Meta<typeof Modal.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onOpenChange: (isOpen) => {
      console.log("onOpenChange", isOpen);
    },
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>{defaultContent}</Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const ModalWithButton: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>
            <ButtonPrimary>Zurück</ButtonPrimary>
            <br />
            <MessageInfo
              icon={<ExclamationMarkTriangleOutline />}
              headline="Leider konnten wir die eingegebene Addresse nicht finden"
            >
              <p>
                Stattdessen haben wir folgende Addresse geprüft: <br />
                Mock-Available-Str. 12292-1 <br />
                12292 Mockstadt
              </p>
            </MessageInfo>
            <ButtonPrimary>Okay, verstanden</ButtonPrimary>
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

/**
 A Modal may contain another Modal.
 */
export const ModalWithinModal: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content fullHeight>
          <Modal.Title>Allnet Flat M</Modal.Title>
          <Modal.Description
            style={{ display: "flex", gap: "12px", flexDirection: "column" }}
          >
            <Modal.Root>
              <Modal.Trigger>
                <ButtonMoreDetails />
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Title>congstar Video Option - Disney+</Modal.Title>
                <Modal.Description
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexDirection: "column",
                  }}
                >
                  {modalWithinModalContent}
                </Modal.Description>
              </Modal.Content>
            </Modal.Root>
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

/**
 The `Model.Content` has the property of fullHeight so the modal has always the same height regardless of the content inside.
 Use this feature when the Modal's content may change at runtime. A great example of this would be the `Tab` component.
 */
export const ModalWithFullHeight: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content fullHeight>
          <Modal.Title>Rückgabedeal</Modal.Title>
          <Modal.Description>
            <TabList
              tabs={[
                {
                  value: "highlights",
                  title: "Highlights",
                  content: bringBackHighlightsContent,
                },
                {
                  value: "bringbackDevice",
                  title: "Geräterückgabe",
                  content: bringBackDeviceContent,
                },
              ]}
              defaultValue="highlights"
            />
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const ModalWithStickyTablist: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>Rückgabedeal</Modal.Title>
          <Modal.Description>
            <TabList
              tabs={[
                {
                  value: "highlights",
                  title: "Highlights",
                  content: bringBackHighlightsContent,
                },
                {
                  value: "bringbackDevice",
                  title: "Geräterückgabe",
                  content: bringBackDeviceContent,
                },
              ]}
              defaultValue="highlights"
              sticky
            />
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const ModalWithEmptyTabs: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>Rückgabedeal</Modal.Title>
          <Modal.Description>
            <TabList
              tabs={[
                {
                  value: "highlights",
                  title: "Highlights",
                  content: bringBackHighlightsContent,
                },
                {
                  value: "bringbackDevice",
                  title: "Geräterückgabe",
                  content: <></>,
                },
              ]}
              defaultValue="highlights"
            />
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const ModalWithInputElements: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>
            <Select.Root id="country" name="Land" placeholder="Land" autoFocus>
              <>
                <Select.Item id="de" textValue="Deutschland" />
                <Select.Item id="oe" textValue="Österreich" />
                <Select.Item id="se" textValue="Schweiz" />
              </>
            </Select.Root>
            <br />
            <ComboBox.Root
              ariaLabel="tarifauswahl"
              buttonAriaLabel="Zeige Tarife"
              id="tarif"
              menuTrigger="input"
              name="tarif"
              placeholder="Dein Tarif"
            >
              <>
                <ComboBox.Item textValue="Prepaid S" key="Prepaid S">
                  Prepaid S
                </ComboBox.Item>
                <ComboBox.Item textValue="Prepaid M" key="Prepaid M">
                  Prepaid M
                </ComboBox.Item>
                <ComboBox.Item textValue="Prepaid L" key="Prepaid L">
                  Prepaid L
                </ComboBox.Item>
              </>
            </ComboBox.Root>
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const ModalWithDismissableFalse: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content isDismissable={false}>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>
            <Select.Root id="country" name="Land" placeholder="Land" autoFocus>
              <>
                <Select.Item id="de" textValue="Deutschland" />
                <Select.Item id="oe" textValue="Österreich" />
                <Select.Item id="se" textValue="Schweiz" />
              </>
            </Select.Root>
            <br />
          </Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const WithControlledOpenState: Story = {
  args: {
    onOpenChange: (isOpen) => {
      console.log("onOpenChange", isOpen);
    },
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>{defaultContent}</Modal.Description>
        </Modal.Content>
      </>
    ),
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return <Modal.Root {...args} open={open} onOpenChange={setOpen} />;
  },
};

export const WithLongHeadline: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>
            Diese Überschrift ist zu lang um in einer Zeile auf mobile
            dargestellt werden zu können
          </Modal.Title>
          <Modal.Description>{defaultContent}</Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const WithDefaultOpen: Story = {
  args: {
    ...Default.args,
    defaultOpen: true,
  },
};

export const WithCustomTrigger: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>
          <ButtonMoreDetails />
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>{defaultContent}</Modal.Description>
        </Modal.Content>
      </>
    ),
  },
};

export const ModalWithInputElementsAndScrolling: Story = {
  args: {
    children: (
      <>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <Select.Root id="country" name="Land" placeholder="Land">
                <>
                  <Select.Item id="de" textValue="Deutschland" />
                  <Select.Item id="oe" textValue="Österreich" />
                  <Select.Item id="se" textValue="Schweiz" />
                </>
              </Select.Root>
              <ComboBox.Root
                ariaLabel="tarifauswahl"
                buttonAriaLabel="Zeige Tarife"
                id="tarif"
                menuTrigger="input"
                name="tarif"
                placeholder="Dein Tarif"
                autoFocus
              >
                <>
                  <ComboBox.Item textValue="Prepaid S" key="Prepaid S">
                    Prepaid S
                  </ComboBox.Item>
                  <ComboBox.Item textValue="Prepaid M" key="Prepaid M">
                    Prepaid M
                  </ComboBox.Item>
                  <ComboBox.Item textValue="Prepaid L" key="Prepaid L">
                    Prepaid L
                  </ComboBox.Item>
                </>
              </ComboBox.Root>
              <TextField id="email" name="email" placeholder="email" />
              <TextField id="age" name="age" placeholder="age" />
              <TextField
                id="favoriteColor"
                name="favoriteColor"
                placeholder="favoriteColor"
              />
              <TextField
                id="telephone"
                name="telephone"
                placeholder="telephone"
              />
              <ButtonPrimary fullWidth>weiter</ButtonPrimary>
            </div>
          </Modal.Description>
        </Modal.Content>
        <div style={{ height: "100vh", backgroundColor: "green" }}></div>
      </>
    ),
  },
};
