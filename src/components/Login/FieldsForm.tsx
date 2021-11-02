import React from 'react';
import TextField from '@mui/material/TextField';
import { IFieldsForm } from '../../interface/interface';

export const FieldsForm: React.FC<IFieldsForm> = ({ isError, fieldVal, handleTextField }) => {
  console.log(fieldVal);

  return (
    <>
      <div>
        <TextField
          error={isError.errorLogin}
          id="outlined-basic"
          label={isError.errorLogin ? 'Add correct login' : 'Login'}
          variant="outlined"
          value={fieldVal.login}
          onChange={(e) => handleTextField(e)}
        />
      </div>

      <div>
        <TextField
          error={isError.errorPassword}
          id="outlined-password-input"
          label={isError.errorPassword ? 'Add correct password' : 'Password'}
          type="password"
          autoComplete="current-password"
          value={fieldVal.password}
          onChange={(e) => handleTextField(e)}
        />
      </div>
    </>
  );
};

