import React from 'react';
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";

export const SideBarLinks = () => (
  <List>
    <Link to="/last-borrowed-books/">Last borrowed books</Link>
    <br/>
    <Link to="/last-returned-books/">Last returned books</Link>
    <br/>
    <Link to="/users/">Users</Link>
  </List>
);
