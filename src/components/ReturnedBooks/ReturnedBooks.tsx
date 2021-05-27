import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import *as selectors from '../../store/store';
//@ts-ignore
import { loadingReturnedBooks, sentReturnedBooksToStorage } from '../../store/thunk/thunk';
import { TableTemplate } from '../../Template/Table/TableTemplate/TableTemplate';
import { getReturnedBooks, addBook } from "../../store/returnedBooksReducer/action";
import { AddInfoToList } from "../../HOC/AddInfoHOC";

const initState = {
  authors: '',
  description: '',
  title: '',
  status: 'completed',
  id: '',
}

export const ReturnedBooks = () => {
  const [addNewBook, setNewBook] = useState(initState);
  const dispatch = useDispatch();
  const returnedBooks = useSelector(state => selectors.returnedBooks(state));

  useEffect(() => {
    dispatch(loadingReturnedBooks());
  }, []);

  // useEffect(() => {
  //   sentReturnedBooksToStorage(returnedBooks);
  // }, [returnedBooks]);

  const columns = ['Authors', 'Title', 'Description', 'Status'];

  const handleDeleteRow = (id:string) => {

    dispatch(
      getReturnedBooks([...returnedBooks.filter((item:any) => item.id !== id)])
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setNewBook({...addNewBook, authors: value});
      break;

      case 'title':
        setNewBook({...addNewBook, title: value});
        break;

      case 'description':
        setNewBook({...addNewBook, description: value});
        break;

      default:
        return '';
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addBook({...addNewBook, id:uuidv4()}));

    setNewBook(initState);
  }

  // const inputSettings = [{
  //
  // }];

  return (
    <>
      <AddInfoToList
        type="text"
        placeholder={['Author name', 'Book title', 'Small description']}
        value=""
        onChange={(e) => handleChange(e)}
        handleSubmit={handleSubmit}
        ButtonTitle="Add book"
        amountInputs={['name', 'title', 'description']}
      />

      {/*<form action="#" onSubmit={(e) => handleSubmit(e)}>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    name="name"*/}
      {/*    placeholder="Author name"*/}
      {/*    value={addNewBook.authors}*/}
      {/*    onChange={(e) => handleChange(e)}*/}
      {/*  />*/}

      {/*  <input*/}
      {/*    type="text"*/}
      {/*    name="title"*/}
      {/*    placeholder="Book title"*/}
      {/*    value={addNewBook.title}*/}
      {/*    onChange={(e) => handleChange(e)}*/}
      {/*  />*/}

      {/*  <input*/}
      {/*    type="text"*/}
      {/*    name="description"*/}
      {/*    placeholder="Small description"*/}
      {/*    value={addNewBook.description}*/}
      {/*    onChange={(e) => handleChange(e)}*/}
      {/*  />*/}

      {/*  <button*/}
      {/*    disabled={!addNewBook.authors || !addNewBook.title || !addNewBook.description}*/}
      {/*    type="submit"*/}
      {/*  >*/}
      {/*    Add book*/}
      {/*  </button>*/}
      {/*</form>*/}

      <TableTemplate rows={returnedBooks} columns={columns} handleDeleteRow={handleDeleteRow} />
    </>
  );
};
