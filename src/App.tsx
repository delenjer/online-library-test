import React from 'react';
import './App.scss';

import Button from '@material-ui/core/Button';
import { lastBorrowedBook } from './api/api';

console.log(lastBorrowedBook);

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

export default App;
