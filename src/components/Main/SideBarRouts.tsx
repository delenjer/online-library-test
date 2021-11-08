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

const routes = [
    {exact: true, path: '/', component: Home},
    {path: '/details/:id', component: Home},
    {path: '/taken-books/', component: BooksTakenUsers},
    {path: '/returned-books/', component: ReturnedBooks},
    {path: '/users/', component: Users},
    {path: '/calendar/', component: CalendarService},
];

export const SideBarRouts = () => {
    const authentication = useSelector(state => selector.authentication(state));
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (!authentication) {
            history.push('/');
        }
    }, [location.pathname]);

    return (
      <Switch>
          {
              routes.map(route => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  children={authentication ? <route.component /> : Login}
                />
              ))
          }
      </Switch>
    );
}
