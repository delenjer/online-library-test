import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import *as selectors from '../../store/store';
import { loadingBorrowedBooks } from '../../store/thunk/thunk';
import { TableTemplate } from '../../Template/Table/TableTemplate/TableTemplate';
import { getBorrowedBooks } from '../../store/borrowedBooksReducer/action';

export const BorrowedBooks = () => {
  const dispatch = useDispatch();
  const borrowedBooks = useSelector(state => selectors.borrowedBooks(state));

  useEffect(() => {
    dispatch(loadingBorrowedBooks());
  }, []);

  const columns = ['Authors', 'Title', 'Description', 'Status'];

  const handleDeleteRow = (id:string) => {

    dispatch(
      getBorrowedBooks([...borrowedBooks.filter((item:any) => item.id !== id)])
    );
  }

  return (
    <TableTemplate rows={borrowedBooks} columns={columns} handleDeleteRow={handleDeleteRow} />
  );
};
