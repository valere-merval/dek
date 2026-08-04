import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectionMemory } from "./SelectionMemory";
import { disableControls } from "../../../stories/utils/disableControls";
import { SelectionMemoryRootProps } from "./SelectionMemory.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: SelectionMemory.Root,
  argTypes: {
    defaultValue: {
      control: {
        type: "radio",
      },
      options: ["64 GB", "128 GB"],
    },
    value: {
      control: {
        type: "radio",
      },
      options: ["64 GB", "128 GB"],
    },
    ...disableControls<SelectionMemoryRootProps>(["asChild"]),
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
} satisfies Meta<typeof SelectionMemory.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledMemoryRoot = ({
  children,
  ...rest
}: SelectionMemoryRootProps) => {
  const [value, setValue] = React.useState<string | undefined>(
    rest.defaultValue,
  );

  useEffect(() => {
    if (!rest.value) return;
    setValue(rest.value);
  }, [rest.value]);

  return (
    <SelectionMemory.Root {...rest} onValueChange={setValue} value={value}>
      {children}
    </SelectionMemory.Root>
  );
};

export const Default: Story = {
  args: {
    defaultValue: "64 GB",
    "aria-label": "Speicherplatz",
    onValueChange: (value: string) => console.log(value),
  },
  render: (args) => (
    <ControlledMemoryRoot {...args}>
      <SelectionMemory.Value label="Speicher: " />
      <SelectionMemory.ItemWrapper>
        <SelectionMemory.Item aria-label="64 GB" value="64 GB">
          64 GB
        </SelectionMemory.Item>
        <SelectionMemory.Item aria-label="128 GB" value="128 GB">
          128 GB
        </SelectionMemory.Item>
        <SelectionMemory.Item disabled aria-label="512 GB" value="512 GB">
          512 GB
        </SelectionMemory.Item>
        <SelectionMemory.Item unavailable aria-label="1024 GB" value="1024 GB">
          1024 GB
        </SelectionMemory.Item>
      </SelectionMemory.ItemWrapper>
    </ControlledMemoryRoot>
  ),
};
