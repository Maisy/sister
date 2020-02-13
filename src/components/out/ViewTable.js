import React from "react";

const styles = {
  table: {
    margin: "20px 0",
    width: "350px",
    fontSize: "10pt",
    border: "1px solid black",
    borderCollapse: "collapse"
  },
  th: {
    backgroundColor: "#e6e6e6",
    border: "1px solid #444444",
    padding: "5px 10px",
    textAlign: "center",
    fontWeight: "bold"
  },
  td: {
    border: "1px solid #444444",
    padding: "5px 10px",
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

export default function ViewTable({ columns = "", data = "" }) {
  return columns && data ? (
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.split(",").map((columnName, idx, arr) => {
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
        {data.split("\n").map((row, idx) => {
          return row ? (
            <tr key={row + "" + idx}>
              {row.split(",").map((columnItem, idx, arr) => {
                const tdStyle = (index => {
                  if (index === 0) {
                    return { ...styles.th, ...styles.first };
                  } else if (arr.length === index + 1)
                    return { ...styles.td, ...styles.emphasis };
                  else {
                    return styles.td;
                  }
                })(idx);
                return (
                  <td style={tdStyle} key={columnItem + "" + idx}>
                    {columnItem ? columnItem.trim() : ""}
                  </td>
                );
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
