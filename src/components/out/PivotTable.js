import React from 'react';
import { useSelector } from 'react-redux';

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

const findRowIdx = (templateRowsLabel, dataRowsLabel) => {
  return dataRowsLabel.map(oneWeekColumn =>
    templateRowsLabel.map(row => oneWeekColumn.indexOf(row))
  );
};
const pivot = (rowsLabel, origin) => {
  const result = [];
  if (rowsLabel.length === 0) {
    Object.keys(origin).forEach(dataKey => {
      result.push(origin[dataKey]);
    });
    return result;
  }

  rowsLabel.forEach((oneWeekColumn, weekIdx) => {
    const keyNm = (i => {
      if (i === 0) {
        return 'week1';
      } else if (i === 1) {
        return 'week2';
      } else {
        return 'week3';
      }
    })(weekIdx);
    oneWeekColumn.forEach((rowNameIdx, keyIdx) => {
      if (weekIdx === 0) {
        result[keyIdx] = [];
      }

      const data = origin[keyNm] ? origin[keyNm][rowNameIdx] : '0';
      result[keyIdx].push(data || '0');
    });
  });

  return result;
};

export default function PivotTable({ tableData = {} }) {
  const { table, tableDataRows } = useSelector(state => state.contents);
  const { columnsLabel, rowsLabel = [] } = table;

  const hasStaticRowsLabel = rowsLabel.length > 0;
  const rowsMap = findRowIdx(rowsLabel, tableDataRows);
  const pivotData = pivot(rowsMap, tableData);
  return columnsLabel && tableData ? (
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
