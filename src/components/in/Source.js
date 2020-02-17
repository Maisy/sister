import React from "react";
import { connect } from "react-redux";
import InputText from "./InputText";
import {
  setVariables,
  setTextData,
  setTableData
} from "../../store/modules/contents";

function SourceInput({
  variables,
  textData,
  tableData,
  setVariables,
  setTextData,
  setTableData
}) {
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
      <InputText
        name="table_data"
        defautRows={10}
        defaultValue={tableData}
        onChanged={setTableData}
      ></InputText>
    </div>
  );
}

const mapStateToProps = ({ contents }) => {
  const { variables, textData, tableData } = contents;
  return {
    variables,
    textData,
    tableData
  };
};

const mapDispatchToProps = dispatch => ({
  setVariables: value => dispatch(setVariables(value)),
  setTextData: value => dispatch(setTextData(value)),
  setTableData: value => dispatch(setTableData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceInput);
