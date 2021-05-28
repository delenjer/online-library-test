import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import *as selectors from '../../store/store';
import { loadingReturnedBooks } from '../../store/thunk/thunk';
import { getActiveBooks } from "../../store/activeBooksReducer/action";
import { DashboardWrap } from "../Dashboard/Dashboard";

export const ReturnedBooks = () => {
  const dispatch = useDispatch();
  const returnedBooks = useSelector(state => selectors.activeBooks(state));

  useEffect(() => {
    dispatch(loadingReturnedBooks());
  }, []);

  const columns = ['Authors', 'Title', 'Description', 'Status'];
  const newBook = {
    authors: '',
    title: '',
    description: '',
    status: 'completed',
    id: '',
  }
  const fieldsOptions = [
    {name: 'authors', placeholder: 'Author name'},
    {name: 'title', placeholder: 'Book title'},
    {name: 'description', placeholder: 'Small description'},
  ];

  const handleDeleteRow = (id:string) => {

    dispatch(
      getActiveBooks([...returnedBooks.filter((item:any) => item.id !== id)])
    );
  }

  return (
    <DashboardWrap
      rows={returnedBooks}
      columns={columns}
      handleDeleteRow={handleDeleteRow}
      fieldsOptions={fieldsOptions}
      addNewToList={newBook}
      ButtonTitle="Add book"
    />
  );
};
