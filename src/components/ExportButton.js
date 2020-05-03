import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsActions } from '../store/modules/contents';
import { StaticActions } from '../store/modules/basicInfos';
import { getFormatDate } from '../utils/date';
import { saveFile } from '../utils/file';

export default function ExportButton() {
  const dispatch = useDispatch();
  const [save, setSave] = useState(false);
  const contentsFileData = useSelector((state) => state.contents.fileData);
  const staticFileData = useSelector((state) => state.basicInfo.fileData);

  const exportActions = () => {
    dispatch(StaticActions.exportEmailData());
    dispatch(ContentsActions.exportContentsData());
    setSave(true);
  };

  useEffect(() => {
    if (save) {
      saveFile(
        getFormatDate(new Date()) + '.json',
        JSON.stringify({ ...staticFileData, ...contentsFileData }),
      );
      setSave(false);
    }
  }, [save, contentsFileData, staticFileData]);

  return (
    <Button variant="outlined" size="small" onClick={exportActions}>
      EXPORT
    </Button>
  );
}
