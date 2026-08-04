import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";
import { disableControls } from "../../../stories/utils/disableControls";
import { SelectProps } from "./Select.types";
import {
  nullOptionChildren,
  sbChildren,
  sbChildrenOverflow,
} from "./select.mock";
import { Modal } from "../../Modal/Modal";
import { Headline } from "../../Typography/Headline";
import { Text } from "../../Typography/Text";
import { Fieldset } from "../shared/Fieldset";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { CardFilled } from "../../Card/CardFilled";
import { useState } from "react";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "darkGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: Select.Root,
  parameters: {
    allowedBackgroundColors,
  },
  argTypes: {
    ...disableControls<SelectProps>(["children"]),
  },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 The size prop should be omitted if possible as the component will automatically react to its container, only use it if there is a specific requirement in your design.
 */
export const Default: Story = {
  args: {
    id: "country",
    name: "Land",
    placeholder: "Land",
    children: sbChildren,
    fullWidth: false,
    disabled: false,
  },
};

/**
 Once the number of Options exceeds 4, the Select content will become Scrollable with a custom scrollbar.
 */
export const ScrollableContent: Story = {
  args: {
    ...Default.args,
    children: sbChildrenOverflow,
  },
};

export const WithLinkUnderneath: Story = {
  args: {
    ...ScrollableContent.args,
  },
  render: (args) => (
    <>
      <Select.Root {...args} />
      <br />
      <Text size="medium" variant="light">
        <a href="https://www.google.com">External Link</a> <br />
        <a href="https://www.google.com">External Link</a>
      </Text>
    </>
  ),
};

export const WithinModal: Story = {
  args: {
    ...ScrollableContent.args,
  },
  render: (args) => (
    <>
      <Modal.Root>
        <Modal.Trigger>Mehr Details</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>eSIM</Modal.Title>
          <Modal.Description>
            <Headline variant="bold" size="large" as="h3">
              Wähle ein Land aus
            </Headline>
            <br />
            <Select.Root {...args} />
            <br />
            <Text size="medium" variant="light">
              <a href="https://www.google.com">External Link</a> <br />
              <a href="https://www.google.com">External Link</a>
            </Text>
          </Modal.Description>
        </Modal.Content>
      </Modal.Root>
    </>
  ),
};

/**
 The component accepts multiple error messages, which will be displayed beneath. They will also be appended to the `aria-errormessage` attribute of the input element in a comma seperated List, to improve accessibility.
 */
export const WithErrors: Story = {
  args: {
    ...ScrollableContent.args,
    messages: [
      { message: "bitte wähle ein Land aus", type: "error" },
      { message: "das Land muss in der EU sein", type: "error" },
    ],
  },
};

export const FormExample: Story = {
  args: {
    id: "country",
    name: "Land",
    placeholder: "Land",
    children: sbChildren,
    fullWidth: false,
    disabled: false,

    messages: [
      { message: "bitte wähle ein Land aus", type: "error" },
      { message: "das Land muss in der EU sein", type: "error" },
    ],
  },
  render: (args) => (
    <form>
      <Fieldset>
        <Text
          as="legend"
          variant="bold"
          size="large"
          id="country"
          style={{ marginBottom: "2rem" }}
        >
          Bitte wähle ein Land aus
        </Text>
        <Select.Root {...args} aria-labelledby="country" />
      </Fieldset>
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    ...ScrollableContent.args,
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    ...ScrollableContent.args,
    fullWidth: true,
  },
};

export const NullOption: Story = {
  args: {
    id: "country",
    name: "Land",
    placeholder: "Land",
    children: nullOptionChildren,
  },
};

export const WithPopoverAlignedRight: Story = {
  args: Default.args,
  render: () => (
    <CardFilled.Root backgroundColor="darkGrey" size="small">
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "end",
        }}
      >
        <Select.Root
          id="country"
          name="Land"
          placeholder="Land"
          popoverAlignment="right"
          style={{ maxWidth: "200px" }}
        >
          {sbChildren}
        </Select.Root>
      </div>
    </CardFilled.Root>
  ),
};

export const UnControlledWithDefaultValue: Story = {
  args: { ...Default.args, defaultValue: "se" },
};

const ControlledSelect = (props: SelectProps) => {
  const [value, setValue] = useState<SelectProps["value"]>("se");

  return <Select.Root {...props} value={value} onChange={setValue} />;
};

export const Controlled: Story = {
  args: Default.args,
  render: (args) => <ControlledSelect {...args} />,
};
