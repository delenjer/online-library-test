import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Input } from "../Template/Input/Input";
import { ITableHoc } from "../interface/interface";
import { addBook } from "../store/activeBooksReducer/action";

export const TableHoc = (Component: any) => {

  return function CallBack (props: any) {
    const { addNewToList,  fieldsOptions, ButtonTitle } = props;

    const [addNewElement, setNewElement] = useState(addNewToList);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;

      setNewElement({...addNewElement, [name]: value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(addBook({...addNewElement, id: uuidv4()}));

      setNewElement(addNewToList);
    }

    return (
      <>
        <form action="#" onSubmit={(e) => handleSubmit(e)}>
          {
            fieldsOptions.map((field:any) => {

              return (
                <Input
                  key={field.name}
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={addNewElement[field.name]}
                  onChange={(e) => handleChange(e)}
                />
              );
            })
          }

          <button
            // disabled={!addNewElement.authors || !addNewElement.title || !addNewElement.description}
            type="submit"
          >
            {ButtonTitle}
          </button>
        </form>

        <Component {...props} />
      </>
    );
  }
}

