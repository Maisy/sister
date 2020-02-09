import React from "react";
import ViewTable from "./ViewTable";
import ViewText from "./ViewText";

export default function ViewSet({ inputData }) {
  const { pre_text, table_columns, table_data, post_text } = inputData;

  return (
    <>
      <ViewText data={pre_text ? pre_text : "Click >> Button"}></ViewText>
      <ViewTable columns={table_columns} data={table_data}></ViewTable>
      <ViewText data={post_text}></ViewText>
    </>
  );
}
