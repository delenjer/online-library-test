import React from 'react';

import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

export const RenderRow = ({ columns, row, handleDeleteRow }:any) => {

    return (
        <>
            {
                columns.map((key:any) => (
                    <TableCell key={key} style={{ width: 500 }} align="center">
                        {row[key.toLowerCase()]}
                    </TableCell>
                ))
            }

            <TableCell>
                <IconButton
                  aria-label="delete"
                  className="delete-item"
                  onClick={() => handleDeleteRow(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
            </TableCell>
        </>
    );
};
