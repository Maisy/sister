import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    minWidth: "unset",
    width: "100%",
    height: "100%",
    // color: "#f0f0f0"
    color:  "black"
  }
});

export default function RunButton({ onClick }) {
  const classes = useStyle();
  return (
    <Button
      className={classes.root}
      variant="contained"
      // color="primary"
      onClick={onClick}
    >
      >>
    </Button>
  );
}
