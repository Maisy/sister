import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  table: {
    width: "100%",
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
}));

export default function ViewTable({ columns = "", data = "" }) {
  const classes = useStyles();

  return columns && data ? (
    <table className={classes.table}>
      <thead>
        <tr>
          {columns.split(",").map((columnName, idx) => {
            return (
              <th className={classes.th} key={idx}>
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
                  <td className={classes.td} key={columnItem + "" + idx}>
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
