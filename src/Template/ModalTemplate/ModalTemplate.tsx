import React from 'react';
import Modal from 'react-modal';

export const ModalTemplate = (
  {
    modalIsOpen,
    afterOpenModal,
    closeModal,
    children,
    customStyles,
  }:any
) => {

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {children}
      </Modal>
    </div>
  );
}


