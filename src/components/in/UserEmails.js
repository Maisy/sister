import React from "react";
import InputText from "./InputText";
import { connect } from "react-redux";
import {setUserEmails} from "../../store/modules/static"

function UserEmails({ userEmails, setUserEmails }) {
  return (
    <InputText
      name="email"
      defautRows={10}
      defaultValue={userEmails}
      onChanged={setUserEmails}
    ></InputText>
  );
}

const mapStateToProps = state => ({
  userEmails: state.static.userEmails
});

const mapDispatchToProps = dispatch => ({
  setUserEmails: value => dispatch(setUserEmails(value)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEmails);
