import React from "react";
import InputText from "./InputText";

export default function Template({ onChanged, defaultValue }) {
  return (
    <div>
      <InputText
        name="pre_text"
        defaultValue={defaultValue["pre_text"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        name="table_columns_label"
        label="Column Name"
        defautRows={1}
        defaultValue={defaultValue["table_columns_label"]}
        onChanged={onChanged}
      ></InputText>
      {/* <InputText
        name="table_columns_hide"
        label="Hide Column Name"
        defautRows={1}
        defaultValue={defaultValue["table_columns_hide"]}
        onChanged={onChanged}
      ></InputText> */}
      <InputText
        name="post_text"
        defaultValue={defaultValue["post_text"]}
        onChanged={onChanged}
      ></InputText>
    </div>
  );
}
