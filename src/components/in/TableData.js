import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentsActions } from '../../store/modules/contents';
import InputText from './InputText';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    border: '2px dashed rgba(0, 0, 0, 0.23)',
    padding: theme.spacing(2),
  },
}));

export default function TableData() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { tableData, tableDataRows } = useSelector(state => state.contents);

  const setTableData = (idx, data) => {
    dispatch(ContentsActions.setTableData({ idx, data }));
  };

  const setTableDataRows = data => {
    dispatch(ContentsActions.setTableDataRows(data));
  };

  return (
    <div className={classes.root}>
      <InputText
        name="table_data_rows"
        label="Table Data Rows"
        defautRows={1}
        value={tableDataRows}
        onChanged={data => setTableDataRows(data)}
      ></InputText>
      <InputText
        name="table_data"
        label="WEEK 1"
        defautRows={6}
        value={tableData[0]}
        onChanged={data => setTableData(0, data)}
      ></InputText>
      <InputText
        name="table_data2"
        label="WEEK 2"
        defautRows={6}
        value={tableData[1]}
        onChanged={data => setTableData(1, data)}
      ></InputText>
      <InputText
        name="table_data3"
        label="WEEK 3"
        defautRows={6}
        value={tableData[2]}
        onChanged={data => setTableData(2, data)}
      ></InputText>
      {/* <Button variant="contained">ADD</Button> */}
    </div>
  );
}
