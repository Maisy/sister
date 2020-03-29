import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import InputContents from '../components/in/ContentsWrapper';
import ViewContents from '../components/out/ContentsWrapper';
import RunButton from '../components/common/RunButton';
import ExternalButtonGroup from '../components/common/ExternalButtonGroup';
import { useDispatch } from 'react-redux';
import { ContentsActions } from '../store/modules/contents';
// import TestComponent from './TestComponent';

export default function Layout() {
  const [tableData, setTableData] = useState([]);
  // const [templateData, setTemplateData] = useState([]);
  const dispatch = useDispatch();

  const runClick = () => {
    dispatch(ContentsActions.setTableDataSet(tableData));
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={5}>
        <ExternalButtonGroup></ExternalButtonGroup>
        <InputContents
          setTableData={setTableData}
          // setTemplateData={setTemplateData}
        ></InputContents>
      </Grid>
      <Grid item xs={12} sm={12} md={1}>
        <RunButton addRunClick={runClick}></RunButton>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <ViewContents></ViewContents>
      </Grid>
    </Grid>
  );
}
