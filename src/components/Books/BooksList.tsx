import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { loadingCollectionBooks, loadingDetailsBook } from '../../store/thunk/thunk';
import *as selectors from '../../store/store';
import { BooksItem } from "./BooksItem";
import { BookDetails } from "./BookDetails";
import { Pagination } from "../Pagination/Pagination";
import CircularIndeterminate from '../Spinner/Spinner';
import { ScrollTopButton } from "../ScrollTopButton/ScrollTopButton";
import { IState } from '../../interface/interface';

export const BooksList: React.FC = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const [countPage, setCountPage] = useState(1);
  const [visibleComponent, setVisibleComponent] = useState(false);
  const maxPage = 100;
  const dispatch = useDispatch();
  const { collectionBooks, isLoading } = useSelector((state: IState) => selectors.collectionBooksMemo(state));
  const { id }:any = useParams();
  const history = useHistory();

  useEffect(() => {
    id && setOpenModal(true);
    id && dispatch(loadingDetailsBook(id));
  },[id]);

  useEffect(() => {
    dispatch(loadingCollectionBooks(countPage));
  },[countPage]);

  useEffect(() => {
    const handlerScroll = () => {
      const visiblePosition = 900;
      const scrolled = document.documentElement.scrollTop;

      return scrolled >= visiblePosition ? setVisibleComponent(true) : setVisibleComponent(false)
    }

    window.addEventListener('scroll', handlerScroll);

    return () => window.removeEventListener('scroll', handlerScroll);
  },[]);

  const closeModal = () => {
    setOpenModal(false);
    history.push('/home');
  };

  const handleClickNextPage = () => setCountPage(prevState => prevState + 1);
  const handleClickPrevPage = () => setCountPage(prevState => prevState - 1);

  return (
    <>
      {
        isLoading ? (
          <CircularIndeterminate />
        ) : (
          <>
            <div className="container-list">
              {collectionBooks.map((book) => (
                <BooksItem key={book.id} book={book} />
              ))}
            </div>

            <Pagination
              countPage={countPage}
              maxPage={maxPage}
              handleClickNextPage={handleClickNextPage}
              handleClickPrevPage={handleClickPrevPage}
            />

            {visibleComponent && <ScrollTopButton/>}
          </>
        )
      }

      <BookDetails closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};
