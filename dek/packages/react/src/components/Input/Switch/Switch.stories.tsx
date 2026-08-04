import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: Switch.Root,
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
} satisfies Meta<typeof Switch.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "einmalpreis",
    name: "einmalpreis",
    disabled: false,
    onCheckedChange: (value: boolean) => {
      console.log(`value is: ${value}`);
    },
  },
  render: (args) => (
    <form>
      <Switch.RootWrapper name="einmalpreis">
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Switch.Root {...args} id={args.id} />
          <Switch.Label htmlFor={args.id} variant="BodyLight14">
            Einmalpreis anzeigen
          </Switch.Label>
        </div>
      </Switch.RootWrapper>
    </form>
  ),
};

export const WithError: Story = {
  args: {
    id: "einmalpreis-error",
    name: "einmalpreis-error",
    disabled: false,
    onCheckedChange: (value: boolean) => {
      console.log(`value is: ${value}`);
    },
  },
  render: (args) => (
    <form>
      <Switch.RootWrapper
        name="einmalpreis-error"
        messages={[
          {
            message: "bitte akzeptiere die Pflicht Option",
            type: "error",
          },
        ]}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Switch.Root {...args} id={args.id} />
          <Switch.Label htmlFor={args.id} variant="BodyLight14">
            Einmalpreis anzeigen
          </Switch.Label>
        </div>
      </Switch.RootWrapper>
    </form>
  ),
};
