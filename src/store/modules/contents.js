import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import Sample from '../../resource/sample';

const SET_TEMPLATE = 'template/SET_TEMPLATE';
const SET_TABLE_DATA_SETS = 'source/SET_TABLE_DATA_SETS';

const IMPORT_CONTENTS_DATA = 'data/IMPORT_CONTENTS_DATA';
const EXPORT_CONTENTS_DATA = 'data/EXPORT_CONTENTS_DATA';

const PARSE_DATA = 'PARSE_DATA';

// **** 액션 생섬함수 정의
export const ContentsActions = {
  setTemplate: createAction(SET_TEMPLATE, (data) => data),
  setTableDataSet: createAction(SET_TABLE_DATA_SETS, (list) => list),

  importContentsData: createAction(IMPORT_CONTENTS_DATA, (data) => data),
  exportContentsData: createAction(EXPORT_CONTENTS_DATA, (data) => data),

  parseData: createAction(PARSE_DATA),
};

const initialState = {
  //schema
  preTextSchema: Sample.pre_text,
  postTextSchema: Sample.post_text,
  tableColumnsLabel: Sample.table_columns_label,
  tableRowsLabel: Sample.table_rows_label,

  //data
  variables: Sample.source_variables,
  textData: Sample.source_data,

  tableSetList: [
    {
      id: 0,
      defaultData: Sample.table_data_week1,
      defaultRows: Sample.table_data_rows1,
    },
    {
      id: 1,
      defaultData: Sample.table_data_week2,
      defaultRows: Sample.table_data_rows2,
    },
    {
      id: 2,
      defaultData: Sample.table_data_week3,
      defaultRows: Sample.table_data_rows3,
    },
  ],

  //result
  result: [],

  fileData: {},
};

const splitWithTrim = (d) => {
  if (typeof d !== 'string') {
    console.warn(d);
    return [];
  }
  if (d) {
    return d.split(',').map((str) => str.trim());
  }
  return [];
};

const parseText = (template, variables, row) => {
  const data = row.split(',');
  if (!template || data.length === 0) {
    return 'error';
  }
  let rst = template;
  // console.log(template);
  variables.forEach((variable, idx) => {
    var regex = new RegExp(`__${variable.trim() || ''}__`, 'g');
    if (rst) {
      rst = rst.replace(regex, data[idx].trim());
    }
  });
  return rst;
};

const findRowIndexPerWeek = (templateRowsLabel, dataRowsLabel) => {
  if (!Array.isArray(dataRowsLabel)) {
    console.warn(dataRowsLabel);
    return templateRowsLabel;
  }
  return dataRowsLabel.map((weekColumnList) =>
    templateRowsLabel.map((row) => splitWithTrim(weekColumnList).indexOf(row)),
  );
};

/**
 {
  "MBA310": {
    "week1": [
      "4",
      "1",
      "3",
      "5",
      "0"
    ],
    "week2": [
      "5",
      "1",
      "2",
      "3"
    ],
    "week3": [
      "8",
      "1",
      "0",
      "1",
      "0"
    ]
  },
  "MBAB20": {
    "week1": [
      "5",
      "6",
      "0",
      "1",
      "0"
    ]
  },
}
 */
const getTableDataPerMachine = (tableSetList) => {
  let lastWeekKey;

  const tableDataPerKey = tableSetList
    .map((tableSet) => tableSet.defaultData)
    .filter((data) => data && typeof data === 'string')
    .reduce((dataPerKey, nextData, weekIdx, weekTotal) => {
      const rows = nextData.split('\n');
      // first line is machine_ID list.
      // MBA310, MBA311, ..
      let machineList; // = splitWithTrim(rows[0]);
      const weekKey = `week${weekIdx + 1}`;
      lastWeekKey = `week${weekTotal.length}`;

      const machineData = rows.reduce((result, row, rowIdx) => {
        if (rowIdx === 0) {
          machineList = splitWithTrim(row);
          machineList.forEach((machineId) => {
            result[machineId] = {
              [weekKey]: [],
            };
          });
        } else {
          splitWithTrim(row).forEach((col, colIdx) => {
            const machineId = machineList[colIdx];
            result[machineId][weekKey].push(col);
          });
        }
        return result;
      }, {});

      machineList.forEach((machineID) => {
        dataPerKey[machineID] = {
          ...dataPerKey[machineID],
          ...machineData[machineID],
        };
      });

      return dataPerKey;
    }, {});

  //마지막 week에 machine id가 없을 경우 false (disable)
  const shouldSendMailMap = Object.keys(tableDataPerKey).reduce(
    (result, machineId) => {
      result[machineId] = Boolean(tableDataPerKey[machineId][lastWeekKey]);
      return result;
    },
    {},
  );

  return { shouldSendMailMap, tableDataPerKey };
};

export default handleActions(
  {
    [IMPORT_CONTENTS_DATA]: (state, action) => {
      const data = action.payload;
      // console.log(data);
      return produce(state, (draft) => {
        const {
          pre_text,
          post_text,
          table_columns_label,
          table_rows_label,
          source_variables,
          source_data,
        } = data;

        Object.assign(draft, {
          preTextSchema: pre_text,
          postTextSchema: post_text,
          tableColumnsLabel: table_columns_label,
          tableRowsLabel: table_rows_label,
          variables: source_variables,
          textData: source_data,
          tableSetList: ((inputData) => {
            if (inputData.table_data_rows1) {
              return [
                {
                  id: 0,
                  defaultData: inputData.table_data_week1,
                  defaultRows: inputData.table_data_rows1.join(','),
                },
                {
                  id: 1,
                  defaultData: inputData.table_data_week2,
                  defaultRows: inputData.table_data_rows2.join(','),
                },
                {
                  id: 2,
                  defaultData: inputData.table_data_week3,
                  defaultRows: inputData.table_data_rows3.join(','),
                },
              ];
            } else if (inputData.table_data_set) {
              return inputData.table_data_set;
            } else {
              return [];
            }
          })(data),
        });
      });
    },
    [EXPORT_CONTENTS_DATA]: (state, action) =>
      produce(state, (draft) => {
        draft.fileData = {
          pre_text: draft.preTextSchema,
          post_text: draft.postTextSchema,
          table_columns_label: draft.tableColumnsLabel,
          table_rows_label: draft.tableRowsLabel,
          source_variables: draft.variables,
          source_data: draft.textData,
          table_data_set: draft.tableSetList,
        };
      }),

    [PARSE_DATA]: (state, action) => {
      const inputData = action.payload;
      const {
        //template
        preTextSchema,
        // table,
        tableColumnsLabel,
        tableRowsLabel,

        postTextSchema,
        //source
        variables = '',
        textData = '',
        tableSetList = [],
      } = { ...state, ...inputData };

      const tableDataRows = tableSetList.map((data) => data.defaultRows);
      const tableRowIndexPerWeek = findRowIndexPerWeek(
        splitWithTrim(tableRowsLabel),
        tableDataRows,
      );

      const { shouldSendMailMap, tableDataPerKey } = getTableDataPerMachine(
        tableSetList,
      );

      const variableList = variables.split(',');
      const textDataList = textData.split('\n');

      // console.log(tableDataPerKey);

      const getEmailId = (dataRow = '') => {
        return dataRow.split(',')[0];
      };

      return produce(state, (draft) => {
        // use in pivot
        draft.tableRowsLabel = tableRowsLabel;
        draft.tableColumnsLabel = tableColumnsLabel;
        draft.tableRowIndexPerWeek = tableRowIndexPerWeek;

        draft.result = textDataList.map((data, idx) => {
          const mailKey = textDataList[idx].split(',')[0];
          return {
            shouldSend: Boolean(shouldSendMailMap[mailKey]),
            emailId: getEmailId(data), //machine ID
            preText: parseText(preTextSchema, variableList, data),
            postText: parseText(postTextSchema, variableList, data),
            tableData: tableDataPerKey[mailKey],
          };
        });
      });
    },
  },
  initialState,
);
