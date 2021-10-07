import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonLoading = styled(Button)({
  fontSize: '16px',
  padding: '6px 12px',
  lineHeight: '1.5',
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  marginTop: '20px',
  textTransform: 'inherit',
  '&:last-of-type': {
    marginLeft: '10px',
  }
});

export const ButtonTemplate = (props:any) => (
  <ButtonLoading onClick={props.handleClick} variant="contained" disabled={props.disabled}>{props.children}</ButtonLoading>
);
