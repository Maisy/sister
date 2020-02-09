import React from "react";

const styles = {
  table: {
    margin: "20px 0",
    width: "80%",
    fontSize: "10pt",
    borderBottom: "2px solid #444444",
    borderCollapse: "collapse"
  },
  th: {
    backgroundColor: "#e6e6e6",
    borderTop: "2px solid #444444",
    borderBottom: "2px solid #444444",
    padding: "5px 10px",
    textAlign: "center",
    fontWeight: "bold"
  },
  td: {
    borderBottom: "1px solid #444444",
    padding: "5px 10px",
    textAlign: "left"
  }
};

export default function ViewTable({ columns = "", data = "" }) {
  return columns && data ? (
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.split(",").map((columnName, idx) => {
            return (
              <th style={styles.th} key={idx}>
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
              {row.split(",").map((columnItem, idx) => {
                return (
                  <td style={styles.td} key={columnItem + "" + idx}>
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
