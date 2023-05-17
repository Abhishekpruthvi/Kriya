import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const SuccessPopup = ({ open, message, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={30000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SuccessPopup;
