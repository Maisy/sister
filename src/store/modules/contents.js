import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import Sample from '../../resource/sample';

// 액션 타입 정의
const SET_PRE_TEXT = 'template/SET_PRE_TEXT';
const SET_POST_TEXT = 'template/SET_POST_TEXT';
const SET_VARIABLES = 'template/SET_VARIABLES';

const SET_TEXT_DATA = 'data/SET_TEXT_DATA';
const SET_TABLE_DATA = 'data/SET_TABLE_DATA';
const SET_TABLE_COLUMNS = 'data/SET_TABLE_COLUMNS';
const SET_TABLE_ROWS = 'data/SET_TABLE_ROWS';
const IMPORT_CONTENTS_DATA = 'data/IMPORT_CONTENTS_DATA';
const EXPORT_CONTENTS_DATA = 'data/EXPORT_CONTENTS_DATA';

const PARSE_DATA = 'PARSE_DATA';

// **** 액션 생섬함수 정의
export const ContentsActions = {
  setPreText: createAction(SET_PRE_TEXT, text => text),

  setPostText: createAction(SET_POST_TEXT, text => text),

  setTextData: createAction(SET_TEXT_DATA, text => text),
  setTableData: createAction(SET_TABLE_DATA, data => data),
  setVariables: createAction(SET_VARIABLES, variables => variables),

  setTableColumnsLabel: createAction(SET_TABLE_COLUMNS, text => text),
  setTableRowsLabel: createAction(SET_TABLE_ROWS, text => text),
  importContentsData: createAction(IMPORT_CONTENTS_DATA, data => data),
  exportContentsData: createAction(EXPORT_CONTENTS_DATA, data => data),

  parseData: createAction(PARSE_DATA),
};

const initialState = {
  //schema
  preTextSchema: Sample.pre_text,
  postTextSchema: Sample.post_text,
  table: {
    columnsLabel: Sample.table_columns_label.split(','),
    rowsLabel: Sample.table_rows_label
      ? Sample.table_rows_label.split(',')
      : [],
  },

  //data
  variables: Sample.source_variables,
  textData: Sample.source_data,
  // tableData: Sample.table_data,
  tableData: [
    Sample.table_data_week1,
    Sample.table_data_week2,
    Sample.table_data_week3,
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

    //data
    [SET_TEXT_DATA]: (state, action) =>
      produce(state, draft => {
        draft.textData = action.payload;
      }),
    [SET_TABLE_DATA]: (state, action) => {
      const { idx, data } = action.payload;
      return produce(state, draft => {
        draft.tableData[idx] = data;
      });
    },
    [SET_TABLE_COLUMNS]: (state, action) =>
      produce(state, draft => {
        draft.table.columnsLabel = action.payload.split(',');
      }),
    [SET_TABLE_ROWS]: (state, action) =>
      produce(state, draft => {
        draft.table.rowsLabel = action.payload ? action.payload.split(',') : [];
      }),

    [IMPORT_CONTENTS_DATA]: (state, action) => {
      const data = action.payload;
      return produce(state, draft => {
        draft.preTextSchema = data.pre_text;
        draft.postTextSchema = data.post_text;
        draft.table = {
          columnsLabel: data.table_columns_label.split(','),
          rowsLabel: data.table_rows_label
            ? data.table_rows_label.split(',')
            : [],
        };
        draft.variables = data.source_variables;
        draft.textData = data.source_data;
        draft.tableData = [
          data.table_data_week1,
          data.table_data_week2,
          data.table_data_week3,
        ];
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
          table_data_week1: draft.tableData[0],
          table_data_week2: draft.tableData[1],
          table_data_week3: draft.tableData[2],
        };
      }),

    [PARSE_DATA]: (state, action) => {
      const {
        preTextSchema,
        postTextSchema,
        variables = '',
        textData = '',
        tableData = [],
        table,
      } = state;
      const variablieList = variables.split(',');
      const textDataList = textData.split('\n');
      const tableDataPerKey = [];

      tableData.forEach((week, weekIdx) => {
        const weekKey = 'week' + (weekIdx + 1);
        const rows = week.split('\n');

        const rowKeyList = rows[0].split(',');
        rows.forEach((row, rowIdx) => {
          row.split(',').forEach((col, colIdx) => {
            const rowKey = rowKeyList[colIdx].trim();
            if (rowIdx === 0) {
              if (!tableDataPerKey[rowKey]) {
                tableDataPerKey[rowKey] = {};
              }
              tableDataPerKey[rowKey][weekKey] = [];
            } else {
              tableDataPerKey[rowKey][weekKey].push(col);
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
            emailId: getEmailId(data),
            tableColumnsLabel: table.columnsLabel,
            tableRowsLabel: table.rowsLabel,
            preText: parseText(preTextSchema, variablieList, data),
            postText: parseText(postTextSchema, variablieList, data),
            tableData: tableDataPerKey[mailKey],
          };
        });
      });
    },
  },
  initialState
);
