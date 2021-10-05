import React from 'react';
import { Link } from 'react-router-dom';

export const BooksItem = ({ book }:any) => {

  return (
    <Link to={`/details/${book.objectNumber}`} key={book.id} className="container-item">
      <img className="container-item-img" src={`${book.headerImage.url}`} alt=""/>
      <p className="container-item-text">{book.longTitle}</p>
    </Link>
  );
};
