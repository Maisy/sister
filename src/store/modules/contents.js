import Sample from "../../resource/sample";

// 액션 타입 정의
const SET_PRE_TEXT = "template/SET_PRE_TEXT";
const SET_POST_TEXT = "template/SET_POST_TEXT";
const SET_VARIABLES = "template/SET_VARIABLES";
const SET_TEXT_DATA = "data/SET_TEXT_DATA";
const SET_TABLE_DATA = "data/SET_TABLE_DATA";
const SET_TABLE_COLUMNS = "data/SET_TABLE_COLUMNS";
const SET_TABLE_ROWS = "data/SET_TABLE_ROWS";
const PARSE_DATA = "PARSE_DATA";

// **** 액션 생섬함수 정의
export const setPreText = text => ({ type: SET_PRE_TEXT, text });
export const setPostText = text => ({ type: SET_POST_TEXT, text });

export const setTextData = text => ({
  type: SET_TEXT_DATA,
  text
});

export const setTableData = data => ({
  type: SET_TABLE_DATA,
  data
});

export const setVariables = variables => ({
  type: SET_VARIABLES,
  variables
});

export const setTableColumnsLabel = text => ({ type: SET_TABLE_COLUMNS, text });
export const setTableRowsLabel = text => ({ type: SET_TABLE_ROWS, text });

export const parseData = () => ({ type: PARSE_DATA });

const initialState = {
  //schema
  preTextSchema: Sample.pre_text,
  postTextSchema: Sample.post_text,
  table: {
    columnsLabel: Sample.table_columns_label.split(","),
    rowsLabel: Sample.table_rows_label.split(",")
  },

  //data
  variables: Sample.source_variables,
  textData: Sample.source_data,
  tableData: Sample.table_data,

  //result
  result: []
};

const parseText = (template, variables, row) => {
  const data = row.split(",");
  let rst = template;
  variables.forEach((variable, idx) => {
    var regex = new RegExp(`__${variable.trim()}__`, "g");
    rst = rst.replace(regex, data[idx].trim());
  });
  return rst;
};

export default function schema(state = initialState, action) {
  switch (action.type) {
    //schema
    case SET_PRE_TEXT:
      return {
        ...state,
        preTextSchema: action.text
      };
    case SET_POST_TEXT:
      return {
        ...state,
        postTextSchema: action.text
      };
    case SET_VARIABLES:
      return {
        ...state,
        variables: action.variables
      };

    //data
    case SET_TEXT_DATA:
      return {
        ...state,
        textData: action.text
      };
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.data
      };
    case SET_TABLE_COLUMNS:
      return {
        ...state,
        table: {
          ...state.table,
          columnsLabel: action.text.split(",")
        }
      };
    case SET_TABLE_ROWS:
      return {
        ...state,
        table: {
          ...state.table,
          rowsLabel: action.text ? action.text.split(",") : []
        }
      };

    case PARSE_DATA: {
      const {
        preTextSchema,
        postTextSchema,
        variables,
        textData,
        tableData,
        table
      } = state;
      const variablieList = variables.split(",");
      const textDataList = textData.split("\n");
      const tableDataList = tableData.split("\n\n");
      const getEmailId = dataRow => {
        return dataRow.split(",")[0];
      };

      return {
        ...state,
        result: textDataList.map((data, idx) => ({
          emailId: getEmailId(data),
          tableColumnsLabel: table.columnsLabel,
          tableRowsLabel: table.rowsLabel,
          preText: parseText(preTextSchema, variablieList, data),
          postText: parseText(postTextSchema, variablieList, data),
          tableData: tableDataList[idx]
        }))
      };
    }
    default:
      return state;
  }
}
