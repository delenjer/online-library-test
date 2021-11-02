import axios from "axios";

const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=a7LmWCcH';
const DETAILS_URL = 'https://www.rijksmuseum.nl/api/nl/collection/';

export const collectionBooksApi = async function (countPage: number) {
  return axios({
    method: 'get',
    url: `${BASE_URL}&ps=100&p=${countPage}`,
    responseType: 'json',
  });
}

export const detailsBookApi = async function (id:string) {
  return axios({
    method: 'get',
    url: `${DETAILS_URL}${id}?key=a7LmWCcH`,
    responseType: 'json',
  });
}


export const apiTakenBooksBooks = [
  {
    authors: "William S. Vincent",
    description: "Learn how to build web APIs with Python and Django",
    title: "REST APIs with Django: Build powerful web APIs with Python and Django",
    status: "pending",
    id: "198302998X",
  },
  {
    authors: "Matthias Biehl",
    description: "Got RESTful APIs? Great.",
    title: "Webhooks: Events for RESTful APIs (API-University Series) (Volume 4)",
    status: "pending",
    id: "1979717060",
  },
  {
    authors: "Daniel Gaspar",
    description: "Learn to build modern, secure, highly available web MVC applications and API's using Python`s Flask framework.",
    title: "Mastering Flask Web Development: Build enterprise-grade, scalable Python web applications, 2nd Edition",
    status: "pending",
    id: "1788995406",
  },
  {
    authors: "Jasmine Kaur",
    description: "Book DescriptionThis book is a part of Knoldus Reactive Programming Series.",
    title: "Start Building RESTful Microservices using Lagom with Java: A Practical Approach to Modern, Domain-Driven, Event-Driven, Scalable and Reactive ... Java (Knoldus Reactive Programming Series)",
    status: "pending",
    id: "1717920020",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "pending",
    id: "1514735165",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "pending",
    id: "1514735166",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "pending",
    id: "1514735167",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "pending",
    id: "1514735168",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "pending",
    id: "1514735169",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "pending",
    id: "15147351640",
  },
];

export const apiReturnedBooks = [
  {
    authors: "William S. Vincent",
    description: "Learn how to build web APIs with Python and Django",
    title: "REST APIs with Django: Build powerful web APIs with Python and Django",
    status: "completed",
    id: "198302998X",
  },
  {
    authors: "Matthias Biehl",
    description: "Got RESTful APIs? Great.",
    title: "Webhooks: Events for RESTful APIs (API-University Series) (Volume 4)",
    status: "completed",
    id: "1979717060",
  },
  {
    authors: "Daniel Gaspar",
    description: "Learn to build modern, secure, highly available web MVC applications and API's using Python`s Flask framework.",
    title: "Mastering Flask Web Development: Build enterprise-grade, scalable Python web applications, 2nd Edition",
    status: "completed",
    id: "1788995406",
  },
  {
    authors: "Jasmine Kaur",
    description: "Book DescriptionThis book is a part of Knoldus Reactive Programming Series.",
    title: "Start Building RESTful Microservices using Lagom with Java: A Practical Approach to Modern, Domain-Driven, Event-Driven, Scalable and Reactive ... Java (Knoldus Reactive Programming Series)",
    status: "completed",
    id: "1717920020",
  },
  {
    authors: "Matthias Biehl",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "completed",
    id: "1514735164",
  },
  {
    authors: "Biehl Matthias",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "completed",
    id: "15147351777",
  },
  {
    authors: "Jone Don",
    description: "Looking for Best Practices for RESTful APIs?This book is for you! Why? Because this book is packed with practical experience on what works best for RESTful API Design.",
    title: "RESTful API Design (API-University Series)",
    status: "completed",
    id: "15147351859",
  },
];

export const users = [
  {
    "id": '1',
    "name": "Leanne Graham",
    "username": "Bret",
    "phone": "1-770-736-8031 x56442",
    "status": 'completed',
  },
  {
    "id": '2',
    "name": "Ervin Howell",
    "username": "Antonette",
    "phone": "010-692-6593 x09125",
    "status": 'pending',
  },
  {
    "id": '3',
    "name": "Clementine Bauch",
    "username": "Clementine",
    "phone": "1-463-123-4447",
    "status": 'pending',
  },
  // {
  //   "id": '4',
  //   "name": "Patricia Lebsack",
  //   "username": "Lebsack",
  //   "phone": "493-170-9623 x156",
  //   "status": 'completed',
  // },
  // {
  //   "id": '5',
  //   "name": "Chelsey Dietrich",
  //   "username": "Lool",
  //   "phone": "(254)954-1289",
  //   "status": 'completed',
  // },
  // {
  //   "id": '6',
  //   "name": "Mrs. Dennis Schulist",
  //   "username": "xxx",
  //   "phone": "1-477-935-8478 x6430",
  //   "status": 'completed',
  // },
  // {
  //   "id": '7',
  //   "name": "Kurtis Weissnat",
  //   "username": "Weissnat",
  //   "phone": "210.067.6132",
  //   "status": 'completed',
  // },
  // {
  //   "id": '8',
  //   "name": "Nicholas Runolfsdottir V",
  //   "username": "Vivo",
  //   "phone": "586.493.6943 x140",
  //   "status": 'pending',
  // },
  // {
  //   "id": '9',
  //   "name": "Glenna Reichert",
  //   "username": "Totoro",
  //   "phone": "(775)976-6794 x41206",
  //   "status": 'pending',
  // },
  // {
  //   "id": '10',
  //   "name": "Clementina DuBuque",
  //   "username": "Her",
  //   "phone": "024-648-3804",
  //   "status": 'pending',
  // }
]

export const loginApi = {
  login: 'admin',
  password: '123456789',
}
