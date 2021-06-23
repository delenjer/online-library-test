import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addBook } from "../store/activeBooksReducer/action";
import { addNewUser, getUsers } from "../store/usersReducer/action";
import { ModalTemplate } from "../Template/ModalTemplate/ModalTemplate";
import { FormAddTemplate } from "../Template/FormAddTemplate/FormAddTemplate";

export const TableHoc = (Component: (props: any) => JSX.Element) => {

  return function CallBack (props:any) {
    const { addNewToList,  fieldsOptions, modalIsOpen, closeModal } = props;
    const [addNewElement, setNewElement] = useState(addNewToList);
    const dispatch = useDispatch();

   // const [userStorage, setUserStorage] = useState(JSON.parse(localStorage.getItem('userStorage') as string) || {});

    // useEffect(() => {
    //   localStorage.setItem('userStorage', JSON.stringify(userStorage));
    //   dispatch(addNewUser({...userStorage, id: uuidv4()}));
    // },[userStorage]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;

      setNewElement({...addNewElement, [name]: value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(addBook({...addNewElement, id: uuidv4()}));
      dispatch(addNewUser({...addNewElement, id: uuidv4()}));
      // dispatch(getUsers({...addNewElement, id: uuidv4()}));

      setNewElement(addNewToList);
    }

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

