import React from 'react';
import PropTypes from 'prop-types';

import ViewText from './ViewText';
import { useSelector } from 'react-redux';

function Receiver({ keyId }) {
  const receiver = useSelector(({ basicInfo }) => basicInfo.receiver);
  const receiverList = receiver[keyId] || [];
  return <ViewText data={receiverList.join(', ')}></ViewText>;
}
Receiver.propTypes = {
  keyId: PropTypes.string.isRequired,
};

export default React.memo(Receiver);
