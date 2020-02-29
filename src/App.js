import React from "react";
import { Grid } from "@material-ui/core";
import InputContents from "./components/in/ContentsWrapper";
import ViewContents from "./components/out/ContentsWrapper";
import RunButton from "./components/RunButton";
// import SampleInput from "./resource/sample";
import ExternalButtonGroup from "./components/ExternalButtonGroup";


function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
