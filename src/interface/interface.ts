export interface IApi {
  authors: string;
  description: string;
  title: string;
  status: string;
  id: string;
}

export interface IInput {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (...arg:any) => void;
}

export interface IAddInfo {
  handleSubmit: (...arg:any) => void;
  ButtonTitle: string;
  amountInputs: string[];
  type: string;
  placeholder: string[];
  value: string;
  onChange: (...arg:any) => void;
}
