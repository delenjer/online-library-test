import React from 'react';

import { formUseStyles } from '../../helpers/helpers';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

export const FormEditTemplate = (
  {
    handleSubmit,
    value,
    onChange,
    handleClose,
    editFields
  }:any
) => {
  const classes = formUseStyles();
  const fields =  Object.keys(editFields[0]).filter((field) => field !== 'id');

  return (
    <form
      className={classes.root} noValidate autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      {
        fields.map(field => (
          <div key={field} className="field-wrap">
            <TextField
              id={field}
              label={field}
              name={field}
              variant="outlined"
              value={value[field]}
              onChange={(e) => {onChange(e)}}
            />
          </div>
        ))
      }

      <Button
        type="submit"
        autoFocus
        onClick={handleClose}
        color="primary"
      >
        Save changes
      </Button>
    </form>
  );
}
