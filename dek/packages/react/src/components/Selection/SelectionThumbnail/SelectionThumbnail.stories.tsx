import React, { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectionThumbnail } from "./SelectionThumbnail";
import { disableControls } from "../../../stories/utils/disableControls";
import { SelectionThumbnailRootProps } from "./SelectionThumbnail.types";

import frontImage from "../../../../.storybook/assets/images/google-pixel-7a-sea-handyangebot-detail-0.png";
import sideImage from "../../../../.storybook/assets/images/google-pixel-7a-sea-detail-90.png";
import backImage from "../../../../.storybook/assets/images/google-pixel-7a-sea-detail-180.png";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: SelectionThumbnail.Root,
  argTypes: {
    defaultValue: {
      control: {
        type: "radio",
      },
      options: ["side", "front", "back"],
    },
    value: {
      control: {
        type: "radio",
      },
      options: ["side", "front", "back"],
    },
    ...disableControls<SelectionThumbnailRootProps>(["asChild"]),
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
} satisfies Meta<typeof SelectionThumbnail.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledThumbnailRoot = ({
  children,
  ...rest
}: SelectionThumbnailRootProps) => {
  const [value, setValue] = React.useState<string | undefined>(
    rest.defaultValue,
  );

  useEffect(() => {
    if (!rest.value) return;
    setValue(rest.value);
  }, [rest.value]);

  return (
    <SelectionThumbnail.Root {...rest} onValueChange={setValue} value={value}>
      {children}
    </SelectionThumbnail.Root>
  );
};

export const Default: Story = {
  args: {
    defaultValue: "front",
    "aria-label": "Ansichtsauswahl",
    onValueChange: (v: string) => console.log(v),
  },
  render: (args) => (
    <ControlledThumbnailRoot {...args}>
      <SelectionThumbnail.Item aria-label="Frontansicht" value="front">
        {front}
      </SelectionThumbnail.Item>
      <SelectionThumbnail.Item aria-label="Seitansicht" value="side">
        {side}
      </SelectionThumbnail.Item>
      <SelectionThumbnail.Item aria-label="Rückansicht" value="back">
        {back}
      </SelectionThumbnail.Item>
    </ControlledThumbnailRoot>
  ),
};

const front = <img src={frontImage} alt="Frontansicht des Google Pixel" />;

const side = <img src={sideImage} alt="Seitansicht des Google Pixel" />;

const back = <img src={backImage} alt="Rückansicht des Google Pixel" />;
