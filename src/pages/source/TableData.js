import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableDataAddButton from './DataAddButton';
import { useState } from 'react';
import TableDataSet from './TableDataSet';

function TableData({ setTableData }) {
  const { tableSetList } = useSelector(state => state.contents);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (!tableSetList) {
      return;
    }
    setDataList(tableSetList);
  }, [tableSetList]);

  useEffect(() => {
    setTableData(dataList);
  }, [dataList, setTableData]);

  const addDataFunc = () => {
    const newList = [
      ...dataList,
      { id: dataList.length, defaultData: [], defaultRows: [] },
    ];
    setDataList(newList);
  };

  const deleteDataFunc = selectedIdx => {
    const newList = [];
    let idIdx = 0;
    dataList.forEach(({ defaultData, defaultRows }, idx) => {
      if (idx !== selectedIdx) {
        newList.push({
          id: idIdx++,
          defaultData,
          defaultRows,
        });
      }
    });
    setDataList(newList);
  };

  const setOneData = (idx, data) => {
    // console.log(`set ${idx} data...`);
    const newData = {
      ...dataList[idx],
      defaultData: data,
    };
    dataList[idx] = newData;
    setDataList(dataList);
  };
  const setRow = (idx, data) => {
    // console.log(`set ${idx} row...`);
    const newData = {
      ...dataList[idx],
      defaultRows: data,
    };
    dataList[idx] = newData;
    setDataList(dataList);
  };

  // console.log(dataList);
  // console.log('render table data...');

  return (
    <div>
      {dataList.map(({ id, defaultData, defaultRows }, idx) => {
        return (
          <TableDataSet
            key={id + '' + idx}
            dataIdx={id}
            defaultData={defaultData}
            defaultRows={defaultRows}
            deleteCallback={deleteDataFunc}
            setData={setOneData}
            setRow={setRow}
          ></TableDataSet>
        );
      })}
      <TableDataAddButton onClick={addDataFunc}>ADD</TableDataAddButton>
    </div>
  );
}
export default React.memo(TableData);
