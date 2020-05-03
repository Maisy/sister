import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ContentsActions } from '../store/modules/contents';
import { StaticActions } from '../store/modules/basicInfos';
import { loadJsonFile } from '../utils/file';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  button: {
    width: 'auto',
    marginRight: 8,
  },
}));

function ImportButton({ label = 'Import' }) {
  const dispatch = useDispatch();
  const importActions = (data) => {
    dispatch(StaticActions.importEmailData(data));
    dispatch(ContentsActions.importContentsData(data));
  };

  const classes = useStyles();
  const [fileName, setFileName] = useState('');
  const handelSelectedFile = (e) => {
    const fileList = e.target.files;
    if (fileList.length > 0) {
      setFileName(fileList[0].name);
      loadJsonFile(e, importActions);
    }
  };

  return (
    <div className={classes.root}>
      <input
        type="file"
        accept=".json"
        id="contained-button-file"
        className={classes.input}
        onChange={handelSelectedFile}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="outlined"
          color="primary"
          component="span"
          className={classes.button}
        >
          {label}
        </Button>
      </label>
      <Typography>{fileName}</Typography>
    </div>
  );
}

export default React.memo(ImportButton);
