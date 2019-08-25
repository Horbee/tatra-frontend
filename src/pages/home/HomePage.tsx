import React from "react";

import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";

import { CustomTable } from "./custom-table/CustomTable";
import { Footer } from "./Footer";
import { HeroUnit } from "./HeroUnit";
import { Legend } from "./legend/Legend";
import { CalendarComponent } from "./static-calendar/CalendarComponent";

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: theme.spacing(3)
  },
  calendarPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0)
  },
  tablePaper: {
    width: "100%",
    overflowX: "auto"
  }
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <HeroUnit />
        <Container className={classes.container} maxWidth="lg">
          <Paper className={classes.calendarPaper}>
            <CalendarComponent />
            <Legend />
          </Paper>
          <Paper className={classes.tablePaper}>
            <CustomTable />
          </Paper>
        </Container>
      </main>
      <Footer />
    </>
  );
};
