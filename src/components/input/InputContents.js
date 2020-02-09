import React from "react";
import InputText from "./InputText";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    // height: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function InputContents({ onChanged, defaultValue }) {
  const classes = useStyles();
  //table_data, post_text
  return (
    <Paper className={classes.paper}>
      <InputText
        className={classes.root}
        name="pre_text"
        defaultValue={defaultValue["pre_text"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        className={classes.root}
        name="table_columns"
        defaultValue={defaultValue["table_columns"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        className={classes.root}
        name="table_data"
        defaultValue={defaultValue["table_data"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        className={classes.root}
        name="post_text"
        defaultValue={defaultValue["post_text"]}
        onChanged={onChanged}
      ></InputText>
    </Paper>
  );
}
