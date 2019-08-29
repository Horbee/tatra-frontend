import React, { useContext, useEffect, useRef, useState } from "react";

import { Fab, Icon, makeStyles } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";

import { WEEKSTATUS_GOOD, WEEKSTATUS_NOT_GOOD } from "../../../constants/globals";
import {
    AvailabilityServiceContext
} from "../../../services/availability-service/AvailabilityServiceContext";
import { PickerMenu } from "./PickerMenu";

const useStyles = makeStyles(theme => ({
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
}));

interface PickerTableCellProps {
  initialWeekStatus: number;
  week: number;
  personName: string;
  id: string;
}

export const PickerTableCell: React.FC<PickerTableCellProps> = ({
  initialWeekStatus,
  personName,
  id,
  week
}) => {
  const classes = useStyles();
  const anchorRef = useRef(null as any);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(initialWeekStatus);

  const { updateAvailability } = useContext(AvailabilityServiceContext);

  useEffect(() => {
    if (selectedIndex !== initialWeekStatus) {
      updateAvailability({
        id,
        personName,
        availabilities: [{ week: week, status: selectedIndex }]
      });
    }
    // eslint-disable-next-line
  }, [selectedIndex]);

  const cellIcon = () => {
    switch (initialWeekStatus) {
      case WEEKSTATUS_GOOD:
        return (
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fabCheck}
            ref={anchorRef}
            onClick={() => setMenuOpen(prevOpen => !prevOpen)}
          >
            <Icon>check</Icon>
          </Fab>
        );
      case WEEKSTATUS_NOT_GOOD:
        return (
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fabClose}
            ref={anchorRef}
            onClick={() => setMenuOpen(prevOpen => !prevOpen)}
          >
            <Icon>close</Icon>
          </Fab>
        );
      default:
        return (
          <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fabMaybe}
            ref={anchorRef}
            onClick={() => setMenuOpen(prevOpen => !prevOpen)}
          >
            <Icon>help</Icon>
          </Fab>
        );
    }
  };

  return (
    <>
      {cellIcon()}
      <PickerMenu
        anchor={anchorRef}
        open={menuOpen}
        setOpen={setMenuOpen}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
};
