import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IDeleteElement, IEditElement, IState } from "../../interface/interface";
import { loadingUsers } from '../../store/thunk/thunk';
import * as selectors from '../../store/store';
import { getUsers, editUsersLIst, removeUser } from '../../store/usersReducer/action';
import { DashboardWrap } from '../Dashboard/Dashboard';
import { ModalTemplate } from '../../Template/ModalTemplate/ModalTemplate';
import { FormEditTemplate } from '../../Template/FormEditTemplate/FormEditTemplate';
import Button from "@material-ui/core/Button";
import { MainTitleTemplate } from "../../Template/MainTitleTemplate/MainTitleTemplate";
import { columns, newUser, fieldsOptions } from './constants';

export const Users = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAddIsOpen, setAddIsOpen] = useState(false);
  const [dataId, setDataId] = useState('');
  const users = useSelector((state:IState) => selectors.users(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingUsers());
  },[]);

  const handleDeleteRow = (id:string) => {

    dispatch(removeUser(id));

    // dispatch(getUsers([users.filter((user:IDeleteElement) => user.id !== id)]));
  }

  const handleEdit = (id:string) => {
    setDataId(id);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleEditField = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target;

    return users.map((user: IEditElement) => user.id === dataId ? {...user, user: user[name] = value} : user);
  }

  const handleSubmitField = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(editUsersLIst(users));
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setAddIsOpen(true)}
      >
        Add user
      </Button>

      <section className="table-wrap">
        <MainTitleTemplate
          pref="users"
        >
          Users list
        </MainTitleTemplate>

        <DashboardWrap
          rows={users}
          columns={columns}
          handleDeleteRow={handleDeleteRow}
          handleEdit={handleEdit}
          fieldsOptions={fieldsOptions}
          addNewToList={newUser}
          modalIsOpen={modalAddIsOpen}
          closeModal={() => setAddIsOpen(false)}
        />
      </section>

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
