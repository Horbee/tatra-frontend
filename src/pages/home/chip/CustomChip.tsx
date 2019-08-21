import React from "react";

import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  orangeAvatar: {
    margin: 10,
    width: 15,
    height: 15
  }
}));

export const CustomChip = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        style={{ paddingTop: "5px" }}
      >
        Nagyon nem jó
      </Typography>
      <Avatar
        alt="Color red deep"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#801313" }}
      />
      <Avatar
        alt="Color red middle"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#b71c1c" }}
      />
      <Avatar
        alt="Color red light"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#c54949" }}
      />
      <Avatar
        alt="Color yellow"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#ff9800" }}
      />
      <Avatar
        alt="Color green light"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#81c784" }}
      />
      <Avatar
        alt="Color green middle"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#43a047" }}
      />
      <Avatar
        alt="Color green deep"
        className={classes.orangeAvatar}
        style={{ backgroundColor: "#1b5e20" }}
      />
      <Typography
        variant="caption"
        display="block"
        style={{ paddingTop: "5px" }}
        gutterBottom
      >
        Nagyon jó
      </Typography>
    </Grid>
  );
};
