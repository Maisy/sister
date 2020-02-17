import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 0 20px 0",
    textAlign: "left"
  }
}));

const splitTextNewLine = function(data = "") {
  return data.split("\n").map((line, idx) => {
    return (
      <span key={idx}>
        {line}
        <br />
      </span>
    );
  });
};

export default function ViewText(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.root}>
      {splitTextNewLine(data)}
    </div>
  );
}