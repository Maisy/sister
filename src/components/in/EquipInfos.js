import React from 'react'
import { connect } from 'react-redux'
import InputText from './InputText'
import { makeStyles } from '@material-ui/core'
import { StaticActions } from '../../store/modules/static'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

function EquipInfos({
  defaultData,
  defaultColumns,
  onColumnChange,
  onDataChange,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <InputText
        name="equip_info_columns"
        defautRows={1}
        value={defaultColumns}
        onChanged={onColumnChange}
      ></InputText>
      <InputText
        name="equip_info_data"
        defautRows={10}
        value={defaultData}
        onChanged={onDataChange}
      ></InputText>
    </div>
  )
}

const mapStateToProps = state => ({
  defaultData: state.static.equipInfos,
  defaultColumns: state.static.equipColumns,
})
const mapDispatchToProps = dispatch => ({
  onColumnChange: value => dispatch(StaticActions.setEquipmentColumns(value)),
  onDataChange: value => dispatch(StaticActions.setEquipmentInfos(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EquipInfos)
