import React from "react";

import { Container, CssBaseline, Grid, makeStyles, Paper } from "@material-ui/core";

import { CustomTable } from "./custom-table/CustomTable";
import { StaticCalendar } from "./custom-table/StaticCalendar";
import { Footer } from "./Footer";
import { HeroUnit } from "./HeroUnit";

const useStyles = makeStyles(theme => ({
  calendarPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0)
  },
  tableGrid: {
    paddingBottom: theme.spacing(3)
  },
  calendarItem: {
    paddingRight: theme.spacing(2)
  }
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <HeroUnit />
        <Container className={classes.tableGrid} maxWidth="lg">
          <Paper className={classes.calendarPaper}>
            <Grid container justify="center">
              <Grid item className={classes.calendarItem}>
                <StaticCalendar showDate={new Date("09-01-2019")} />
              </Grid>
              <Grid item>
                <StaticCalendar showDate={new Date("10-02-2019")} />
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ height: 400, width: "100%" }}>
            <CustomTable />
          </Paper>
        </Container>
      </main>
      <Footer />
    </>
  );
};
