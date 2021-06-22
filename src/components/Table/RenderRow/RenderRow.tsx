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
                    className="row-btn row-btn__edit" type="button"
                    onClick={() => handleEdit(row.id)}
                  >
                    <span className="material-icons row-btn--edit">edit_note</span>
                  </button>,
                  <button
                    className="row-btn"
                    type="button"
                    onClick={() => handleDeleteRow(row.id)}
                  >
                    <span className="material-icons row-btn--delete">delete_outline</span>
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
