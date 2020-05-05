import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import InputText from '../InputText';

function UserEmails({ onChanged }) {
  const mailValue = useSelector(({ basicInfo }) => basicInfo.userEmails);

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(mailValue);
  }, [mailValue]);

  return (
    <InputText
      name="Emails"
      defautRows={10}
      value={value}
      onChanged={(value) => {
        setValue(value);
        onChanged('userEmails', value);
      }}
    ></InputText>
  );
}

UserEmails.propTypes = {
  onChanged: PropTypes.func.isRequired,
};

export default UserEmails;
