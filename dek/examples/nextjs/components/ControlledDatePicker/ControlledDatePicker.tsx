import { CalendarDate, DateValue } from "@internationalized/date";
import { DatePicker } from "@fair/react";
import { useState } from "react";

export const ControlledDatePicker = () => {
  const [value, setValue] = useState<DateValue | undefined>();

  const handleChange = (newDate: DateValue) => {
    setValue(newDate);
  };

  return (
    <DatePicker
      id="appointment"
      name="appointment"
      placeholder="Datum auswählen"
      calendarProps={{
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
      }}
      value={value}
      onChange={handleChange}
    />
  );
};
