import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import Sample from '../../resource/sample';

// 액션 타입 정의
const SET_PRE_TEXT = 'template/SET_PRE_TEXT';
const SET_POST_TEXT = 'template/SET_POST_TEXT';
const SET_VARIABLES = 'template/SET_VARIABLES';
const SET_TABLE_COLUMNS = 'template/SET_TABLE_COLUMNS';
const SET_TABLE_ROWS = 'template/SET_TABLE_ROWS';

const SET_TEXT_DATA = 'data/SET_TEXT_DATA';
// const SET_TABLE_DATA = 'data/SET_TABLE_DATA';
// const SET_TABLE_DATA_ROWS = 'data/SET_TABLE_DATA_ROWS';
const SET_TABLE_DATA_SETS = 'data/SET_TABLE_DATA_SETS';

const IMPORT_CONTENTS_DATA = 'data/IMPORT_CONTENTS_DATA';
const EXPORT_CONTENTS_DATA = 'data/EXPORT_CONTENTS_DATA';

const PARSE_DATA = 'PARSE_DATA';

// **** 액션 생섬함수 정의
export const ContentsActions = {
  setPreText: createAction(SET_PRE_TEXT, text => text),
  setPostText: createAction(SET_POST_TEXT, text => text),

  setTableColumnsLabel: createAction(SET_TABLE_COLUMNS, text => text),
  setTableRowsLabel: createAction(SET_TABLE_ROWS, text => text),

  setVariables: createAction(SET_VARIABLES, variables => variables),
  setTextData: createAction(SET_TEXT_DATA, text => text),

  // setTableData: createAction(SET_TABLE_DATA, data => data),
  // setTableDataRows: createAction(SET_TABLE_DATA_ROWS, data => data),
  setTableDataSet: createAction(SET_TABLE_DATA_SETS, list => list),

  importContentsData: createAction(IMPORT_CONTENTS_DATA, data => data),
  exportContentsData: createAction(EXPORT_CONTENTS_DATA, data => data),

  parseData: createAction(PARSE_DATA),
};

const splitWithTrim = d => {
  if (d) {
    return d.split(',').map(str => str.trim());
  }
  return [];
};

const initialState = {
  //schema
  preTextSchema: Sample.pre_text,
  postTextSchema: Sample.post_text,
  table: {
    columnsLabel: splitWithTrim(Sample.table_columns_label),
    rowsLabel: splitWithTrim(Sample.table_rows_label),
  },

  //data
  variables: Sample.source_variables,
  textData: Sample.source_data,
  // tableDataRows: [
  //   splitWithTrim(Sample.table_data_rows1),
  //   splitWithTrim(Sample.table_data_rows2),
  //   splitWithTrim(Sample.table_data_rows3),
  // ],
  // tableData: [
  //   Sample.table_data_week1,
  //   Sample.table_data_week2,
  //   Sample.table_data_week3,
  // ],
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

export default handleActions(
  {
    //schema
    [SET_PRE_TEXT]: (state, action) =>
      produce(state, draft => {
        draft.preTextSchema = action.payload;
      }),
    [SET_POST_TEXT]: (state, action) =>
      produce(state, draft => {
        draft.postTextSchema = action.payload;
      }),
    [SET_VARIABLES]: (state, action) =>
      produce(state, draft => {
        draft.variables = action.payload;
      }),
    [SET_TABLE_COLUMNS]: (state, action) =>
      produce(state, draft => {
        draft.table.columnsLabel = splitWithTrim(action.payload);
      }),
    [SET_TABLE_ROWS]: (state, action) =>
      produce(state, draft => {
        draft.table.rowsLabel = splitWithTrim(action.payload);
      }),

    //data
    [SET_TEXT_DATA]: (state, action) =>
      produce(state, draft => {
        draft.textData = action.payload;
      }),
    // [SET_TABLE_DATA]: (state, action) => {
    //   const { idx, data } = action.payload;
    //   // const
    //   return produce(state, draft => {
    //     draft.tableSetList[idx] = {
    //       ...state.tableSetList[idx],
    //       defaultData: data,
    //     };
    //   });
    // },
    [SET_TABLE_DATA_SETS]: (state, action) => {
      const data = action.payload;
      // const defaultDataList = dataSet.map()
      return produce(state, draft => {
        // draft.tableData = defaultData;
        // draft.tableDataRows = defaultRows;
        draft.tableSetList = data;
      });
    },
    // [SET_TABLE_DATA_ROWS]: (state, action) => {
    //   const { idx, data } = action.payload;
    //   return produce(state, draft => {
    //     draft.tableDataRows[idx] = splitWithTrim(data);
    //   });
    // },

    [IMPORT_CONTENTS_DATA]: (state, action) => {
      const data = action.payload;
      return produce(state, draft => {
        draft.preTextSchema = data.pre_text;
        draft.postTextSchema = data.post_text;
        draft.table = {
          columnsLabel: data.table_columns_label.split(','),
          rowsLabel: splitWithTrim(data.table_rows_label),
        };
        draft.variables = data.source_variables;
        draft.textData = data.source_data;
        draft.tableSetList = (inputData => {
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
        })(data);
      });
    },
    [EXPORT_CONTENTS_DATA]: (state, action) =>
      produce(state, draft => {
        draft.fileData = {
          pre_text: draft.preTextSchema,
          post_text: draft.postTextSchema,
          table_columns_label: draft.table.columnsLabel.join(','),
          table_rows_label: draft.table.rowsLabel.join(','),
          source_variables: draft.variables,
          source_data: draft.textData,
          table_data_set: draft.tableSetList,
        };
      }),

    [PARSE_DATA]: (state, action) => {
      const {
        preTextSchema,
        postTextSchema,
        variables = '',
        textData = '',
        // tableData = [],
        tableSetList = [],
      } = state;
      const variableList = variables.split(',');
      const textDataList = textData.split('\n');
      const tableDataPerKey = [];

      const shouldSendMailMap = {};
      tableSetList.forEach(({ defaultData: week }, weekIdx, arr) => {
        const weekKey = 'week' + (weekIdx + 1);
        if (!week || typeof week !== 'string') {
          console.warn(week);
          return;
        }
        const rows = week.split('\n');

        const rowKeyList = rows[0].split(',');
        rows.forEach((row, rowIdx) => {
          row.split(',').forEach((col, colIdx) => {
            const rowKey = rowKeyList[colIdx].trim(); //장비명
            if (rowIdx === 0) {
              if (!tableDataPerKey[rowKey]) {
                tableDataPerKey[rowKey] = {};
                shouldSendMailMap[rowKey] = false;
              }
              tableDataPerKey[rowKey][weekKey] = [];
            } else {
              tableDataPerKey[rowKey][weekKey].push(col);
              if (
                weekIdx === arr.length - 1 &&
                col !== 0 &&
                !shouldSendMailMap[rowKey]
              ) {
                //마지막 값이 모두 0인경우 disable
                shouldSendMailMap[rowKey] = true;
              }
            }
          });
        });
      });

      // console.log(tableDataPerKey);

      const getEmailId = (dataRow = '') => {
        return dataRow.split(',')[0];
      };

      return produce(state, draft => {
        draft.result = textDataList.map((data, idx) => {
          const mailKey = textDataList[idx].split(',')[0];
          // console.log(tableDataPerKey[mailKey]);
          return {
            shouldSend: shouldSendMailMap[mailKey] || false,
            emailId: getEmailId(data),
            // tableColumnsLabel: table.columnsLabel,
            // tableRowsLabel: table.rowsLabel,
            preText: parseText(preTextSchema, variableList, data),
            postText: parseText(postTextSchema, variableList, data),
            tableData: tableDataPerKey[mailKey],
          };
        });
      });
    },
  },
  initialState
);
