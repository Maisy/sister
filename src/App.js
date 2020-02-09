import React, { useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
import InputContents from "./components/in/ContentsWrapper";
import ViewContents from "./components/out/ContentsWrapper";
import RunButton from "./components/RunButton";
// import CopyButton from "./components/CopyButton"
import SampleInput from "./resource/sample";

const replaceVariables = input => {
  const {
    //data
    source_variables,
    source_data,
    table_data,

    //template
    pre_text,
    post_text,
    table_columns
  } = input;
  const variableList = source_variables.split(",");
  const dataList = source_data.split("\n");
  const tableDataList = table_data.split("\n\n");

  const parseText = (str, variables, row) => {
    const data = row.split(",");
    let rst = str;
    variables.forEach((variable, idx) => {
      rst = rst.replace(`__${variable.trim()}__`, data[idx].trim());
    });
    return rst;
  };

  return dataList.map((userData, idx) => {
    return {
      table_columns,
      pre_text: parseText(pre_text, variableList, userData),
      post_text: parseText(post_text, variableList, userData),
      table_data: tableDataList[idx]
    };
  });
};

function App() {
  const [inputData, setInputData] = useState(SampleInput);
  const [viewData, setViewData] = useState([]);

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
    const parsed = replaceVariables(inputData);

    setViewData(parsed);
  }, [inputData, setViewData]);

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <InputContents
            defaultValue={inputData}
            onChanged={onInputChanged}
          ></InputContents>
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
          <RunButton onClick={onRun}></RunButton>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ViewContents dataList={viewData}></ViewContents>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
