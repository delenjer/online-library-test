import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { IDeleteElement, IState } from "../../interface/interface";
import *as selectors from '../../store/store';
import { loadingReturnedBooks } from '../../store/thunk/thunk';
import { getActiveBooks } from "../../store/activeBooksReducer/action";
import { DashboardWrap } from "../Dashboard/Dashboard";
import Button from "@material-ui/core/Button";

export const ReturnedBooks = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const returnedBooks = useSelector((state: IState) => selectors.activeBooks(state));

  useEffect(() => {
    dispatch(loadingReturnedBooks());
  }, []);

  const columns = ['Authors', 'Title', 'Description', 'Status', 'Delete'];
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
      getActiveBooks([...returnedBooks.filter((book:IDeleteElement) => book.id !== id)])
    );
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        Add book
      </Button>

      <section className="table-wrap">
        <DashboardWrap
          rows={returnedBooks}
          columns={columns}
          handleDeleteRow={handleDeleteRow}
          fieldsOptions={fieldsOptions}
          addNewToList={newBook}
          ButtonTitle="Add book"
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </section>
    </>
  );
};
