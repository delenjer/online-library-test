export interface IState {
  returnedBooks: IBooks,
  users: IUsers,
  booksTakenUsers: IBooks,
  collectionBooks: ICollectionBooks,
  bookDetails: IBookDetails,
}

export interface IAction {
  type: string;
  data: IUsers | ICollectionBooks | IBookDetails,
  users: IUsers;
  user: IUsers;
  editValue: IUsers;
  books: IBooks;
  book: IBooks;
  id: string;
  payload: boolean;
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

export interface ICollectionBooksData {
  hasImage: boolean
  headerImage: {
    guid: string,
    height: number,
    offsetPercentageX: number,
    offsetPercentageY: number,
    url: undefined | string,
    width: number,
  }
  id: string,
  links: any,
  longTitle: string,
  objectNumber: string,
  permitDownload: boolean,
  principalOrFirstMaker: string,
  productionPlaces: any[],
  showImage: boolean,
  title: string,
  webImage: {
    guid: string,
    height: number,
    offsetPercentageX: number,
    offsetPercentageY: number,
    url: undefined | string,
    width: number,
  }
  map(element: (book: any) => JSX.Element): any,
}

export interface ICollectionBooks {
  collectionBooks: ICollectionBooksData,
  isLoading: boolean,
}

export interface IBook {
  book: ICollectionBooksData,
}

export interface IDetailsBookData {
  acquisition: any,
  artistRole: null,
  associations: [],
  catRefRPK: [],
  classification: any,
  colors: any[],
  colorsWithNormalization: any[],
  copyrightHolder: string,
  dating: any,
  description: null
  dimensions: any[],
  documentation: any[],
  exhibitions: any[],
  hasImage: boolean,
  historicalPersons: any[],
  id: string,
  inscriptions: any[],
  label: any,
  labelText: null
  language: string,
  links: any,
  location: string,
  longTitle: string,
  makers: any[],
  materials: any[],
  normalized32Colors: any[],
  normalizedColors: any[],
  objectCollection: any[],
  objectNumber: string,
  objectTypes: any[],
  physicalMedium: string,
  physicalProperties: []
  plaqueDescriptionDutch: string,
  plaqueDescriptionEnglish: string,
  principalMaker: string,
  principalMakers: any[],
  principalOrFirstMaker: string,
  priref: string,
  productionPlaces: any[],
  scLabelLine: string,
  showImage: true
  subTitle: string,
  techniques: any[],
  title: string,
  titles: any[],
  webImage: {
    guid: string,
    height: number,
    offsetPercentageX: number,
    offsetPercentageY: number,
    url: undefined | string,
  }
}

export interface IBookDetails {
  bookDetails: IDetailsBookData,
  isLoading: boolean,
}

export interface IBookDetailsComponent {
  modalIsOpen: boolean,
  closeModal: () => void,
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

export interface IFavoriteButton {
  handleFavorite: (e:any) => void,
}
