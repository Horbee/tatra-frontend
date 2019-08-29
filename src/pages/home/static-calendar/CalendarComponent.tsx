import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import { StaticCalendar } from "./StaticCalendar";

const useStyles = makeStyles(theme => ({
  calendarItem: {
    padding: theme.spacing(2)
  }
}));

export const CalendarComponent = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item className={classes.calendarItem}>
        <StaticCalendar
          showDate={new Date("09-01-2019")}
          daysMap={[
            { arrayIndex: 0, daysToMap: [7, 8] },
            { arrayIndex: 1, daysToMap: [14, 15] },
            { arrayIndex: 2, daysToMap: [21, 22] },
            { arrayIndex: 3, daysToMap: [28, 29] }
          ]}
        />
      </Grid>
      <Grid item className={classes.calendarItem}>
        <StaticCalendar
          showDate={new Date("10-01-2019")}
          daysMap={[
            { arrayIndex: 4, daysToMap: [5, 6] },
            { arrayIndex: 5, daysToMap: [12, 13] },
            { arrayIndex: 6, daysToMap: [19, 20] },
            { arrayIndex: 7, daysToMap: [26, 27] }
          ]}
        />
      </Grid>
    </Grid>
  );
};
