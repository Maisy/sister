import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputText from '../InputText';

function Template({ setInputData }) {
  const {
    preTextSchema,
    postTextSchema,
    tableColumnsLabel,
    tableRowsLabel,
  } = useSelector(({ contents }) => contents);

  const [templateData, setTemplateData] = useState({});

  useEffect(() => {
    setTemplateData({
      preTextSchema,
      postTextSchema,
      tableColumnLabel: tableColumnsLabel,
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
        value={templateData['tableColumnLabel']}
        onChanged={(val) => {
          setDataCB('tableColumnLabel', val);
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
