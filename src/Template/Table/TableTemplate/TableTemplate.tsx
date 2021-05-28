import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { RenderRow } from "../RenderRow/RenderRow";
import { RenderTableFooter } from "../RenderTableFooter/RenderTableFooter";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const TableTemplate = ({ rows, columns, handleDeleteRow }:any) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column:any) => (
              <TableCell key={column} align="center">{column}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
          ).map((row:any) => {
            return (
              <TableRow key={row.id}>
                <RenderRow row={row} columns={columns} handleDeleteRow={handleDeleteRow} />
              </TableRow>
            );
          })}

        </TableBody>
        <RenderTableFooter
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
}
