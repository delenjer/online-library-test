import React from 'react';
import { useSelector } from 'react-redux';
import { ModalTemplate } from "../../Template/ModalTemplate/ModalTemplate";
import *as selector from '../../store/store';

export const BookDetails = ({ modalIsOpen, closeModal }:any) => {
  const bookDetailsMemo = useSelector(state => selector.bookDetailsMemo(state));

  console.log(bookDetailsMemo);

  return (
    <ModalTemplate
      title="Editing users list"
      open={modalIsOpen}
      handleClose={closeModal}
    >
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ea enim eum quidem ullam! Accusamus dolore eveniet, fuga ipsum itaque molestias nesciunt, nobis perferendis provident quo sequi voluptatibus. Commodi, voluptate?</h2>
    </ModalTemplate>
  );
};
