import React, { useState } from "react";

import {
    Avatar, Container, createStyles, FormControl, Grid, Icon, IconButton, InputLabel, makeStyles,
    MenuItem, Paper, Select, Theme, Tooltip, Typography
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

import { CustomDatePicker } from "./CustomDatePicker";
import { StaticCalendar } from "./static-calendar/StaticCalendar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: theme.palette.text.secondary
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    orangeAvatar: {
      margin: 10,
      color: "#fff",
      backgroundColor: deepOrange[500]
    }
  })
);

type Availablities = "available" | "notavailable" | "maybe";

export const HomePage = () => {
  const [availablity, setAvailability] = useState<Availablities>("available");

  const handleAvailabilityChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => {
    setAvailability(event.target.value as Availablities);
  };

  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={6} md={6} lg={4}>
            <Paper className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item xs={2} justify="center">
                  <Avatar className={classes.orangeAvatar}>N</Avatar>
                  <Typography>Norbi</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Tól: </Typography>
                  <CustomDatePicker />
                </Grid>
                <Grid item xs={3}>
                  <Typography>Ig: </Typography>
                  <CustomDatePicker />
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="availability-picker">
                      Jó, nem jó:
                    </InputLabel>
                    <Select
                      value={availablity}
                      onChange={handleAvailabilityChange}
                      inputProps={{
                        name: "availability",
                        id: "availability-picker"
                      }}
                    >
                      <MenuItem value={"available"}>Jó</MenuItem>
                      <MenuItem value={"notavailable"}>Nem jó</MenuItem>
                      <MenuItem value={"maybe"}>Talán</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={1}>
                  <Tooltip title="Elküldés">
                    <IconButton
                      color="primary"
                      className={classes.button}
                      aria-label="send availability"
                    >
                      <Icon>send</Icon>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
      {/*<StaticCalendar />*/}
    </Container>
  );
};
