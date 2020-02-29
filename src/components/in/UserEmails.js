import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import InputText from './InputText'
// import { connect } from 'react-redux'

import { StaticActions } from '../../store/modules/static'

function UserEmails() {
  const dispatch = useDispatch();
  const mailValue = useSelector(state => state.static.userEmails)

  const setUserEmailValue = (data)=>{
    dispatch(StaticActions.setUserEmails(data))
  }

  return (
    <InputText
      name="email"
      defautRows={10}
      value={mailValue}
      onChanged={setUserEmailValue}
    ></InputText>
  )
}

export default UserEmails
