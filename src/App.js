import React, { useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import InputContents from "./components/input/InputContents";
import ViewContents from "./components/view/ViewContents";
import RunButton from "./components/RunButton";
import SampleInput from "./resource/sample"

function App() {
  const [inputData, setInputData] = useState(SampleInput);
  const [viewData, setViewData] = useState({});

  const onInputChanged = useCallback(
    dataObject => {
      setInputData(inputData => {
        return { ...inputData, ...dataObject };
      });
    },
    // [setInputData]
    []
  );

  // useMemo
  const onRun = useCallback(() => {
    setViewData(inputData);
  }, [inputData, setViewData]);

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <InputContents defaultValue={inputData} onChanged={onInputChanged}></InputContents>
        </Grid>
        <Grid item xs={12} sm={1}>
          <RunButton onClick={onRun}></RunButton>
        </Grid>
        <Grid item xs={12} sm={5}>
          <ViewContents data={viewData}></ViewContents>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
