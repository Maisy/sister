import React from "react";
import InputText from "./InputText";

export default function SourceInput({ defaultValue, onChanged }) {
  return (
    <div>
      <InputText
        name="variables"
        defautRows={1}
        defaultValue={defaultValue["source_variables"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        defautRows={6}
        defaultValue={defaultValue["source_data"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        defautRows={10}
        name="table_data"
        defaultValue={defaultValue["table_data"]}
        onChanged={onChanged}
      ></InputText>
    </div>
  );
}
