import React from 'react';
import { useSelector } from 'react-redux';
import InputText from '../../components/in/InputText';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function EquipInfos({ onChanged }) {
  const classes = useStyles();
  const { equipInfos, equipColumns } = useSelector(
    ({ basicInfo }) => basicInfo
  );

  return (
    <div className={classes.root}>
      <InputText
        name="equip_info_columns"
        defautRows={1}
        defaultValue={equipColumns}
        onChanged={value => onChanged('equipColumns', value)}
      ></InputText>
      <InputText
        name="equip_info_data"
        defautRows={10}
        defaultValue={equipInfos}
        onChanged={value => onChanged('equipInfos', value)}
      ></InputText>
    </div>
  );
}

export default React.memo(EquipInfos);
