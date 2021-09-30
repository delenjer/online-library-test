import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from "@material-ui/core/Typography";

import { loadingCollectionBooks } from '../../store/thunk/thunk';
import *as selectors from '../../store/store';

export const Home = () => {
  const dispatch = useDispatch();
  const collectionBooks = useSelector(state => selectors.collectionBooksMemo(state));

  console.log(collectionBooks);

  useEffect(() => {
    dispatch(loadingCollectionBooks());
  },[]);

  return (
    <section className="container">
      <div className="container-list">
        {collectionBooks.map((book:any) => (
          <article key={book.id} className="container-item">
            <img className="container-item-img" src={`${book.headerImage.url}`} alt=""/>
            <p className="container-item-text">{book.longTitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
