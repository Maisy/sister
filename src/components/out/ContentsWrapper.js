import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ViewSet from "./ViewSet";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 5,
    textAlign: "center",
    color: "black",
    fontSize: "10pt",
    fontFamily: "맑은 고딕"
  }
}));

export default function ViewContents({ dataList }) {
  const classes = useStyles();
  // const { pre_text, table_columns, table_data, post_text } = inputData;

  return (
    dataList &&
    dataList.map((data, idx) => {
      return data ? (
        <Paper className={classes.paper} key={idx}>
          <ViewSet inputData={data}></ViewSet>
        </Paper>
      ) : (
        ""
      );
    })
  );
}
