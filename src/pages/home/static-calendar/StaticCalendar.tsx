import { Calendar } from "primereact/calendar";
import React, { useState } from "react";

import { Locale } from "./CalendarUtils";
import { ColorPicker } from "./ColorPicker";

interface StaticCalendarProps {
  showDate: Date;
  daysMap: { arrayIndex: number; daysToMap: [number, number] }[];
}

export const StaticCalendar = ({ showDate }: StaticCalendarProps) => {
  const [date, changeDate] = useState(showDate);

  const dateTemplate = (date: any) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <div
          style={{
            backgroundColor: ColorPicker.getColor([3, 0, 10]), //"#1dcbb3",
            color: "#ffffff",
            fontWeight: "bold",
            borderRadius: "50%",
            width: "2em",
            height: "2em",
            lineHeight: "2em",
            padding: 0
          }}
        >
          {date.day}
        </div>
      );
    } else {
      return date.day;
    }
  };

  const handleDateChanged = (e: {
    originalEvent: Event;
    value: Date | Date[];
  }) => {
    changeDate(e.value as Date);
  };

  return (
    <Calendar
      locale={Locale.hu}
      inline={true}
      readOnlyInput={true}
      selectionMode="multiple"
      onChange={handleDateChanged}
      viewDate={date}
      dateTemplate={dateTemplate}
    />
  );
};
