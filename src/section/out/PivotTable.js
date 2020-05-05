import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { splitCommaWithTrim } from '../../utils/string';

const styles = {
  table: {
    margin: '20px 0',
    width: '350px',
    height: 200,
    fontSize: '10pt',
    border: '1px solid black',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#e6e6e6',
    border: '1px solid #444444',
    padding: '5px 10px',
    // padding: 0,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  td: {
    border: '1px solid #444444',
    padding: '5px 10px',
    // padding: 0,
    textAlign: 'center',
  },
  first: {
    textAlign: 'left',
  },
  emphasis: {
    color: 'red',
    fontWeight: 'bold',
  },
};

const pivot = (rowsLabel, origin) => {
  const result = [];
  if (rowsLabel.length === 0) {
    console.log('rows label is empty.');
    Object.keys(origin).forEach((dataKey) => {
      result.push(origin[dataKey]);
    });
    return result;
  }

  rowsLabel.forEach((weekColumnList, weekIdx) => {
    const keyNm = `week${weekIdx + 1}`;

    if (!Array.isArray(weekColumnList)) {
      return;
    }
    weekColumnList.forEach((rowNameIdx, keyIdx) => {
      if (weekIdx === 0) {
        result[keyIdx] = [];
      }

      const data =
        origin[keyNm] && rowNameIdx > -1 ? origin[keyNm][rowNameIdx] : '0';
      result[keyIdx].push(data);
    });
  });

  return result;
};

export default function PivotTable({ tableData }) {
  const {
    tableRowIndexPerWeek,
    tableRowsLabel: rowsStr,
    tableColumnsLabel: columnsStr,
  } = useSelector((state) => state.contents);

  const rowsLabel = splitCommaWithTrim(rowsStr);
  const columnsLabel = splitCommaWithTrim(columnsStr);
  const pivotData = pivot(tableRowIndexPerWeek, tableData);

  return columnsLabel ? (
    <table style={styles.table}>
      <thead>
        <tr>
          {columnsLabel.map((columnName, idx, arr) => {
            const thStyle =
              arr.length === idx + 1
                ? { ...styles.th, ...styles.emphasis }
                : styles.th;
            return (
              <th style={thStyle} key={idx}>
                {columnName}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {pivotData.map((row, rowIdx) => {
          return row ? (
            <tr key={rowIdx}>
              <td style={styles.th} key={`${rowsLabel}${rowIdx}`}>
                {rowsLabel[rowIdx] ? rowsLabel[rowIdx].trim() : ''}
              </td>
              {row.map((columnItem, colIdx, arr) => {
                const tdStyle = ((index) => {
                  if (arr.length === index + 1)
                    return { ...styles.td, ...styles.emphasis };
                  else {
                    return styles.td;
                  }
                })(colIdx);
                return (
                  <td style={tdStyle} key={`${columnItem}${colIdx}`}>
                    {columnItem ? columnItem.trim() : ''}
                  </td>
                );
              })}
            </tr>
          ) : (
            ''
          );
        })}
      </tbody>
    </table>
  ) : (
    ''
  );
}

PivotTable.propTypes = {
  tableData: PropTypes.object.isRequired,
};
