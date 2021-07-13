import React from 'react';
import { ModalTemplate } from "../Template/ModalTemplate/ModalTemplate";
import { FormAddTemplate } from "../Template/FormAddTemplate/FormAddTemplate";

export const TableHoc = (Component: (props: any) => JSX.Element) => {

  return function CallBack (props:any) {
    const { addNewElement, handleSubmit, handleChange,  fieldsOptions, modalIsOpen, closeModal } = props;
    return (
      <>
        <ModalTemplate
          title="Add to list"
          open={modalIsOpen}
          handleClose={closeModal}
        >

          <FormAddTemplate
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            addNewElement={addNewElement}
            handleClose={closeModal}
            fieldsOptions={fieldsOptions}
          />
        </ModalTemplate>

        <Component {...props} />
      </>
    );
  }
}

