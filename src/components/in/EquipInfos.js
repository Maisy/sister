import React from "react";
import InputText from "./InputText";

export default function EquipInfos({ defaultValue, onChanged }) {
  return (
    <div>
      <InputText
        name="equip_info_columns"
        defautRows={1}
        defaultValue={defaultValue["equip_info_columns"]}
        onChanged={onChanged}
      ></InputText>
      <InputText
        name="equip_info_data"
        defautRows={20}
        defaultValue={defaultValue["equip_info_data"]}
        onChanged={onChanged}
      ></InputText>
    </div>
  );
}
