import React from "react";
import { connect } from "react-redux";
import InputText from "./InputText";
import { setPreText, setPostText, setTableColumnsLabel, setTableRowsLabel } from "../../store/modules/contents";

function Template({
  onChanged,
  preTextSchema,
  postTextSchema,
  tableColumnsLabel,
  tableRowsLabel,
  setPreTextSchema,
  setPostTextSchema,
  setTableColumnsLabel,
  setTableRowsLabel
}) {
  return (
    <div>
      <InputText
        name="pre_text"
        defaultValue={preTextSchema}
        onChanged={setPreTextSchema}
      ></InputText>
      <InputText
        name="table_columns_label"
        label="Column Name"
        defautRows={1}
        defaultValue={tableColumnsLabel}
        onChanged={setTableColumnsLabel}
      ></InputText>
      <InputText
        name="table_rows_label"
        label="Rows Name (optional)"
        defautRows={1}
        defaultValue={tableRowsLabel}
        onChanged={setTableRowsLabel}
      ></InputText>
      {/* <InputText
        name="table_columns_hide"
        label="Hide Column Name"
        defautRows={1}
        defaultValue={defaultValue["table_columns_hide"]}
        onChanged={onChanged}
      ></InputText> */}
      <InputText
        name="post_text"
        defaultValue={postTextSchema}
        onChanged={setPostTextSchema}
      ></InputText>
    </div>
  );
}

const mapStateToProps = ({contents}) => {
  const { preTextSchema, postTextSchema, table } = contents;
  return {
    preTextSchema,
    postTextSchema,
    tableColumnsLabel: table? table.columnsLabel: [],
    tableRowsLabel: table? table.rowsLabel: []
  };
};

const mapDispatchToProps = dispatch => ({
  setPreTextSchema: value => dispatch(setPreText(value)),
  setPostTextSchema: value => dispatch(setPostText(value)),
  setTableColumnsLabel: value => dispatch(setTableColumnsLabel(value)),
  setTableRowsLabel: value => dispatch(setTableRowsLabel(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
