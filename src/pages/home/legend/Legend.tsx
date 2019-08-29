import React from "react";

import { Avatar, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";

import { ColorPicker } from "../static-calendar/ColorPicker";

const useStyles = makeStyles(theme => ({
  legend: {
    margin: 10,
    width: 15,
    height: 15
  }
}));

export const Legend = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Hidden smDown>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          style={{ paddingTop: "5px" }}
        >
          Nagyon nem jó
        </Typography>
      </Hidden>

      {ColorPicker.colors.map(color => (
        <Avatar
          key={color}
          alt={`Color ${color}`}
          className={classes.legend}
          style={{ backgroundColor: color }}
        />
      ))}

      <Hidden smDown>
        <Typography
          variant="caption"
          display="block"
          style={{ paddingTop: "5px" }}
          gutterBottom
        >
          Nagyon jó
        </Typography>
      </Hidden>
    </Grid>
  );
};
