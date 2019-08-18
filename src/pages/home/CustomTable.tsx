import React, { useContext } from "react";

import {
    createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme
} from "@material-ui/core";

import { GlobalStateContext } from "../../context/StateContext";
import { PickerTableCell } from "./PickerTableCell";

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

export const CustomTable = () => {
  const classes = useStyles();
  const {
    state: { data }
  } = useContext(GlobalStateContext);
  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nevek / Dátumok</TableCell>
            <TableCell align="right">Szept 1</TableCell>
            <TableCell align="right">Szept 2</TableCell>
            <TableCell align="right">Szept 3</TableCell>
            <TableCell align="right">Szept 4</TableCell>
            <TableCell align="right">Okt 1</TableCell>
            <TableCell align="right">Okt 2</TableCell>
            <TableCell align="right">Okt 3</TableCell>
            <TableCell align="right">Okt 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => {
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                {weeks.map(week => {
                  const result = row.availabilities.find(
                    availability => availability.week === week
                  );
                  return result ? (
                    <TableCell align="right" key={row.name + week}>
                      <PickerTableCell
                        personName={row.name}
                        week={week}
                        availability={result.availability}
                      />
                    </TableCell>
                  ) : (
                    <TableCell align="right" key={row.name + week}>
                      <PickerTableCell
                        personName={row.name}
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
