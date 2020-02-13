import React from "react";
import InputText from "./InputText";

export default function UserEmails({ defaultValue, onChanged }) {
  return (
    <div>
      <InputText
        name="email"
        defautRows={20}
        defaultValue={defaultValue["email"]}
        onChanged={onChanged}
      ></InputText>
    </div>
  );
}
