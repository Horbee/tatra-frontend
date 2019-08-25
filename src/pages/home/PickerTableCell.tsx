import React, { useContext, useEffect } from "react";

import { createStyles, Fab, Icon, makeStyles, Theme } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";

import {
    AvailabilityServiceContext
} from "../../services/availability-service/AvailabilityServiceContext";
import { PickerMenu } from "./availability-table/PickerMenu";

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
  id: string;
}

export const PickerTableCell = ({
  availability,
  personName,
  id,
  week
}: PickerTableCellProps) => {
  const classes = useStyles();
  const anchorRef = React.useRef(null as any);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(availability);

  const { updateAvailability } = useContext(AvailabilityServiceContext);

  useEffect(() => {
    if (selectedIndex !== availability) {
      updateAvailability({
        id,
        personName,
        availabilities: [{ week: week, status: selectedIndex }]
      });
    }
    // eslint-disable-next-line
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
