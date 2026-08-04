import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker";
import { DateValue } from "react-aria-components";
import { CalendarDate } from "@internationalized/date";
import { DatePickerProps } from "./DatePicker.types";
import { FormFieldMessages } from "../shared/FieldMessages";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey", "darkGrey"],
};

const meta = {
  component: DatePicker,
  argTypes: {
    value: {
      description:
        "This prop is read-only and cannot be configured in this story. It is only visible for documentation purposes.",
    },
    onChange: {
      description:
        "This prop is read-only and cannot be configured in this story. It is only visible for documentation purposes.",
    },
  },
  parameters: {
    date: new Date("April 23, 2024 10:00:00"),
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
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledDatePicker = ({
  messages: defaultMessages,
  ...rest
}: DatePickerProps) => {
  const [value, setValue] = useState<DateValue | undefined>(rest.value);
  const [messages, setMessages] = useState<FormFieldMessages | undefined>(
    defaultMessages,
  );

  const handleChange = (newDate: DateValue) => {
    if (newDate) {
      setMessages(undefined);
    } else {
      setMessages(defaultMessages);
    }
    setValue(newDate);
  };

  return (
    <DatePicker
      {...rest}
      messages={messages}
      value={value}
      onChange={handleChange}
    />
  );
};
ControlledDatePicker.displayName = "DatePicker";

export const Default: Story = {
  args: {
    id: "appointment",
    name: "appointment",
    placeholder: "Datum auswählen",
    required: false,
    disabled: false,
    messages: [],
    fullWidth: false,
    calendarProps: {
      minValue: new CalendarDate(2024, 3, 1),
      maxValue: new CalendarDate(2024, 5, 31),
      defaultFocusedValue: new CalendarDate(2024, 3, 31),
      isDateUnavailable: (date: DateValue) =>
        ![
          "2024-3-30",
          "2024-3-31",
          "2024-4-1",
          "2024-4-2",
          "2024-4-3",
          "2024-4-4",
          "2024-4-5",
          "2024-4-8",
          "2024-4-9",
          "2024-4-23",
          "2024-4-25",
        ].includes(`${date.year}-${date.month}-${date.day}`),
    },
  },
  render: (args) => <ControlledDatePicker {...args} />,
};

export const WithPreselectedDate: Story = {
  args: {
    ...Default.args,
    value: new CalendarDate(2024, 4, 1),
  },
  render: (args) => <ControlledDatePicker {...args} />,
};

export const WithError: Story = {
  args: {
    ...Default.args,
    messages: [{ message: "Bitte wähle ein Datum aus.", type: "error" }],
  },
  render: (args) => <ControlledDatePicker {...args} />,
};

export const WithoutFixedTimePeriod: Story = {
  args: {
    ...Default.args,
    calendarProps: {
      defaultFocusedValue: new CalendarDate(2024, 12, 15),
    },
  },
  render: (args) => <ControlledDatePicker {...args} />,
};
