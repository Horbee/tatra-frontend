import { Calendar } from "primereact/calendar";
import React, { useContext, useState } from "react";

import { GlobalStateContext } from "../../../context/StateContext";
import { Locale } from "./CalendarUtils";
import { ColorPicker } from "./ColorPicker";

interface StaticCalendarProps {
  showDate: Date;
  month: number;
  daysMap: { arrayIndex: number; daysToMap: [number, number] }[];
}

export const StaticCalendar = ({
  showDate,
  month,
  daysMap
}: StaticCalendarProps) => {
  const [date, changeDate] = useState(showDate);
  const {
    state: { votes }
  } = useContext(GlobalStateContext);

  const dateTemplate = (date: any) => {
    const dayMap = daysMap.find(map => map.daysToMap.some(d => d === date.day));

    if (dayMap && votes.length > 0) {
      console.log(date.month);
      return (
        <div
          className="selected-date"
          style={{
            backgroundColor: ColorPicker.getColor(votes[dayMap.arrayIndex]) //"#1dcbb3",votes[0]
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
      onSelect={undefined}
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
