import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { InputContext } from '../../InputContext';
import InputText from '../InputText';

function Template() {
  const { setInputData } = useContext(InputContext);

  const {
    preTextSchema,
    postTextSchema,
    tableColumnsLabel,
    tableRowsLabel,
  } = useSelector(({ contents }) => contents);

  const [templateData, setTemplateData] = useState({
    preTextSchema: '',
    postTextSchema: '',
    tableColumnsLabel: '',
    tableRowsLabel: '',
  });

  useEffect(() => {
    setTemplateData({
      preTextSchema,
      postTextSchema,
      tableColumnsLabel,
      tableRowsLabel,
    });
  }, [preTextSchema, postTextSchema, tableColumnsLabel, tableRowsLabel]);

  const setDataCB = (key, value) => {
    setTemplateData((data) => ({
      ...data,
      [key]: value,
    }));
    setInputData(key, value);
  };

  return (
    <div>
      <InputText
        name="Pre Text"
        value={templateData['preTextSchema']}
        onChanged={(val) => {
          setDataCB('preTextSchema', val);
        }}
      ></InputText>
      <InputText
        name="[Table] Column Name"
        defautRows={1}
        value={templateData['tableColumnsLabel']}
        onChanged={(val) => {
          setDataCB('tableColumnsLabel', val);
        }}
      ></InputText>
      <InputText
        name="[Table] Rows Name"
        defautRows={1}
        value={templateData['tableRowsLabel']}
        onChanged={(val) => {
          setDataCB('tableRowsLabel', val);
        }}
      ></InputText>
      <InputText
        name="Post Text"
        value={templateData['postTextSchema']}
        onChanged={(val) => {
          setDataCB('postTextSchema', val);
        }}
      ></InputText>
    </div>
  );
}

export default React.memo(Template);
