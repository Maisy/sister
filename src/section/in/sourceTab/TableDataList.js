import React from 'react';
import TableDataAddButton from './DataAddButton';
import TableData from './TableData';

function TableDataList({ value: dataList, onChanged: setDataList }) {
  const addDataFunc = () => {
    setDataList(
      dataList.concat({
        id: dataList.length,
        defaultData: '',
        defaultRows: '',
      }),
    );
  };

  const deleteDataFunc = (idx) => () => {
    setDataList(
      dataList
        .filter((data) => data.id !== idx)
        .map((data, idx) => ({ ...data, id: idx })),
    );
  };

  const setTableData = (idx) => (updated) => {
    setDataList(
      dataList.map((data) =>
        data.id === idx
          ? {
              ...data,
              defaultData: updated,
            }
          : data,
      ),
    );
  };
  const setTableRows = (idx) => (updatedRow) => {
    setDataList(
      dataList.map((data) =>
        data.id === idx ? { ...data, defaultRows: updatedRow } : data,
      ),
    );
  };

  // console.log('render table data...');

  return (
    <div>
      {dataList.map(({ id, defaultData, defaultRows }, idx) => {
        return (
          <TableData
            key={id + '' + idx}
            name={`WEEK ${idx + 1}`}
            defaultRows={defaultRows}
            setTableRows={setTableRows(idx)}
            defaultData={defaultData}
            setTableData={setTableData(idx)}
            deleteCallback={deleteDataFunc(idx)}
          />
        );
      })}
      <TableDataAddButton onClick={addDataFunc}>ADD</TableDataAddButton>
    </div>
  );
}
export default React.memo(TableDataList, (prev, next) => {
  return prev.value === next.value;
});
