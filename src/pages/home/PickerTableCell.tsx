import React, { useContext, useEffect } from "react";

import { createStyles, Fab, Icon, makeStyles, Theme } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";

import { SET_AVAILABILITY } from "../../context/actions";
import { GlobalStateContext } from "../../context/StateContext";
import { PickerMenu } from "./custom-table/PickerMenu";

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
      backgroundColor: grey[500]
    }
  })
);

interface PickerTableCellProps {
  availability: number;
  week: number;
  personName: string;
}

export const PickerTableCell = ({
  availability,
  personName,
  week
}: PickerTableCellProps) => {
  const classes = useStyles();
  const anchorRef = React.useRef(null as any);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(availability);

  const { dispatch } = useContext(GlobalStateContext);

  useEffect(() => {
    if (selectedIndex !== availability) {
      console.log("selectedIndex changed", personName, week, selectedIndex);
      dispatch({
        type: SET_AVAILABILITY,
        name: {
          personName: personName,
          availabilities: [{ week: week, status: selectedIndex }]
        }
      });
    }
  }, [selectedIndex]);

  switch (availability) {
    case 1:
      return (
        <>
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fabCheck}
            ref={anchorRef}
            onClick={() => setMenuOpen(prevOpen => !prevOpen)}
          >
            <Icon>check</Icon>
          </Fab>
          <PickerMenu
            anchor={anchorRef}
            open={menuOpen}
            setOpen={setMenuOpen}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </>
      );
    case 2:
      return (
        <>
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fabClose}
            ref={anchorRef}
            onClick={() => setMenuOpen(prevOpen => !prevOpen)}
          >
            <Icon>close</Icon>
          </Fab>
          <PickerMenu
            anchor={anchorRef}
            open={menuOpen}
            setOpen={setMenuOpen}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </>
      );
    default:
      return (
        <>
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fabMaybe}
            ref={anchorRef}
            onClick={() => setMenuOpen(prevOpen => !prevOpen)}
          >
            <Icon>help</Icon>
          </Fab>
          <PickerMenu
            anchor={anchorRef}
            open={menuOpen}
            setOpen={setMenuOpen}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </>
      );
  }
};
