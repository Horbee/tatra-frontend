import React, { useState } from "react";

import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export const StaticCalendar = () => {
  const [date, changeDate] = useState(new Date());

  const handleDateChanged = (date: MaterialUiPickersDate) => {
    changeDate(date as any);
  };

  return (
    <DatePicker
      autoOk
      orientation="landscape"
      variant="static"
      openTo="date"
      value={date}
      onChange={handleDateChanged}
    />
  );
};
