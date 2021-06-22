import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { IDeleteElement, IState } from "../../interface/interface";
import *as selectors from '../../store/store';
import { loadingReturnedBooks } from '../../store/thunk/thunk';
import { getActiveBooks } from "../../store/activeBooksReducer/action";
import { DashboardWrap } from "../Dashboard/Dashboard";
import Button from "@material-ui/core/Button";
import { MainTitleTemplate } from "../../Template/MainTitleTemplate/MainTitleTemplate";
import { columns, fieldsOptions, newBook } from './constants';

export const ReturnedBooks = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const returnedBooks = useSelector((state: IState) => selectors.activeBooks(state));

  useEffect(() => {
    dispatch(loadingReturnedBooks());
  }, []);

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
        <MainTitleTemplate
          pref="returned"
        >
          Returned books
        </MainTitleTemplate>

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
