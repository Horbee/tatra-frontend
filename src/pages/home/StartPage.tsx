import React from "react";

import {
    AppBar, Container, CssBaseline, Grid, makeStyles, Paper, Toolbar, Typography
} from "@material-ui/core";

import { CustomTable } from "./CustomTable";
import { Footer } from "./Footer";
import { HeroUnit } from "./HeroUnit";
import { StaticCalendar } from "./static-calendar/StaticCalendar";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  calendarPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0)
  },
  tableGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export const StartPage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Tatra tura 2019
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <HeroUnit />

        <Container className={classes.tableGrid} maxWidth="lg">
          <Paper className={classes.calendarPaper}>
            <Grid container justify="center">
              <Grid item>
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
