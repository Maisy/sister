import React from 'react';
import { useSelector } from 'react-redux';
import InputText from '../../components/in/InputText';

function Template({ setTemplateData }) {
  const {
    preTextSchema,
    postTextSchema,
    table: { columnsLabel: tableColumnsLabel, rowsLabel: tableRowsLabel },
  } = useSelector(({ contents }) => contents);

  return (
    <div>
      <InputText
        name="pre_text"
        defaultValue={preTextSchema}
        onChanged={val => {
          setTemplateData('preTextSchema', val);
        }}
      ></InputText>
      <InputText
        name="table_columns_label"
        label="Column Name"
        defautRows={1}
        defaultValue={tableColumnsLabel}
        onChanged={val => {
          setTemplateData('tableColumnLabel', val);
        }}
      ></InputText>
      <InputText
        name="table_rows_label"
        label="Rows Name"
        defautRows={1}
        defaultValue={tableRowsLabel}
        onChanged={val => {
          setTemplateData('tableRowsLabel', val);
        }}
      ></InputText>
      <InputText
        name="post_text"
        defaultValue={postTextSchema}
        onChanged={val => {
          setTemplateData('postTextSchema', val);
        }}
      ></InputText>
    </div>
  );
}

export default React.memo(Template);
