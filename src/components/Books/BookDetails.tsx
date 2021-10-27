import React from 'react';
import { useSelector } from 'react-redux';

import { ModalTemplate } from "../../Template/ModalTemplate/ModalTemplate";
import *as selector from '../../store/store';
import CircularIndeterminate from "../Spinner/Spinner";
import { ErrorMassage } from '../ErrorMassage/ErrorMassage';
import { IBookDetailsComponent, IState } from '../../interface/interface';

export const BookDetails: React.FC<IBookDetailsComponent> = ({ modalIsOpen, closeModal }) => {
  const { bookDetails, isLoading } = useSelector((state:IState) => selector.bookDetailsMemo(state));

  return (
    <ModalTemplate
      title="Short book description"
      open={modalIsOpen}
      handleClose={closeModal}
    >
      {
        isLoading ? (
          <CircularIndeterminate />
        ) : (
          <section className="details">
            {
              !Object.keys(bookDetails).length ? (
                <ErrorMassage>
                  The data did not loading, please close modal and try later!
                </ErrorMassage>
              ) : (
                <>
                  <h2 className="details__title">{bookDetails.title}</h2>

                  <h3 className="details__long-title">{bookDetails.longTitle}</h3>

                  <article className="details__img-box">
                    <img
                      className="container-item-img"
                      src={bookDetails.webImage && bookDetails.webImage.url}
                      alt={bookDetails.title}
                    />
                  </article>
                </>
              )
            }
          </section>
        )
      }
    </ModalTemplate>
  );
};
