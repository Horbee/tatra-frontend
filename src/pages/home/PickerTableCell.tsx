import React from "react";

import { createStyles, Fab, Icon, makeStyles, Theme } from "@material-ui/core";
import { deepOrange, green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fabCheck: {
      margin: theme.spacing(1),
      backgroundColor: green[900]
    },
    fabClose: {
      margin: theme.spacing(1),
      backgroundColor: red[500]
    },
    fabMaybe: {
      margin: theme.spacing(1),
      backgroundColor: deepOrange[600]
    }
  })
);

interface PickerTableCellProps {
  availability: Number;
}

export const PickerTableCell = ({ availability }: PickerTableCellProps) => {
  const classes = useStyles();
  switch (availability) {
    case 1:
      return (
        <Fab color="secondary" aria-label="edit" className={classes.fabCheck}>
          <Icon>check</Icon>
        </Fab>
      );
    case 2:
      return (
        <Fab color="secondary" aria-label="edit" className={classes.fabClose}>
          <Icon>close</Icon>
        </Fab>
      );
    default:
      return (
        <Fab color="secondary" aria-label="edit" className={classes.fabMaybe}>
          <Icon>help</Icon>
        </Fab>
      );
  }
};
