import React from 'react';
import { NavLink  } from "react-router-dom";

import List from "@material-ui/core/List";

export const SideBarLinks = () => (
  <div className="sidebar">
    <List>
      <NavLink exact  className="sidebar__link" to="/">Home</NavLink>
      <NavLink  className="sidebar__link" to="/taken-books/">Taken books</NavLink>
      <NavLink  className="sidebar__link" to="/returned-books/">Returned books</NavLink>
      <NavLink  className="sidebar__link" to="/users/">Users</NavLink>
      <NavLink  className="sidebar__link" to="/calendar/">Calendar</NavLink>
    </List>
  </div>
);
