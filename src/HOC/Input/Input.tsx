import React from 'react';
import { IInput } from "../../interface/interface";



export const Input = (
  {
    type,
    name,
    placeholder,
    value,
    onChange
  }:IInput
) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />

);
