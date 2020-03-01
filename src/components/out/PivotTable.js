import React from 'react';

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
  rowsLabel.forEach((rowName, keyIdx) => {
    result[keyIdx] = [];
    let keyNm = 'aa';
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        keyNm = 'week1';
      } else if (i === 1) {
        keyNm = 'week2';
      } else {
        keyNm = 'week3';
      }
      const data = origin[keyNm] ? origin[keyNm][keyIdx] : '0';
      result[keyIdx].push(data || '0');
    }
  });

  return result;
};

export default function PivotTable({
  columnsLabel = [],
  rowsLabel = [],
  dataObjList = {},
}) {
  const hasStaticRowsLabel = rowsLabel.length > 0;
  const pivotData = pivot(rowsLabel, dataObjList);
  return columnsLabel && dataObjList ? (
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
            <tr key={'' + rowIdx}>
              {hasStaticRowsLabel && (
                <td style={styles.th} key={rowsLabel + '' + rowIdx}>
                  {rowsLabel[rowIdx] ? rowsLabel[rowIdx].trim() : ''}
                </td>
              )}
              {row.map((columnItem, colIdx, arr) => {
                const tdStyle = (index => {
                  if (arr.length === index + 1)
                    return { ...styles.td, ...styles.emphasis };
                  else {
                    return styles.td;
                  }
                })(colIdx);
                return (
                  <td style={tdStyle} key={columnItem + '' + colIdx}>
                    {columnItem ? columnItem.trim() : ''}
                  </td>
                );
                // }
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
