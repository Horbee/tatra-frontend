import { Calendar } from "primereact/calendar";
import React, { useState } from "react";

import { Locale } from "./CalendarUtils";

interface StaticCalendarProps {
  showDate: Date;
  dateTemplate?: any;
}

export const StaticCalendar = ({
  showDate,
  dateTemplate
}: StaticCalendarProps) => {
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
