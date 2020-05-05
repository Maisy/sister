import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function ErrorDialog({ onClose }) {
  const handleClose = (event, reason) => {
    console.log('handle close... ' + reason);
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <Snackbar open={true} autoHideDuration={5000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="error"
        onClose={handleClose}
      >
        this is error
      </MuiAlert>
    </Snackbar>
  );
}

ErrorDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};
