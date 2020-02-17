import React from "react";
import ViewText from "./ViewText";
import { connect } from "react-redux";

function Receiver({ keyId, data }) {
  const receiverList = data[keyId] || []
  return <ViewText data={receiverList.join(", ")}></ViewText>;
}

const mapStateToProps = state => ({
  data: state.static.receiver
});
export default connect(mapStateToProps, () => ({}))(Receiver);
