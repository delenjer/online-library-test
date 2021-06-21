import React from 'react';
import { TableService } from "../../Serice/Table/TableService/TableService";
import { TableHoc } from "../../HOC/TableHoc";

export const Dashboard = (props:any) => (
  <TableService {...props} />
);

export const DashboardWrap = TableHoc(Dashboard);
