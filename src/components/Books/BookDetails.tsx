import React from 'react';
import { useSelector } from 'react-redux';
import { ModalTemplate } from "../../Template/ModalTemplate/ModalTemplate";
import *as selector from '../../store/store';

export const BookDetails = ({ modalIsOpen, closeModal }:any) => {
  const bookDetailsMemo = useSelector(state => selector.bookDetailsMemo(state));

  return (
    <ModalTemplate
      title={bookDetailsMemo.title}
      open={modalIsOpen}
      handleClose={closeModal}
    >
      <section className="details">
        <h2 className="details__title">{bookDetailsMemo.longTitle}</h2>

        <article className="details__img-box">
          <img
            className="container-item-img"
            src={bookDetailsMemo.webImage && bookDetailsMemo.webImage.url}
            alt={bookDetailsMemo.title}
          />
        </article>
      </section>
    </ModalTemplate>
  );
};
