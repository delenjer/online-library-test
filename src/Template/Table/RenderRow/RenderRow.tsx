import React from 'react';

import TableCell from "@material-ui/core/TableCell";

export const RenderRow = ({ columns, row, handleEdit, handleDeleteRow }:any) => {
  const cellAction = (key: any, editElement: any, deleteElement: any, mainElem: any) => {
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
    columns.map((key:any) => (
      <TableCell key={key} style={{ width: 500 }} align="center">
        {
          cellAction(
            key,
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
            row[key.toLowerCase()]
          )
        }
      </TableCell>
    ))
  );
};
