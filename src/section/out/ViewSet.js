import React from 'react';
import ViewText from './ViewText';
import PivotTable from './PivotTable';

export default function ViewSet({ id, inputData }) {
  const { preText, tableData, postText } = inputData;
  return (
    <div id={id}>
      <ViewText data={preText}></ViewText>
      <PivotTable tableData={tableData}></PivotTable>
      <ViewText data={postText}></ViewText>
    </div>
  );
}
