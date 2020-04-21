import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImportButton from './ImportButton';
import ExportButton from './ExportButton';

const useStyles = makeStyles({
  root: {
    padding: 8,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      flexGrow: 1,
    },
  },
  importButton: {
    width: 200,
  },
});

function ExternalButtonGroup() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImportButton />
      <ExportButton />
    </div>
  );
}

export default ExternalButtonGroup;
