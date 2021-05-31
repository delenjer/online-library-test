import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingUsers } from '../../store/thunk/thunk';
import { DashboardWrap } from "../Dashboard/Dashboard";

export const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingUsers);
  },[]);

  return (
    <DashboardWrap />
  );
}
