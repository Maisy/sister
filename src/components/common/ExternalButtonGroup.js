import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsActions } from '../../store/modules/contents';
import { StaticActions } from '../../store/modules/basicInfos';
import { getFormatDate } from '../../utils/date';
import { saveFile, loadJsonFile } from '../../utils/file';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // border: '2px solid #FF6B6B',
    padding: 8,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    // backgroundColor: '#ffe0e9',
  },
  importButton: {
    width: 200,
  },
});

function ExternalButtonGroup() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [save, setSave] = useState(false);
  const contentsFileData = useSelector(state => state.contents.fileData);
  const staticFileData = useSelector(state => state.basicInfo.fileData);

  const importActions = data => {
    dispatch(StaticActions.importEmailData(data));
    dispatch(ContentsActions.importContentsData(data));
  };

  const exportActions = () => {
    dispatch(StaticActions.exportEmailData());
    dispatch(ContentsActions.exportContentsData());
    setSave(true);
  };

  useEffect(() => {
    if (save) {
      saveFile(
        getFormatDate(new Date()) + '.json',
        JSON.stringify({ ...staticFileData, ...contentsFileData })
      );
      setSave(false);
    }
  }, [save, contentsFileData, staticFileData]);

  return (
    <div className={classes.root}>
      {/* <label htmlFor="ex_file">업로드</label> */}
      <Input
        // id="ex_file"
        className={classes.importButton}
        type={'file'}
        onChange={e => loadJsonFile(e, importActions)}
        inputProps={{ accept: '.json' }}
      ></Input>

      <Button variant="outlined" size="small" onClick={exportActions}>
        Save data
      </Button>
    </div>
  );
}

export default ExternalButtonGroup;
