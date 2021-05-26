import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import *as selectors from '../../store/store';
import { loadingReturnedBooks } from '../../store/thunk/thunk';
import { BasicTable } from '../../Template/Table/BooksTableTemplate/BooksTableTemplate';

export const ReturnedBooks = () => {
  const dispatch = useDispatch();
  const returnedBooks = useSelector(state => selectors.returnedBooks(state));


  useEffect(() => {
    dispatch(loadingReturnedBooks());
  }, []);

  const columns = ['Author', 'Title', 'Description', 'Status'];

  return (
    <BasicTable rows={returnedBooks} columns={columns} />
  );
};
