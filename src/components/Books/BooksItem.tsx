import React from 'react';
import { Link } from 'react-router-dom';

import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import notFoundImg from '../../img/unnamed.png';
import { IBook } from "../../interface/interface";

export const BooksItem: React.FC<IBook> = ({ book }) => {

  const handleFavorite = (e:React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  }

  return (
    <Link to={`/details/${book.objectNumber}`} key={book.id} className="container-item">
      <img
        className="container-item-img"
        src={`${book.headerImage.url || notFoundImg}`}
        alt="Image"
      />

      <p className="container-item-text">{book.longTitle}</p>

      <FavoriteButton handleFavorite={handleFavorite} />
    </Link>
  );
};
