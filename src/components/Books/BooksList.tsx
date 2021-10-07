import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { loadingCollectionBooks, loadingDetailsBook } from '../../store/thunk/thunk';
import *as selectors from '../../store/store';
import { BooksItem } from "./BooksItem";
import { BookDetails } from "./BookDetails";
import { ButtonTemplate } from "../../Template/ButtonTemplate/ButtonTemplate";

export const BooksList = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const [countPage, setCountPage] = useState(1);
  const maxPage = 100;
  const dispatch = useDispatch();
  const collectionBooks = useSelector(state => selectors.collectionBooksMemo(state));
  const { id }:any = useParams();
  const history = useHistory();


  useEffect(() => {
    id && setOpenModal(true);
    id && dispatch(loadingDetailsBook(id));
  },[id]);

  useEffect(() => {
    dispatch(loadingCollectionBooks(countPage));
  },[countPage]);

  const closeModal = () => {
    setOpenModal(false);
    history.push('/');
  };

  const handleClickNextPage = () => setCountPage(prevState => prevState + 1);
  const handleClickPrevPage = () => setCountPage(prevState => prevState - 1);

  return (
    <>
      <section className="container">
        <div className="container-list">
          {collectionBooks.map((book:any) => (
            <BooksItem key={book.id} book={book} />
          ))}
        </div>

        <div className="button-container">
          {
            countPage <= 1 ? (
              <ButtonTemplate
                handleClick={handleClickNextPage}
                disabled={countPage >= maxPage}
              >
                Next page
              </ButtonTemplate>
            ) : (
              <>
                <ButtonTemplate
                  handleClick={handleClickPrevPage}
                >
                  Previous page
                </ButtonTemplate>

                <ButtonTemplate
                  handleClick={handleClickNextPage}
                  disabled={countPage >= maxPage}
                >
                  Next page
                </ButtonTemplate>
              </>
            )
          }
        </div>
      </section>

      <BookDetails closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};
