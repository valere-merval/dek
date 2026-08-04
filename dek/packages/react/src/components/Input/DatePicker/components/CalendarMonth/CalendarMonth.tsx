import React, { forwardRef } from "react";
import {
  CalendarGridBody,
  CalendarGridHeader,
  HeadingContext,
  HeadingProps,
  useContextProps,
} from "react-aria-components";
import * as Styled from "./CalendarMonth.styles";
import { CalendarDate, isSameDay } from "@internationalized/date";
import { CalendarMonthProps } from "./CalendarMonth.types";

const CustomHeading = forwardRef(
  (
    {
      monthIndex,
      ...props
    }: {
      /**
       * Should be the index of the visible calendar month. Only works with 0 and 1
       */
      monthIndex: CalendarMonthProps["index"];
    } & HeadingProps,
    ref: React.ForwardedRef<HTMLHeadingElement>,
  ) => {
    const [{ children, ...rest }, combinedRef] = useContextProps(
      props,
      ref,
      HeadingContext,
    );

    let headingString = children;

    const monthsBetweenTurnOfYear = (months: string) => {
      return months.includes(" – ") || months.includes(" – ");
    };

    if (
      monthIndex <= 1 &&
      typeof children === "string" &&
      children.includes("–")
    ) {
      if (monthsBetweenTurnOfYear(children)) {
        const months = children.split("–");
        headingString = `${months[monthIndex].trim()}`;
      } else {
        const [months, year] = children.split(" ");
        headingString = `${months.split("–")[monthIndex]} ${year}`;
      }
    }

    return (
      <Styled.CalenderHeadingWrapper>
        <Styled.CalendarHeading {...rest} aria-hidden={false} ref={combinedRef}>
          {headingString}
        </Styled.CalendarHeading>
      </Styled.CalenderHeadingWrapper>
    );
  },
);
CustomHeading.displayName = "DatePicker.Heading";

export const CalenderMonth = ({ index }: CalendarMonthProps) => {
  const today = new Date();
  /**
   * getMonth() returns the index of the month starting with 0 for january, so we have to add 1 to get the correct number
   */
  const isToday = (date: CalendarDate) =>
    isSameDay(
      date,
      new CalendarDate(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate(),
      ),
    )
      ? true
      : null;

  return (
    <Styled.CalendarMonth>
      <CustomHeading monthIndex={index} />
      <Styled.CalendarGrid offset={{ months: index }}>
        <CalendarGridHeader>
          {(day) => (
            <Styled.CalendarHeaderCell>{day}</Styled.CalendarHeaderCell>
          )}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => (
            <Styled.CalendarCell date={date} data-today={isToday(date)} />
          )}
        </CalendarGridBody>
      </Styled.CalendarGrid>
    </Styled.CalendarMonth>
  );
};
