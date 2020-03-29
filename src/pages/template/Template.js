import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputText from '../../components/in/InputText';
import { ContentsActions } from '../../store/modules/contents';

function Template({
  preTextSchema,
  postTextSchema,
  tableColumnsLabel,
  tableRowsLabel,
  ContentsActions,
}) {
  return (
    <div>
      <InputText
        name="pre_text"
        defaultValue={preTextSchema}
        onChanged={ContentsActions.setPreText}
      ></InputText>
      <InputText
        name="table_columns_label"
        label="Column Name"
        defautRows={1}
        defaultValue={tableColumnsLabel}
        onChanged={ContentsActions.setTableColumnsLabel}
      ></InputText>
      <InputText
        name="table_rows_label"
        label="Rows Name (optional)"
        defautRows={1}
        defaultValue={tableRowsLabel}
        onChanged={ContentsActions.setTableRowsLabel}
      ></InputText>
      {/* <InputText
        name="table_columns_hide"
        label="Hide Column Name"
        defautRows={1}
        value={defaultValue["table_columns_hide"]}
        onChanged={onChanged}
      ></InputText> */}
      <InputText
        name="post_text"
        defaultValue={postTextSchema}
        onChanged={ContentsActions.setPostText}
      ></InputText>
    </div>
  );
}

const mapStateToProps = ({ contents }) => {
  const { preTextSchema, postTextSchema, table } = contents;
  return {
    preTextSchema,
    postTextSchema,
    tableColumnsLabel: table ? table.columnsLabel : [],
    tableRowsLabel: table ? table.rowsLabel : [],
  };
};

const mapDispatchToProps = dispatch => ({
  ContentsActions: bindActionCreators(ContentsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
