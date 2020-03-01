import React from 'react';
import ViewText from './ViewText';
import PivotTable from './PivotTable';

export default function ViewSet({ id, inputData }) {
  const {
    preText,
    tableColumnsLabel,
    tableRowsLabel,
    tableData,
    postText,
  } = inputData;
  return (
    <div id={id}>
      <ViewText data={preText}></ViewText>
      <PivotTable
        columnsLabel={tableColumnsLabel}
        rowsLabel={tableRowsLabel}
        dataObjList={tableData}
      ></PivotTable>
      <ViewText data={postText}></ViewText>
    </div>
  );
}
