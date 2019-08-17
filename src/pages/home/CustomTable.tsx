import React from "react";

import {
    createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme
} from "@material-ui/core";

import { PickerTableCell } from "./PickerTableCell";

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
  const rows: TableRow[] = [
    { personName: "Peti", weekends: [0, 1, 2, 0, 1, 3, 4, 1] },
    { personName: "Norbi", weekends: [0, 1, 2, 0, 1, 3, 4, 1] },
    { personName: "Dori", weekends: [0, 1, 2, 0, 1, 3, 4, 1] }
  ];

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
          {rows.map(row => (
            <TableRow key={row.personName}>
              <TableCell component="th" scope="row">
                {row.personName}
              </TableCell>
              {row.weekends.map(weekend => (
                <TableCell align="right">
                  <PickerTableCell availability={weekend} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
