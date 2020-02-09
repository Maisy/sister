import React from "react";
import InputPages from "./InputPages";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    minHeight: 640,
    color: theme.palette.text.secondary
  }
}));

export default function InputContents({ onChanged, defaultValue }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <InputPages
        onChanged={onChanged}
        defaultValue={defaultValue}
      ></InputPages>
    </Paper>
  );
}
