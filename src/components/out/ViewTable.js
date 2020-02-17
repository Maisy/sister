import React from "react";

const styles = {
  table: {
    margin: "20px 0",
    width: "350px",
    height: 200,
    fontSize: "10pt",
    border: "1px solid black",
    borderCollapse: "collapse"
  },
  th: {
    backgroundColor: "#e6e6e6",
    border: "1px solid #444444",
    padding: "5px 10px",
    // padding: 0,
    textAlign: "center",
    fontWeight: "bold"
  },
  td: {
    border: "1px solid #444444",
    padding: "5px 10px",
    // padding: 0,
    textAlign: "center"
  },
  first: {
    textAlign: "left"
  },
  emphasis: {
    color: "red",
    fontWeight: "bold"
  }
};

export default function ViewTable({
  columnsLabel = [],
  rowsLabel = [],
  data = ""
}) {
  const hasStaticRowsLabel = rowsLabel.length > 0;
  return columnsLabel && data ? (
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
        {data.split("\n").map((row, rowIdx) => {
          return row ? (
            <tr key={row + "" + rowIdx}>
              {hasStaticRowsLabel && (
                <td style={styles.th} key={rowsLabel + "" + rowIdx}>
                  {rowsLabel[rowIdx] ? rowsLabel[rowIdx].trim() : ""}
                </td>
              )}
              {row.split(",").map((columnItem, colIdx, arr) => {
                const tdStyle = (index => {
                  if (arr.length === index + 1)
                    return { ...styles.td, ...styles.emphasis };
                  else {
                    return styles.td;
                  }
                })(colIdx);
                return (
                  <td style={tdStyle} key={columnItem + "" + colIdx}>
                    {columnItem ? columnItem.trim() : ""}
                  </td>
                );
                // }
              })}
            </tr>
          ) : (
            ""
          );
        })}
      </tbody>
    </table>
  ) : (
    ""
  );
}
