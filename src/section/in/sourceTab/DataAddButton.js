import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: { width: '100%' },
});

export default function TableDataAddButton({ onClick }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="primary"
      onClick={onClick}
    >
      Add Table Data Rows
    </Button>
  );
}

TableDataAddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
