import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputText from './InputText'
import { ContentsActions } from '../../store/modules/contents'

function SourceInput({ variables, textData, tableData, ContentsActions }) {
  return (
    <div>
      <InputText
        name="source_variables"
        defautRows={1}
        value={variables}
        onChanged={ContentsActions.setVariables}
      ></InputText>
      <InputText
        name="source_data"
        defautRows={6}
        value={textData}
        onChanged={ContentsActions.setTextData}
      ></InputText>
      <InputText
        name="table_data"
        defautRows={10}
        value={tableData}
        onChanged={ContentsActions.setTableData}
      ></InputText>
    </div>
  )
}

const mapStateToProps = ({ contents }) => {
  const { variables, textData, tableData } = contents
  return {
    variables,
    textData,
    tableData,
  }
}

const mapDispatchToProps = dispatch => ({
  ContentsActions: bindActionCreators(ContentsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SourceInput)
