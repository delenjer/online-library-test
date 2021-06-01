import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { RenderTableFooter } from '../RenderTableFooter/RenderTableFooter';
import { RenderRow } from '../RenderRow/RenderRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const TableTemplate = (
  {
    rows,
    columns,
    handleDeleteRow,
    handleEdit,
  }:any
) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

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
                <TableCell>
                  <button
                    className="edit-row__btn"
                    type="button"
                    onClick={() => handleEdit(row.id)}
                  >
                    <span className="material-icons">edit_note</span>
                  </button>
                </TableCell>


                <RenderRow row={row} columns={columns} />

                <TableCell>
                  <button
                    className="delete-row__btn"
                    type="button"
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>
                </TableCell>
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
