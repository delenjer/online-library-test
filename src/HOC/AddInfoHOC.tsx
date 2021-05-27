import React from 'react';
import { Input } from "./Input/Input";
import { IAddInfo } from "../interface/interface";

export const AddInfoToList = (
  {
    type,
    placeholder,
    value,
    onChange,
    handleSubmit,
    ButtonTitle,
    amountInputs,
  }:IAddInfo
) => {

  console.log(placeholder);

  return (
    <form action="#" onSubmit={(e) => handleSubmit(e)}>
      {
        amountInputs.map((name:string) => (
          <Input
            type={type}
            name={name}
            placeholder={'placeholder'}
            value={value}
            onChange={onChange}
          />
        ))
      }

      <button
        // disabled={!addNewBook.authors || !addNewBook.title || !addNewBook.description}
        type="submit"
      >
        {ButtonTitle}
      </button>
    </form>
  );
}

