import { Calendar, DateMetaData } from "primereact/calendar";
import React, { useContext } from "react";

import { GlobalStateContext } from "../../../context/StateContext";
import { Locale } from "./CalendarUtils";
import { ColorPicker } from "./ColorPicker";

interface StaticCalendarProps {
  showDate: Date;
  daysMap: { arrayIndex: number; daysToMap: [number, number] }[];
}

export const StaticCalendar = ({ showDate, daysMap }: StaticCalendarProps) => {
  const {
    state: { votes }
  } = useContext(GlobalStateContext);

  const dateTemplate = (date: DateMetaData) => {
    const dayMap = daysMap.find(map => map.daysToMap.some(d => d === date.day));

    if (dayMap && votes.length > 0) {
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

  return (
    <Calendar
      locale={Locale.hu}
      inline={true}
      readOnlyInput={true}
      viewDate={showDate}
      dateTemplate={dateTemplate}
    />
  );
};
