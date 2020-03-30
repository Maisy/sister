import React from 'react';
import { useSelector } from 'react-redux';
import InputText from '../../components/in/InputText';

function UserEmails({ onChanged }) {
  const mailValue = useSelector(({ basicInfo }) => basicInfo.userEmails);

  return (
    <InputText
      name="email"
      defautRows={10}
      defaultValue={mailValue}
      onChanged={value => onChanged('userEmails', value)}
    ></InputText>
  );
}

export default UserEmails;
