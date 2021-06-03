import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingUsers } from '../../store/thunk/thunk';
import * as selectors from '../../store/store';
import { getUsers, editUsersLIst } from '../../store/usersReducer/action';
import { DashboardWrap } from '../Dashboard/Dashboard';
import { ModalTemplate } from '../../Template/ModalTemplate/ModalTemplate';
import { FormEditTemplate } from '../../Template/FormEditTemplate/FormEditTemplate';
//@ts-ignore
import { editDataList } from '../../helpers/helpers';

const edited = {
  name: '',
  username: '',
  phone: '',
  status: '',
}

export const Users = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [editValue, setEditValue] = useState({});
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

  // console.log(editValue);

  const handleEditField = (event:any) => {
    const { name, value } = event.target;

    const x = users.map((user:any) => {
      if (user.id === dataId) {
        // const data = user[name] = value;

        return {
          ...user,
          [name]: value,
        }
      }

      // return {...user}
    });

    console.log(x)

    // editDataList(users, dataId, value, name);

    // setEditValue({...editValue, [name]: value});
  }

  // const editDataList = (dataList: any[], value:string, name:string, id?: any) => {
  //   // const keys =  Object.keys(value);
  //
  //   const x = dataList.map((user:any) => {
  //     if (user.id === id) {
  //       const data = user[name] = value;
  //
  //       console.log(name);
  //       console.log(value);
  //
  //       return {
  //         ...user,
  //         data,
  //       }
  //     }
  //
  //     return {...user}
  //   });
  //
  //   // console.log(x);
  // }

  const handleSubmitField = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch(editUsersLIst(editDataList(users, dataId, editValue)));
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
          value={''}
          onChange={handleEditField}
          handleSubmit={handleSubmitField}
          handleClose={closeModal}
        />
      </ModalTemplate>
    </>
  );
}
