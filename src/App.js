import React, { useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
import InputContents from "./components/in/ContentsWrapper";
import ViewContents from "./components/out/ContentsWrapper";
import RunButton from "./components/RunButton";
// import CopyButton from "./components/CopyButton"
import SampleInput from "./resource/sample";


// const findReceiver = (key, tableData, equipInfo, userInfo) => {
//   const equipKey = tableData.split("\n").map(row => {
//     return row.split(",")[0].trim();
//   });
//   // console.log(equipKey);
//   // equipInfo[key][]
//   return [];
// };

// const replaceVariables = input => {
//   const {
//     //email
//     email,
//     equip_info_columns,
//     equip_info_data,

//     //template
//     pre_text,
//     post_text,
//     table_columns_hide,
//     table_columns_label,

//     //data
//     source_variables,
//     source_data,
//     table_data
//   } = input;
//   // const userEmailMap = (() => {
//   //   let result = {};
//   //   email.split("\n").forEach(row => {
//   //     const userInfo = row.split(",");
//   //     result[userInfo[0].trim()] = userInfo[1].trim();
//   //   });
//   //   return result;
//   // })();

//   // // console.log(userEmailMap);
//   // const equipKey = equip_info_columns.split(",").map(k => k.trim());
//   // const equipUserMap = (() => {
//   //   let equipInfo = {};
//   //   equip_info_data.split("\n").forEach(d => {
//   //     const infos = d.split(",");
//   //     const name = infos[1];

//   //     equipKey.forEach((column, idx) => {
//   //       if (idx <= 1) {
//   //         equipInfo[name] = {};
//   //       } else {
//   //         equipInfo[name][column] = infos[idx];
//   //       }
//   //     });
//   //   });
//   //   return equipInfo;
//   // })();

//   // console.log(equipUserMap);

//   const variableList = source_variables.split(",");
//   const dataList = source_data.split("\n");
//   const tableDataList = table_data.split("\n\n");

//   return dataList.map((userData, idx) => {
//     const tableData = tableDataList[idx];
//     return {
//       // receiver_list: findReceiver(
//       //   table_columns_hide,
//       //   tableData,
//       //   equipUserMap,
//       //   userEmailMap
//       // ),
//       table_columns_label,
//       table_columns_hide,
//       pre_text: parseText(pre_text, variableList, userData),
//       post_text: parseText(post_text, variableList, userData),
//       table_data: tableData
//     };
//   });
// };

function App() {
  const [inputData, setInputData] = useState(SampleInput);

  const onInputChanged = useCallback(
    dataObject => {
      setInputData(inputData => {
        return { ...inputData, ...dataObject };
      });
    },
    // [setInputData]
    []
  );

  // useMemo
  // const onRun = useCallback(() => {
  //   const parsed = replaceVariables(inputData);

  //   setViewData(parsed);
  // }, [inputData, setViewData]);

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={5}>
          <InputContents
            defaultValue={inputData}
            onChanged={onInputChanged}
          ></InputContents>
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
          <RunButton></RunButton>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <ViewContents></ViewContents>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
