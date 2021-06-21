import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Home } from "../Home/Home";
import { BorrowedBooks } from "../BorrowedBooks/BorrowedBooks";
import { ReturnedBooks } from "../ReturnedBooks/ReturnedBooks";
import { Users } from "../Users/Users";

export const SideBarRouts = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/last-borrowed-books/' component={ BorrowedBooks } />
    <Route path='/last-returned-books/' component={ ReturnedBooks } />
    <Route path='/users/' component={ Users } />
  </Switch>
);
