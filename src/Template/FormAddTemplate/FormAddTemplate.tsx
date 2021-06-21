import React, { FC } from 'react';

import { formUseStyles } from '../../helpers/helpers';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { IFormAddTemplate } from "../../interface/interface";

type fieldsProps = {
  name: string,
  placeholder: string,
}

export const FormAddTemplate: FC<IFormAddTemplate> = (
  {
    handleSubmit,
    handleChange,
    addNewElement,
    handleClose,
    fieldsOptions
  }
) => {
  const classes = formUseStyles();

  return (
    <form
      className={classes.root} noValidate autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      {
        fieldsOptions.map(({ name, placeholder }: fieldsProps) => {

          return (
            <div key={name} className="field-wrap">
              <TextField
                id="outlined-read-only-input"
                key={name}
                type="text"
                name={name}
                placeholder={placeholder}
                value={addNewElement[name]}
                InputProps={{
                  readOnly: false,
                }}
                variant="outlined"
                // label={placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            </div>
          );
        })
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
