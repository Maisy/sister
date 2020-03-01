import React from 'react';
import { Grid } from '@material-ui/core';
import InputContents from './in/ContentsWrapper';
import ViewContents from './out/ContentsWrapper';
import RunButton from './common/RunButton';
import ExternalButtonGroup from './common/ExternalButtonGroup';

export default function Layout() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={5}>
        <ExternalButtonGroup></ExternalButtonGroup>
        <InputContents></InputContents>
      </Grid>
      <Grid item xs={12} sm={12} md={1}>
        <RunButton></RunButton>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <ViewContents></ViewContents>
      </Grid>
    </Grid>
  );
}
