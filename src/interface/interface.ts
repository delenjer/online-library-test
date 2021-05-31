export interface IUsers {
  phone: string;
  name: string;
  id: number;
  username: string;
  status: string
}


export interface IInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (...arg:any[]) => void;
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
