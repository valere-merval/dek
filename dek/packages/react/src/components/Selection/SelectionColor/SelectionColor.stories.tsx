import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectionColor } from "./SelectionColor";
import { disableControls } from "../../../stories/utils/disableControls";
import { SelectionColorRootProps } from "./SelectionColor.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: SelectionColor.Root,
  argTypes: {
    defaultValue: {
      control: {
        type: "radio",
      },
      options: ["Rot", "Hellgrün", "Pink", "Dunkelblau"],
    },
    value: {
      control: {
        type: "radio",
      },
      options: ["Rot", "Hellgrün", "Pink", "Dunkelblau"],
    },
    ...disableControls<SelectionColorRootProps>(["asChild"]),
  },
  parameters: { allowedBackgroundColors },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof SelectionColor.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledColorRoot = ({
  children,
  ...rest
}: SelectionColorRootProps) => {
  const [value, setValue] = React.useState<string | undefined>(
    rest.defaultValue,
  );

  useEffect(() => {
    if (!rest.value) return;
    setValue(rest.value);
  }, [rest.value]);

  return (
    <SelectionColor.Root {...rest} onValueChange={setValue} value={value}>
      {children}
    </SelectionColor.Root>
  );
};

export const Default: Story = {
  args: {
    defaultValue: "Rot",
    "aria-label": "Farbauswahl",
    onValueChange: (v: string) => console.log(v),
  },
  render: (args) => (
    <ControlledColorRoot {...args}>
      <SelectionColor.Value label="Farbe: " />
      <SelectionColor.ItemWrapper>
        <SelectionColor.Item hexValue="#DF251F" aria-label="Rot" value="Rot" />
        <SelectionColor.Item
          hexValue="#D5F29F"
          aria-label="Hellgrün"
          value="Hellgrün"
        />
        <SelectionColor.Item
          hexValue="#c9B9FF"
          aria-label="Pink"
          value="Pink"
        />
        <SelectionColor.Item
          hexValue="#0B5688"
          aria-label="Dunkelblau"
          value="Dunkelblau"
        />
        <SelectionColor.Item
          hexValue="#000"
          aria-label="Schwarz"
          value="Schwarz"
        />
      </SelectionColor.ItemWrapper>
    </ControlledColorRoot>
  ),
};
