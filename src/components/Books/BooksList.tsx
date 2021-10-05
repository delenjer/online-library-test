import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import {loadingCollectionBooks, loadingDetailsBook} from '../../store/thunk/thunk';
import *as selectors from '../../store/store';
import { BooksItem } from "./BooksItem";
import { BookDetails } from "./BookDetails";

export const BooksList = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const collectionBooks = useSelector(state => selectors.collectionBooksMemo(state));
  const { id }:any = useParams();
  const history = useHistory();


  useEffect(() => {
    id && setOpenModal(true);
    id && dispatch(loadingDetailsBook(id));
  },[id]);

  useEffect(() => {
    dispatch(loadingCollectionBooks());
  },[]);

  const closeModal = () => {
    setOpenModal(false);
    history.push('/');
  };

  return (
    <>
      <section className="container">
        <div className="container-list">
          {collectionBooks.map((book:any) => (
            <BooksItem key={book.id} book={book} />
          ))}
        </div>
      </section>

      <BookDetails closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};
