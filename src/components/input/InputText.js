import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    // "& .MuiTextField-root": {
    margin: `${theme.spacing(1)}px 0`,
    width: "100%"
    // }
  }
}));

export default function InputText({ name, onChanged, defaultValue }) {
  const classes = useStyles();

  const handleOnChange = event => {
      onChanged({ [name]: event.target.value  });
  };

  return (
    <TextField
      className={classes.root}
      label={name.replace("_", " ").toUpperCase()}
      multiline
      rows="4"
      variant="outlined"
      name={name}
      defaultValue={defaultValue}
      onChange={handleOnChange}
    />
  );
}
