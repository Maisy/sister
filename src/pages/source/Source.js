import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputText from '../../components/in/InputText';
import TableData from './TableData';

function SourceInput({ setSourceData, setVariables, setTableData }) {
  const { variables, textData } = useSelector(state => state.contents);

  useEffect(() => {
    setVariables(variables);
  }, [variables, setVariables]);

  useEffect(() => {
    setSourceData(textData);
  }, [textData, setSourceData]);

  return (
    <div>
      <InputText
        name="source_variables"
        defautRows={1}
        defaultValue={variables}
        onChanged={setVariables}
      ></InputText>
      <InputText
        name="source_data"
        defautRows={6}
        defaultValue={textData}
        onChanged={setSourceData}
      ></InputText>
      <TableData setTableData={setTableData}></TableData>
    </div>
  );
}

export default SourceInput;
