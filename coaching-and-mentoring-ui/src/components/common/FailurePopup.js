import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const FailurePopup = ({ open, message, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={30000} onClose={handleClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MuiAlert onClose={handleClose} severity="error" elevation={6} variant="filled" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default FailurePopup;
