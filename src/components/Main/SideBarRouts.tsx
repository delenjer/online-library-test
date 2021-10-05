import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Home } from "../Home/Home";
import { BooksTakenUsers } from "../BooksTakenUsers/BooksTakenUsers";
import { ReturnedBooks } from "../ReturnedBooks/ReturnedBooks";
import { Users } from "../Users/Users";
import { CalendarService } from "../CalendarService/CalendarService";

export const SideBarRouts = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/details/:id' component={ Home } />
    <Route path='/taken-books/' component={ BooksTakenUsers } />
    <Route path='/returned-books/' component={ ReturnedBooks } />
    <Route path='/users/' component={ Users } />
    <Route path='/calendar/' component={ CalendarService } />
  </Switch>
);