import React from 'react';

import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "../TablePaginationActions/TablePaginationActions";
import TableFooter from "@material-ui/core/TableFooter";

export const RenderTableFooter = (
  {
    rows,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage
  }:any
) => {

  return (
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
  );
}
