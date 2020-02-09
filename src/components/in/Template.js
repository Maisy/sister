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
        name="table_columns"
        defaultValue={defaultValue["table_columns"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        name="post_text"
        defaultValue={defaultValue["post_text"]}
        onChanged={onChanged}
      ></InputText>
    </div>
  );
}
