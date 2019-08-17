import React, { useState } from "react";

import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setSelectedDate(date as any);
    console.log(date);
  };

  return <DatePicker value={selectedDate} onChange={handleDateChange} />;
};
