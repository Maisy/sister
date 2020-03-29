import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputText from '../../components/in/InputText';
import { ContentsActions } from '../../store/modules/contents';
import TableData from './TableData';

function SourceInput(props) {
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
        defaultValue={variables}
        onChanged={setVariables}
      ></InputText>
      <InputText
        name="source_data"
        defautRows={6}
        defaultValue={textData}
        onChanged={setTextData}
      ></InputText>
      <TableData {...props}></TableData>
    </div>
  );
}

export default SourceInput;
