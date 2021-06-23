export interface IState {
  users: IUsers;
  activeBooks: IBooks;
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
  type: any;
  data: IUsers,
  users: IUsers;
  user: IUsers;
  editValue: IUsers;
  books: IBooks;
  book: IBooks;
  id: string;
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
