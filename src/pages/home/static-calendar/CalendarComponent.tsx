import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import { ColorPicker } from "./ColorPicker";
import { StaticCalendar } from "./StaticCalendar";

const useStyles = makeStyles(theme => ({
  calendarItem: {
    paddingRight: theme.spacing(2)
  }
}));

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

export const CalendarComponent = () => {
  const classes = useStyles();

  console.log(ColorPicker.getColor([2, 1, 3]));

  return (
    <Grid container justify="center">
      <Grid item className={classes.calendarItem}>
        <StaticCalendar showDate={new Date("09-01-2019")} />
      </Grid>
      <Grid item>
        <StaticCalendar
          showDate={new Date("10-02-2019")}
          dateTemplate={dateTemplate}
        />
      </Grid>
    </Grid>
  );
};
