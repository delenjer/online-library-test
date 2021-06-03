import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingUsers } from '../../store/thunk/thunk';
import * as selectors from '../../store/store';
import { getUsers, editUsersLIst } from '../../store/usersReducer/action';
import { DashboardWrap } from '../Dashboard/Dashboard';
import { ModalTemplate } from '../../Template/ModalTemplate/ModalTemplate';
import { FormEditTemplate } from '../../Template/FormEditTemplate/FormEditTemplate';

export const Users = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataId, setDataId] = useState('');
  const users = useSelector(state => selectors.users(state));
  const dispatch = useDispatch();

  const columns = ['Edit', 'Name', 'Username', 'Phone', 'Status', 'Delete'];
  const newUser = {
    name: '',
    username: '',
    phone: '',
    status: '',
    id: '',
  }
  const fieldsOptions = [
    {name: 'name', placeholder: 'User name'},
    {name: 'username', placeholder: 'Last name'},
    {name: 'phone', placeholder: 'Add phone'},
    {name: 'status', placeholder: 'Status book'},
  ];

  useEffect(() => {
    dispatch(loadingUsers());
  },[]);

  const handleDeleteRow = (id:string) => {
    dispatch(getUsers([...users.filter((user:any) => user.id !== id)]));
  }

  const handleEdit = (id:string) => {
    setDataId(id);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleEditField = (event:any) => {
    const { name, value } = event.target;

    return users.map((user:any) => user.id === dataId ? {...user, user: user[name] = value} : user);
  }

  const handleSubmitField = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(editUsersLIst(users));
  }

  return (
    <>
      <DashboardWrap
        rows={users}
        columns={columns}
        handleDeleteRow={handleDeleteRow}
        handleEdit={handleEdit}
        fieldsOptions={fieldsOptions}
        addNewToList={newUser}
        ButtonTitle="Add book"
      />

      <ModalTemplate
        title="Editing users list"
        open={modalIsOpen}
        handleClose={closeModal}
      >
        <FormEditTemplate
          editFields={users}
          value=""
          onChange={handleEditField}
          handleSubmit={handleSubmitField}
          handleClose={closeModal}
        />
      </ModalTemplate>
    </>
  );
}
