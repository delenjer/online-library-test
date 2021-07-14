import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { columns, newBook, fieldsOptions } from './constants';
import { IState } from "../../interface/interface";
import *as selectors from '../../store/store';
import { loadingTakenBooks } from '../../store/thunk/thunk';

import { DashboardWrap } from "../Dashboard/Dashboard";
import Button from "@material-ui/core/Button";
import { MainTitleTemplate } from "../../Template/MainTitleTemplate/MainTitleTemplate";
import { v4 as uuidv4 } from "uuid";
import { addTakenBook, removeBook } from "../../store/booksTakenUsersReducer/action";

export const BooksTakenUsers = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addNewBook, setNewBook] = useState(newBook);
  const dispatch = useDispatch();
  const booksTakenUsers = useSelector((state: IState) => selectors.booksTakenUsers(state));

  useEffect(() => {
    dispatch(loadingTakenBooks());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewBook({...addNewBook, [name]: value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTakenBook({...addNewBook, id: uuidv4()}));

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
          pref="borrowed"
        >
          Borrowed books
        </MainTitleTemplate>

        <DashboardWrap
          rows={booksTakenUsers}
          columns={columns}
          addNewElement={addNewBook}
          handleDeleteRow={handleDeleteRow}
          fieldsOptions={fieldsOptions}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          ButtonTitle="Add book"
        />
      </section>
    </>
  );
};
