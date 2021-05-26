import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import TablePaginationActions from '../TablePaginationActions/TablePaginationActions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const BasicTable = ({ rows, columns }:any) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();

  const getKeys = () => {
    return rows.length > 0 ? Object.keys(rows[0]) : [];
  }

  const keys = getKeys().filter(item => item !== 'id');

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
              <TableRow>
                <RenderRow row={row} keys={keys} />
                {/*<TableCell style={{ width: 160 }} align="center">{rows[key]}</TableCell>*/}
                {/*<TableCell style={{ width: 400 }} align="center">{rows[key]}</TableCell>*/}
                {/*<TableCell style={{ width: 500 }} align="center">{rows[key]}</TableCell>*/}
                {/*<TableCell style={{ width: 160 }} align="center">{rows[key]}</TableCell>*/}
              </TableRow>
            );
          })}

        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5,{ label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}


const RenderRow = (props:any) => {

  return props.keys.map((key:any)=>{
    return (
      <>
        <TableCell style={{ width: 160 }} align="center">{props.row[key]}</TableCell>
      </>
    )
  })
}
