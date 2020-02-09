import React from "react";
import ViewTable from "./ViewTable";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ViewText from "./ViewText";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    fontSize: "10pt",
    fontFamily: "맑은 고딕"
  }
}));

export default function ViewContents({ data: inputData }) {
  const classes = useStyles();
  const { pre_text, table_columns, table_data, post_text } = inputData;

  return (
    <Paper className={classes.paper}>
      <ViewText data={pre_text ? pre_text : "Click >> Button"}></ViewText>
      <ViewTable columns={table_columns} data={table_data}></ViewTable>
      <ViewText data={post_text}></ViewText>
    </Paper>
  );
}
