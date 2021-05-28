import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import *as selectors from '../../store/store';
import { loadingBorrowedBooks } from '../../store/thunk/thunk';
import { getActiveBooks } from '../../store/activeBooksReducer/action';
import { DashboardWrap } from "../Dashboard/Dashboard";

export const BorrowedBooks = () => {
  const dispatch = useDispatch();
  const borrowedBooks = useSelector(state => selectors.activeBooks(state));

  useEffect(() => {
    dispatch(loadingBorrowedBooks());
  }, []);

  const columns = ['Authors', 'Title', 'Description', 'Status'];
  const newBook = {
    authors: '',
    title: '',
    description: '',
    status: 'pending',
    id: '',
  }
  const fieldsOptions = [
    {name: 'authors', placeholder: 'Author name'},
    {name: 'title', placeholder: 'Book title'},
    {name: 'description', placeholder: 'Small description'},
  ];

  const handleDeleteRow = (id:string) => {

    dispatch(
      getActiveBooks([...borrowedBooks.filter((item:any) => item.id !== id)])
    );
  }

  return (
    <DashboardWrap
      rows={borrowedBooks}
      columns={columns}
      handleDeleteRow={handleDeleteRow}
      fieldsOptions={fieldsOptions}
      addNewToList={newBook}
      ButtonTitle="Add book"
    />
  );
};
