import React, { useContext } from "react";

import {
    createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme
} from "@material-ui/core";

import { GlobalStateContext } from "../../../context/StateContext";
import { PickerTableCell } from "../PickerTableCell";

const weeks = [0, 1, 2, 3, 4, 5, 6, 7];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    }
  })
);

interface TableRow {
  personName: string;
  weekends: Number[];
}

export const AvailabilityTable = () => {
  const classes = useStyles();
  const {
    state: { availabilityArray: data }
  } = useContext(GlobalStateContext);
  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nevek / Dátumok</TableCell>
            <TableCell align="right">Szept. 7-8 </TableCell>
            <TableCell align="right">Szept. 14-15</TableCell>
            <TableCell align="right">Szept. 21-22</TableCell>
            <TableCell align="right">Szept. 28-29</TableCell>
            <TableCell align="right">Okt. 5-6</TableCell>
            <TableCell align="right">Okt. 12-13</TableCell>
            <TableCell align="right">Okt. 19-20</TableCell>
            <TableCell align="right">Okt. 26-27</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => {
            return (
              <TableRow key={row.personName}>
                <TableCell component="th" scope="row">
                  {row.personName}
                </TableCell>
                {weeks.map(week => {
                  const result = row.availabilities.find(
                    availability => availability.week === week
                  );
                  return result ? (
                    <TableCell align="right" key={row.personName + week}>
                      <PickerTableCell
                        id={row.id}
                        personName={row.personName}
                        week={week}
                        availability={result.status}
                      />
                    </TableCell>
                  ) : (
                    <TableCell align="right" key={row.personName + week}>
                      <PickerTableCell
                        id={row.id}
                        personName={row.personName}
                        week={week}
                        availability={0}
                      />
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
