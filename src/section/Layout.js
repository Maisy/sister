import React, { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import InputContents from './in/InputContents';
import ViewContents from './out/ViewContents';
import RunButton from '../components/RunButton';
import ExternalButtonGroup from '../components/ExternalButtonGroup';
// import ErrorChild from '../components/common/ErrorChild';
import { InputContext } from './InputContext';

export default function Layout() {
  const [inputData, setInputData] = useState({ sample: 123 });

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
      <InputContext.Provider
        value={{ inputData, setInputData: setInputCallback }}
      >
        {/* <ErrorChild></ErrorChild> */}
        <Grid item xs={12} sm={12} md={5}>
          <ExternalButtonGroup />
          <InputContents />
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
          <RunButton />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ViewContents />
        </Grid>
      </InputContext.Provider>
    </Grid>
  );
}
