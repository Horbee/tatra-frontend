import React from "react";

import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";

import { CustomTable } from "./custom-table/CustomTable";
import { Footer } from "./Footer";
import { HeroUnit } from "./HeroUnit";
import { Legend } from "./legend/Legend";
import { CalendarComponent } from "./static-calendar/CalendarComponent";

const useStyles = makeStyles(theme => ({
  calendarPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0)
  },
  tableGrid: {
    paddingBottom: theme.spacing(3)
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
            <CalendarComponent />
            <Legend />
          </Paper>
          <Paper style={{ width: "100%", overflowX: "auto" }}>
            <CustomTable />
          </Paper>
        </Container>
      </main>
      <Footer />
    </>
  );
};
