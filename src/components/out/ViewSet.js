import React from 'react';
import ViewText from './ViewText';
import PivotTable from './PivotTable';

export default function ViewSet({ id, inputData }) {
  const {
    preText,
    // tableColumnsLabel,
    // tableRowsLabel,
    // tableDataColumns,
    tableData,
    postText,
  } = inputData;
  return (
    <div id={id}>
      <ViewText data={preText}></ViewText>
      <PivotTable
        // columnsLabel={tableColumnsLabel}
        // rowsLabel={tableRowsLabel}
        // tableDataColumns={tableDataColumns}
        tableData={tableData}
      ></PivotTable>
      <ViewText data={postText}></ViewText>
    </div>
  );
}
