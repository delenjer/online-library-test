import React, { FC } from 'react';

import { IRenderRow } from "../../../interface/interface";
import TableCell from "@material-ui/core/TableCell";

export const RenderRow: FC<IRenderRow> = ({ columns, row, handleEdit, handleDeleteRow }) => {

  const cellAction = (key: string, editElement: JSX.Element, deleteElement: JSX.Element, mainElem: string) => {

    switch (key) {
      case 'Edit':
        return editElement;

      case 'Delete':
        return deleteElement;

      default:
        return mainElem;
    }
  }

  return (
    <>
      {
        columns.map((column:any) => {

          return (
            <TableCell key={column} style={{ width: 500 }} align="center">
              {
                cellAction(
                  column,
                  <button
                    className="edit-row__btn" type="button"
                    onClick={() => handleEdit(row.id)}
                  >
                    <span className="material-icons">edit_note</span>
                  </button>,
                  <button
                    className="delete-row__btn"
                    type="button"
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    <span className="material-icons">delete_outline</span>
                  </button>,
                  row[column.toLowerCase()]
                )
              }
            </TableCell>
          );
        })
      }
    </>
  );
};
