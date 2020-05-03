import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1)}px 0`,
    width: '100%',
  },
}));

function InputText({ defautRows = 4, name, onChanged, value }) {
  // console.log(`render input text...${name}`);
  const classes = useStyles();
  const handleOnChange = (event) => {
    if (typeof onChanged !== 'function') {
      console.error('onChanged is not function');
      return;
    }

    onChanged(event.target.value);
  };

  return (
    <TextField
      key={name}
      multiline
      variant="outlined"
      className={classes.root}
      rows={defautRows}
      name={name}
      label={name}
      value={value}
      onChange={handleOnChange}
    />
  );
}
export default InputText;
