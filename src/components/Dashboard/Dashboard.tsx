import React from 'react';
import { TableService } from "../Table/TableService/TableService";
import { TableHoc } from "../../HOC/TableHoc";

export const Dashboard = (props:any) => (
  <TableService {...props} />
);

export const DashboardWrap = TableHoc(Dashboard);
