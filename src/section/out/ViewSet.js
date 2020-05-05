import React from 'react';
import PropTypes from 'prop-types';

import ViewText from './ViewText';
import PivotTable from './PivotTable';

export default function ViewSet({ id, inputData }) {
  const { preText, tableData, postText } = inputData;
  return (
    <div id={id}>
      <ViewText data={preText}></ViewText>
      {tableData && <PivotTable tableData={tableData}></PivotTable>}
      <ViewText data={postText}></ViewText>
    </div>
  );
}

ViewSet.propTypes = {
  id: PropTypes.string.isRequired,
  inputData: PropTypes.object.isRequired,
};
