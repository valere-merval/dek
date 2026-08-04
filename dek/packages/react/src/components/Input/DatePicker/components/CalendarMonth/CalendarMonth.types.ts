import { ComponentPropsWithoutRef } from "react";

export interface CalendarMonthProps extends ComponentPropsWithoutRef<"div"> {
  index: 0 | 1;
}
