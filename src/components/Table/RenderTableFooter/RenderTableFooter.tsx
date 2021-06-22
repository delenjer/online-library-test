import React, { FC } from 'react';

import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "../TablePaginationActions/TablePaginationActions";
import TableFooter from "@material-ui/core/TableFooter";
import { IRenderTableFooter } from "../../../interface/interface";

export const RenderTableFooter: FC<IRenderTableFooter> = (
  {
    length,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage
  }
) => {

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5,{ label: 'All', value: -1 }]}
          colSpan={3}
          count={length}
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
