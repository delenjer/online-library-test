import React from 'react';
import { NavLink  } from "react-router-dom";

import List from "@material-ui/core/List";

export const SideBarLinks = () => (
  <div className="sidebar">
    <List>
      <NavLink exact  className="sidebar__link" to="/">Home</NavLink >
      <NavLink  className="sidebar__link" to="/last-borrowed-books/">Last borrowed books</NavLink >
      <NavLink  className="sidebar__link" to="/last-returned-books/">Last returned books</NavLink >
      <NavLink  className="sidebar__link" to="/users/">Users</NavLink >
    </List>
  </div>
);
