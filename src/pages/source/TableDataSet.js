import React from 'react';
import InputText from '../../components/in/InputText';
import { makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Clear';

const useStyle = makeStyles(theme => ({
  root: {
    textAlign: 'right',
    // backgroundColor: '#dbdbdb',
    border: '2px dashed rgba(0, 0, 0, 0.23)',
    padding: `4px 8px 8px 8px`,
    margin: `${theme.spacing(2)}px 0`,
  },
}));

export default function TableDataSet({
  dataIdx,
  defaultData = [],
  defaultRows = [],
  deleteCallback,
  setData: setTableData,
  setRow: setTableDataRows,
}) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {dataIdx}
      <IconButton
        aria-label="delete"
        size="small"
        edge="end"
        onClick={e => deleteCallback(dataIdx)}
      >
        <DeleteIcon></DeleteIcon>
      </IconButton>
      <InputText
        name={`table_data_rows${dataIdx + 1}`}
        label={`Table Data Rows (WEEK ${dataIdx + 1})`}
        defautRows={1}
        defaultValue={defaultRows}
        onChanged={data => setTableDataRows(dataIdx, data)}
      ></InputText>
      <InputText
        name={`table_data${dataIdx + 1}`}
        label={`WEEK ${dataIdx + 1}`}
        defautRows={6}
        defaultValue={defaultData}
        onChanged={data => setTableData(dataIdx, data)}
      ></InputText>
    </div>
  );
}
