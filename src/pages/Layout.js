import React, { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import InputContents from '../components/in/ContentsWrapper';
import ViewContents from '../components/out/ContentsWrapper';
import RunButton from '../components/common/RunButton';
import ExternalButtonGroup from '../components/common/ExternalButtonGroup';
import { useDispatch } from 'react-redux';
import { ContentsActions } from '../store/modules/contents';
import { StaticActions } from '../store/modules/basicInfos';
// import TestComponent from './TestComponent';

export default function Layout() {
  //basic info
  const [staticData, setStaticData] = useState({});
  //template
  const [templateData, setTemplateData] = useState({});
  //source data
  const [tableData, setTableData] = useState([]);
  const [variables, setVariables] = useState('');
  const [sourceData, setSourceData] = useState('');
  const dispatch = useDispatch();

  const staticCB = useCallback(
    (key, value) => {
      setStaticData({
        ...staticData,
        [key]: value,
      });
    },
    [staticData]
  );

  const templateCB = useCallback(
    (key, value) => {
      setTemplateData({
        ...templateData,
        [key]: value,
      });
    },
    [templateData]
  );

  const runClick = () => {
    dispatch(StaticActions.setBasicInfo(staticData));
    dispatch(ContentsActions.setTemplate(templateData));
    dispatch(
      ContentsActions.setTableDataSet({
        variables,
        textData: sourceData,
        tableData,
      })
    );
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={5}>
        <ExternalButtonGroup></ExternalButtonGroup>
        <InputContents
          setStaticData={staticCB}
          setTemplateData={templateCB}
          setTableData={setTableData}
          setVariables={setVariables}
          setSourceData={setSourceData}
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
