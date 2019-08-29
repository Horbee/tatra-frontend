import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Tátra Túra 2019.
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Összefoglaló a szeptemberi és októberi hétvégékről.
      </Typography>
    </footer>
  );
};
