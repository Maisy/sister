import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import InputText from '../InputText';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function EquipInfos({ onChanged }) {
  const classes = useStyles();
  const { equipInfos, equipColumns } = useSelector(
    ({ basicInfo }) => basicInfo,
  );

  const [attrs, setAttrs] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    setAttrs(equipColumns);
  }, [equipColumns]);

  useEffect(() => {
    setData(equipInfos);
  }, [equipInfos]);

  // console.log('equip info expander render...');

  return (
    <div className={classes.root}>
      <InputText
        name="Equipment Attributes"
        defautRows={1}
        value={attrs}
        onChanged={(value) => {
          setAttrs(value);
          onChanged('equipColumns', value);
        }}
      ></InputText>
      <InputText
        name="Equipment Data"
        defautRows={10}
        value={data}
        onChanged={(value) => {
          setData(value);
          onChanged('equipInfos', value);
        }}
      ></InputText>
    </div>
  );
}

EquipInfos.propTypes = {
  onChanged: PropTypes.func.isRequired,
};

export default React.memo(EquipInfos);
