import { ICollectionBooksData } from "../../interface/interface";

export const GET_COLLECTION_BOOKS = 'GET_COLLECTION_BOOKS';
export const SET_LOADING_BOOKS = 'SET_LOADING_BOOKS';

export const getCollectionBooks = (data: ICollectionBooksData | []) => ({
  type: GET_COLLECTION_BOOKS,
  data,
});

export const setLoadingBooks = (payload:boolean) => ({
  type: SET_LOADING_BOOKS,
  payload,
});
