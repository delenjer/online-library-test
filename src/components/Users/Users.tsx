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
  const [getEditValue, setEditValue] = useState('');
  const [getIdElem, setIdElem] = useState('');
  const users = useSelector(state => selectors.users(state));
  const dispatch = useDispatch();
  const columns = ['Name', 'Username', 'Phone', 'Status'];
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
    setIdElem(id);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleEditField = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataChange = users.map((user:any) => {
      if (user.id === getIdElem) {
        const editInList = user.name = getEditValue;
        return {
          ...user,
          editInList,
        }
      }

      return {...user}
    });

    dispatch(editUsersLIst([dataChange]));
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
          handleSubmit={handleEditField}
        />

        {/* <form action="/" onSubmit={(e) => handleEditField(e)}>
          <input
            type="text"
            value={getEditValue}
            onChange={(e) => {setEditValue(e.target.value)}}
          />

          <button type="submit">Change field</button>
        </form> */}
      </ModalTemplate>
    </>
  );
}
