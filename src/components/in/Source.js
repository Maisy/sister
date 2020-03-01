import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputText from './InputText';
import { ContentsActions } from '../../store/modules/contents';

function SourceInput() {
  const dispatch = useDispatch();
  const { variables, textData, tableData } = useSelector(
    state => state.contents
  );

  const setVariables = data => {
    dispatch(ContentsActions.setVariables(data));
  };

  const setTextData = data => {
    dispatch(ContentsActions.setTextData(data));
  };
  const setTableData = data => {
    dispatch(ContentsActions.setTableData(data));
  };

  return (
    <div>
      <InputText
        name="source_variables"
        defautRows={1}
        value={variables}
        onChanged={setVariables}
      ></InputText>
      <InputText
        name="source_data"
        defautRows={6}
        value={textData}
        onChanged={setTextData}
      ></InputText>
      <InputText
        name="table_data"
        defautRows={10}
        value={tableData}
        onChanged={setTableData}
      ></InputText>
    </div>
  );
}

export default SourceInput;
