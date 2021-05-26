import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import *as selectors from '../../store/store';
import { loadingBorrowedBooks } from '../../store/thunk/thunk';
import { BasicTable } from '../../Template/Table/BooksTableTemplate/BooksTableTemplate';

export const BorrowedBooks = () => {
  const dispatch = useDispatch();
  const borrowedBooks = useSelector(state => selectors.borrowedBooks(state));

  useEffect(() => {
    dispatch(loadingBorrowedBooks());
  }, []);

  const columns = ['Author', 'Title', 'Description', 'Status'];

  return (
    <BasicTable rows={borrowedBooks} columns={columns} />
  );
};
