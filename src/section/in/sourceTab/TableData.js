import React from 'react';
import PropTypes from 'prop-types';

import InputText from '../InputText';
import { makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Clear';

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: 'right',
    // backgroundColor: '#dbdbdb',
    border: '2px dashed rgba(0, 0, 0, 0.23)',
    padding: `4px 8px 8px 8px`,
    margin: `${theme.spacing(2)}px 0`,
  },
}));

export default function TableData({
  // dataIdx,
  name,
  defaultData,
  defaultRows,
  setTableRows,
  setTableData,
  deleteCallback,
}) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {/* {dataIdx} */}
      <IconButton
        aria-label="delete"
        size="small"
        edge="end"
        onClick={() => deleteCallback()}
      >
        <DeleteIcon></DeleteIcon>
      </IconButton>
      <InputText
        name={`[${name}] Table Data Rows`}
        defautRows={1}
        value={defaultRows}
        onChanged={(data) => setTableRows(data)}
      ></InputText>
      <InputText
        name={`[${name}] Table Data`}
        defautRows={6}
        value={defaultData}
        onChanged={(data) => setTableData(data)}
      ></InputText>
    </div>
  );
}

TableData.propTypes = {
  name: PropTypes.string.isRequired,
  defaultData: PropTypes.string.isRequired,
  defaultRows: PropTypes.string.isRequired,
  setTableRows: PropTypes.func.isRequired,
  setTableData: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};
