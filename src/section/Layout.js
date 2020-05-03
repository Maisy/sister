import React, { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import InputContents from './in/InputContents';
import ViewContents from './out/ViewContents';
import RunButton from '../components/RunButton';
import ExternalButtonGroup from '../components/ExternalButtonGroup';
// import ErrorChild from '../components/common/ErrorChild';

export default function Layout() {
  const [inputData, setInputData] = useState({});

  const setInputCallback = useCallback(
    (key, value) => {
      setInputData((state) => ({
        ...state,
        [key]: value,
      }));
    },
    [setInputData],
  );
  return (
    <Grid container spacing={3}>
      {/* <ErrorChild></ErrorChild> */}
      <Grid item xs={12} sm={12} md={5}>
        <ExternalButtonGroup />
        <InputContents setInputData={setInputCallback} />
      </Grid>
      <Grid item xs={12} sm={12} md={1}>
        <RunButton inputData={inputData} />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <ViewContents />
      </Grid>
    </Grid>
  );
}
