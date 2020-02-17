import React from "react";
import ViewTable from "./ViewTable";
import ViewText from "./ViewText";

export default function ViewSet({ id, inputData }) {
  const { preText, tableColumnsLabel, tableRowsLabel, tableData, postText } = inputData;
  return (
    <div id={id}>
      <ViewText data={preText}></ViewText>
      <ViewTable columnsLabel={tableColumnsLabel} rowsLabel={tableRowsLabel} data={tableData}></ViewTable>
      <ViewText data={postText}></ViewText>
    </div>
  );
}