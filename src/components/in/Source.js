import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputText from './InputText';
import { ContentsActions } from '../../store/modules/contents';
import TableData from './TableData';

function SourceInput() {
  const dispatch = useDispatch();
  const { variables, textData } = useSelector(state => state.contents);

  const setVariables = data => {
    dispatch(ContentsActions.setVariables(data));
  };

  const setTextData = data => {
    dispatch(ContentsActions.setTextData(data));
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
      <TableData></TableData>
    </div>
  );
}

export default SourceInput;
