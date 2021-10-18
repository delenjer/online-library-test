import {Pagination} from "../components/Pagination/Pagination";

export interface IState {
  returnedBooks: IBooks;
  users: IUsers;
  booksTakenUsers: IBooks;
  isLoading: boolean;
}

export interface IData {
  data: any[];
}

export interface IUsers {
  phone: string;
  name: string;
  id: string;
  username: string;
  status: string
  [column:string]: string;
}

export interface IBooks {
  authors: string,
  description: string,
  title: string,
  status: string,
  id: string,
  [name:string]: string,
}

export interface ITableHoc {
  handleSubmit: (...arg:any[]) => void;
  ButtonTitle: string;
  amountInputs: string[];
  type: string;
  placeholder: string[];
  value: string;
  onChange: (...arg:any[]) => void;
  addNewToList: any;
  fieldsOptions: any;
}

export interface ITableTemplate {
  columns: string[],
  rows: {
    length: number;
    phone: string;
    name: string;
    id: string;
    username: string;
    status: string
    slice(number: number, number2: number): any;
  },
  handleDeleteRow: (...arg:any[]) => void,
  handleEdit: (...arg:any[]) => void,
}

export interface IRenderRow {
  columns: string[];
  row: IUsers,
  handleEdit: (...arg:any[]) => void;
  handleDeleteRow: (...arg:any[]) => void;
}

export interface IRenderTableFooter {
  length: any;
  rowsPerPage: number;
  page: number;
  handleChangePage: (...arg:any[]) => void,
  handleChangeRowsPerPage: (...arg:any[]) => void,
}

export interface IAction {
  type: string;
  data: IUsers,
  users: IUsers;
  user: IUsers;
  editValue: IUsers;
  books: IBooks;
  book: IBooks;
  id: string;
  payload: any;
}

export interface IDeleteElement {
  id: string;
}

export interface IEditElement {
  id: string;
  [name: string]: number | string | symbol;
}

export interface IFormAddTemplate {
  handleSubmit: (...arg:any[]) => void,
  handleChange: (...arg:any[]) => void,
  handleClose: () => void,
  fieldsOptions: any,
  addNewElement: IUsers | IBooks,
}

export interface ITitle {
  pref: string;
}

export interface IAddTakenBook {
  description: string;
  id: string;
  title: string;
  authors: string;
  status: string;
}

export interface ICalendarModalContent {
  handleDeleteEvent: () => void,
  handleSubmit: (e:any) => void,
  setEditFieldVal: (e:any) => void,
  editFieldVal: string,
}

export interface IPagination {
  countPage: number,
  maxPage: number,
  handleClickNextPage: () => void,
  handleClickPrevPage: () => void,
}

export interface IScrollTop {
  scrollToTop: () => void,
}
