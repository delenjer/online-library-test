import React from 'react';

import Button from "@material-ui/core/Button";
import Icon from '@mui/material/Icon';

export const ScrollTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="contained"
      color="primary"
      className="scroll-top"
    >
      <Icon>arrow_upward</Icon>
    </Button>
  );
};
