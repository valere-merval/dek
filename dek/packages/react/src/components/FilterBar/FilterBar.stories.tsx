import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../../index";
import { FilterBar } from "./FilterBar";
import onlyApple, { defaultArgs, differentLabels } from "./FilterBar.mock";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
};

const meta = {
  component: FilterBar.Root,
  argTypes: {
    filters: {
      description: "accepts a `FilterBarFormUnit[]`",
      control: false,
    },
    sorting: {
      description: "accepts a `FilterBarFormUnit`",
      control: false,
    },
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
} satisfies Meta<typeof FilterBar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: defaultArgs,
};

export const SingleManufacturer: Story = {
  args: onlyApple,
};

export const DifferingLabels: Story = {
  args: differentLabels,
};

export const Sticky: Story = {
  args: { ...defaultArgs, stickyOnMobile: true },
  render: (args) => (
    <div style={{ position: "relative" }}>
      <FilterBar.Root {...args} />
      <div style={{ height: "2000px", marginTop: "20px" }}>
        <Text variant="light" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          aperiam consectetur eos esse inventore nobis sed tempora totam vitae.
          Accusamus, aperiam doloremque eligendi eos excepturi facilis id ipsa,
          labore non quasi reprehenderit, saepe voluptate! Delectus ea eius
          incidunt laboriosam quasi. Consequuntur, cupiditate, modi! Consectetur
          debitis mollitia nulla officia quae, quidem.
        </Text>
      </div>
    </div>
  ),
};
