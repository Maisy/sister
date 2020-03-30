import React from 'react';
import ViewText from './ViewText';
import { useSelector } from 'react-redux';

function Receiver({ keyId, data }) {
  const receiver = useSelector(({ basicInfo }) => basicInfo.receiver);
  const receiverList = receiver[keyId] || [];
  return <ViewText data={receiverList.join(', ')}></ViewText>;
}

export default React.memo(Receiver);
