import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px 0`,
    width: '100%',
  },
}));

export default function InputText({
  defautRows = 4,
  name,
  label,
  onChanged,
  defaultValue = '',
}) {
  const classes = useStyles();

  const handleOnChange = event => {
    // console.log(event.target.value)
    // onChanged({ [name]: event.target.value });
    if (typeof onChanged !== 'function') {
      console.error('onChanged is not function');
      console.log(onChanged);
      return;
    }

    onChanged(event.target.value);
  };

  return (
    <TextField
      key={defaultValue + '' + name}
      className={classes.root}
      label={label ? label : name.replace('_', ' ').toUpperCase()}
      multiline
      rows={defautRows}
      variant="outlined"
      name={name}
      defaultValue={defaultValue}
      onChange={handleOnChange}
    />
  );
}
