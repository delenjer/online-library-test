import { IDetailsBookData } from "../../interface/interface";

export const GET_DETAILS = 'GET_DETAILS';
export const SET_LOADING_DETAILS = 'SET_LOADING_DETAILS';

export const getDetails = (data:IDetailsBookData | {}) => ({
  type: GET_DETAILS,
  data,
});

export const setLoadingDetails = (payload:boolean) => ({
  type: SET_LOADING_DETAILS,
  payload,
});
