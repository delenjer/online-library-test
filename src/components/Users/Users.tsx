import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingUsers } from '../../store/thunk/thunk';
import *as selectors from '../../store/store';
import { getUsers } from '../../store/usersReducer/action';
import { DashboardWrap } from '../Dashboard/Dashboard';
import { ModalTemplate } from '../../Template/ModalTemplate/ModalTemplate';

const customStyles:any = {
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(224, 224, 224, 0.5)'
  }
}

export const Users = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditValue, setEditValue] = useState('');
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
        const edit = user.name = 'ANNA';
        return {
          ...user,
          edit,
        }
      }

      return {...user}
    });

    console.log(dataChange);
  }

  console.log(users);

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
        modalIsOpen={modalIsOpen}
        customStyles={customStyles}
        closeModal={closeModal}
      >
        <form action="/" onSubmit={(e) => handleEditField(e)}>
          <input
            type="text"
            value={isEditValue}
            onChange={(e) => {setEditValue(e.target.value)}}
          />

          <button type="submit">Change field</button>
        </form>
      </ModalTemplate>
    </>
  );
}
