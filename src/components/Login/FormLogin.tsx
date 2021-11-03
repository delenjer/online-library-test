import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { loginApi } from '../../api/api';
import { loginFields, errorFields } from '../../helpers/helpers';
import { FieldsForm } from './FieldsForm';
import { setToken } from '../../store/authenticationReducer/action';
import * as selector from '../../store/store';

export const FormLogin: React.FC = () => {
  const [ fieldVal, setFieldVal ] = useState(loginFields);
  const [ isError, setError ] = useState(errorFields);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleTextField = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    switch (e.target.type) {
      case 'text':
        setFieldVal(prevState => ({...prevState, login: e.target.value}));

        if (e.target.value === '') {
          setError(prevState => ({...prevState, errorLogin: false}));
        }
        break;

      case 'password':
        setFieldVal(prevState => ({...prevState, password: e.target.value}));

        if (e.target.value === '') {
          setError(prevState => ({...prevState, errorPassword: false}));
        }
        break;

      default:
        setFieldVal(loginFields);
    }
  }

  const handleSubmit = () => {
    if (loginApi.login !== fieldVal.login) {
      setError(prevState => ({...prevState, errorLogin: true}));
    } else {
      setError(prevState => ({...prevState, errorLogin: false}));
    }

    if (loginApi.password !== fieldVal.password) {
      setError(prevState => ({...prevState, errorPassword: true}));
    } else {
      setError(prevState => ({...prevState, errorPassword: false}));
    }

    if (loginApi.password === fieldVal.password && loginApi.login === fieldVal.login) {
      history.push('/');
      dispatch(setToken(true));
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '100%',
          maxWidth: '500px',
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

      <FieldsForm
        fieldVal={fieldVal}
        isError={isError}
        handleTextField={handleTextField}
      />

      <Button type="submit" variant="outlined">Log in</Button>
    </Box>
  );
}
