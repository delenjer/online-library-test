import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import { Home } from "../Home/Home";
import { BooksTakenUsers } from '../BooksTakenUsers/BooksTakenUsers';
import { ReturnedBooks } from '../ReturnedBooks/ReturnedBooks';
import { Users } from '../Users/Users';
import { CalendarService } from '../CalendarService/CalendarService';
import *as selector from '../../store/store';
import { Login } from '../Login/Login';

export const SideBarRouts = () => {
    const authentication = useSelector(state => selector.authentication(state));
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (!authentication) {
            history.push('/');
        }
    }, [authentication, location.pathname]);

    return (
      <Switch>
        <Route exact path='/'  component={ authentication ? Home : Login } />
        <Route path='/details/:id' component={ authentication ? Home : Login } />
        <Route path='/taken-books/' component={ authentication ? BooksTakenUsers : Login } />
        <Route path='/returned-books/' component={ authentication ? ReturnedBooks : Login } />
        <Route path='/users/' component={ authentication ? Users : Login } />
        <Route path='/calendar/' component={ authentication ? CalendarService : Login } />
      </Switch>
    );
}
