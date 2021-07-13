import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { IState } from "../../interface/interface";
import *as selectors from '../../store/store';
import { loadingReturnedBooks } from '../../store/thunk/thunk';
import { DashboardWrap } from "../Dashboard/Dashboard";
import Button from "@material-ui/core/Button";
import { MainTitleTemplate } from "../../Template/MainTitleTemplate/MainTitleTemplate";
import { columns, fieldsOptions, newBook } from './constants';
import { addReturnedBook, removeBook } from "../../store/returnedBooksReducer/action";

export const ReturnedBooks = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addNewBook, setNewBook] = useState(newBook);
  const returnedBooks = useSelector((state: IState) => selectors.returnedBooks(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingReturnedBooks());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setNewBook({...addNewBook, [name]: value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addReturnedBook({...addNewBook, id: uuidv4()}));

    setNewBook(newBook);
  }

  const handleDeleteRow = (id:string) => {

    dispatch(removeBook(id));
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
        <MainTitleTemplate
          pref="returned"
        >
          Returned books
        </MainTitleTemplate>

        <DashboardWrap
          rows={returnedBooks}
          columns={columns}
          addNewElement={addNewBook}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDeleteRow={handleDeleteRow}
          fieldsOptions={fieldsOptions}
          ButtonTitle="Add book"
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </section>
    </>
  );
};
