import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';

import InputText from '../InputText';
import TableDataList from './TableDataList';
import { InputContext } from '../../InputContext';

function SourceInput() {
  const { setInputData } = useContext(InputContext);

  const {
    variables: storeVariables,
    textData: storeTextData,
    tableSetList: storeTableData,
  } = useSelector((state) => state.contents);

  const [tableData, setTableData] = useState([]);
  const [variables, setVariables] = useState('');
  const [sourceData, setSourceData] = useState('');

  useEffect(() => {
    setVariables(storeVariables);
  }, [storeVariables]);

  useEffect(() => {
    setSourceData(storeTextData);
  }, [storeTextData]);

  useEffect(() => {
    setTableData(storeTableData);
  }, [storeTableData]);

  return (
    <div>
      <InputText
        name="Variables in text"
        defautRows={1}
        value={variables}
        onChanged={(value) => {
          setVariables(value);
          setInputData('variables', value);
        }}
      ></InputText>
      <InputText
        name="Data for variables"
        defautRows={6}
        value={sourceData}
        onChanged={(value) => {
          setSourceData(value);
          setInputData('textData', value);
        }}
      ></InputText>
      <TableDataList
        value={tableData}
        onChanged={(value) => {
          setTableData(value);
          setInputData('tableSetList', value);
        }}
      ></TableDataList>
    </div>
  );
}

export default SourceInput;
