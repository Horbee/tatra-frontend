import { Calendar } from "primereact/calendar";
import React, { useState } from "react";

import { Locale } from "../static-calendar/CalendarUtils";

interface StaticCalendarProps {
  showDate: Date;
}

const dateTemplate = (date: any) => {
  if (date.day > 10 && date.day < 15) {
    return (
      <div
        style={{
          backgroundColor: "#1dcbb3",
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

export const StaticCalendar = ({ showDate }: StaticCalendarProps) => {
  const [date, changeDate] = useState(showDate);

  const dates = [
    new Date("10-01-2019"),
    new Date("10-02-2019"),
    new Date("10-03-2019")
  ];

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
      value={dates}
      onChange={handleDateChanged}
      viewDate={date}
      dateTemplate={dateTemplate}
    />
  );
};
