import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateField } from "./DateField";
import { disableControls } from "../../../stories/utils/disableControls";
import { CalendarDate } from "@internationalized/date";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
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
  component: DateField,
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
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    size: {
      control: "radio",
      options: ["medium", "large"],
    },
    ...disableControls([
      "id",
      "name",
      "data-testid",
      "shouldForceLeadingZeros",
    ]),
  },
  args: {
    id: "input-id",
    name: "input-name",
    placeholder: "Datum auswählen",
    size: undefined,
    required: false,
    disabled: false,
    fullWidth: false,
    messages: [],
  },
  render: (args) => (
    <form>
      <DateField {...args} />
    </form>
  ),
};

export const WithError: Story = {
  ...Default,
  args: {
    ...Default.args,
    messages: [{ message: "Deine Angabe ist ungültig.", type: "error" }],
  },
};

export const WithPrefilledDate: Story = {
  ...Default,
  args: { ...Default.args, value: new CalendarDate(2011, 11, 11) },
};
