import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { tableUseStyles } from '../../../helpers/helpers';
import { ITableTemplate, IUsers } from "../../../interface/interface";
import { RenderTableFooter } from '../RenderTableFooter/RenderTableFooter';
import { RenderRow } from '../RenderRow/RenderRow';

export const TableService = (
  {
    rows,
    columns,
    handleDeleteRow,
    handleEdit,
  }:ITableTemplate
) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = tableUseStyles();

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
            {columns.map((column:string) => (
              <TableCell key={column} align="center">{column}</TableCell>
              ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
          ).map((row:IUsers) => {
            return (
              <TableRow key={row.id}>
                <RenderRow
                  row={row}
                  columns={columns}
                  handleEdit={handleEdit}
                  handleDeleteRow={handleDeleteRow}
                 />
              </TableRow>
            );
          })}
        </TableBody>

        <RenderTableFooter
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          length={rows.length}
        />
      </Table>
    </TableContainer>
  );
}
