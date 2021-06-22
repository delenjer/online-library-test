import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { columns, newBook, fieldsOptions } from './constants';
import { IState, IDeleteElement } from "../../interface/interface";
import *as selectors from '../../store/store';
import { loadingBorrowedBooks } from '../../store/thunk/thunk';
import { getActiveBooks } from '../../store/activeBooksReducer/action';
import { DashboardWrap } from "../Dashboard/Dashboard";
import Button from "@material-ui/core/Button";
import {MainTitleTemplate} from "../../Template/MainTitleTemplate/MainTitleTemplate";

export const BorrowedBooks = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const borrowedBooks = useSelector((state: IState) => selectors.activeBooks(state));

  useEffect(() => {
    dispatch(loadingBorrowedBooks());
  }, []);

  const handleDeleteRow = (id:string) => {

    dispatch(
      getActiveBooks([...borrowedBooks.filter((book: IDeleteElement) => book.id !== id)])
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
        <MainTitleTemplate
          pref="borrowed"
        >
          Borrowed books
        </MainTitleTemplate>

        <DashboardWrap
          rows={borrowedBooks}
          columns={columns}
          handleDeleteRow={handleDeleteRow}
          fieldsOptions={fieldsOptions}
          addNewToList={newBook}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </section>
    </>
  );
};
