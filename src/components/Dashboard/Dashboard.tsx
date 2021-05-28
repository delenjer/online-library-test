import React from 'react';
import { TableTemplate } from "../../Template/Table/TableTemplate/TableTemplate";
import { TableHoc } from "../../HOC/TableHoc";

export const Dashboard = (props:any) => (
  <TableTemplate {...props} />
);

export const DashboardWrap = TableHoc(Dashboard);
