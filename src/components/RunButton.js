import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { parseData } from "../store/modules/contents";
import { getReceiver } from "../store/modules/static";

const useStyle = makeStyles({
  root: {
    minWidth: "unset",
    width: "100%",
    height: "100%",
    // color: "#f0f0f0"
    color: "black"
  }
});

function RunButton({ parseData, getReceiver }) {
  const classes = useStyle();
  return (
    <Button
      className={classes.root}
      variant="contained"
      // color="primary"
      onClick={() => {
        getReceiver();
        parseData();
      }}
    >
      >>
    </Button>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  parseData: () => dispatch(parseData()),
  getReceiver: () => dispatch(getReceiver())
});

export default connect(mapStateToProps, mapDispatchToProps)(RunButton);
