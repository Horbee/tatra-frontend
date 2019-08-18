import React from "react";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import imgBG from "../../assets/img/bg2.jpg";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${imgBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "400px"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(23, 0, 0, 4)
  }
}));

export const HeroUnit = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Tátra túra 2019
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what&apos;s most interesting in this
              post&apos;s contents.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
