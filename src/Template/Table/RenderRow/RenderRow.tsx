import React from 'react';

import TableCell from "@material-ui/core/TableCell";

export const RenderRow = ({ columns, row }:any) => (
    columns.map((key:any) => (
        <TableCell key={key} style={{ width: 500 }} align="center">
            {row[key.toLowerCase()]}
        </TableCell>
    ))
);
