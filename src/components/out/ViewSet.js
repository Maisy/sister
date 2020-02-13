import React from "react";
import ViewTable from "./ViewTable";
import ViewText from "./ViewText";

export default function ViewSet({ id, inputData }) {
  const { pre_text, table_columns_label, table_data, post_text } = inputData;
  return (
    <div id={id}>
      <ViewText data={pre_text ? pre_text : "Click >> Button"}></ViewText>
      <ViewTable columns={table_columns_label} data={table_data}></ViewTable>
      <ViewText data={post_text}></ViewText>
    </div>
  );
}
