import Sample from '../../resource/sample';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { splitCommaWithTrim } from '../../utils/string';

const GET_RECEIVER = 'static/GET_RECEIVER';
const IMPORT_EMAIL_DATA = 'static/IMPORT_EMAIL_DATA';
const EXPORT_EMAIL_DATA = 'static/EXPORT_EMAIL_DATA';

export const StaticActions = {
  getReceiver: createAction(GET_RECEIVER),
  importEmailData: createAction(IMPORT_EMAIL_DATA),
  exportEmailData: createAction(EXPORT_EMAIL_DATA),
};

const initialState = {
  userEmails: Sample.email,
  equipColumns: Sample.equip_info_columns,
  equipInfos: Sample.equip_info_data,
  receiver: {},
  fileData: {},
};

//reducer: action, state를 받아서 새로운 상태를 리턴하는 애
export default handleActions(
  {
    [IMPORT_EMAIL_DATA]: (state, action) => {
      const data = action.payload;
      return produce(state, (draft) => {
        draft.userEmails = data.email;
        draft.equipInfos = data.equip_info_data;
        draft.equipColumns = data.equip_info_columns;
      });
    },
    [EXPORT_EMAIL_DATA]: (state) =>
      produce(state, (draft) => {
        draft.fileData = {
          email: draft.userEmails,
          equip_info_data: draft.equipInfos,
          equip_info_columns: draft.equipColumns,
        };
      }),

    [GET_RECEIVER]: (state, action) => {
      const {
        equipInfos = state.equipInfos,
        userEmails = state.userEmails,
      } = action.payload;

      const userMailMap = userEmails.split('\n').reduce((resultMap, data) => {
        const userInfo = splitCommaWithTrim(data);
        resultMap[userInfo[0]] = userInfo[1];
        return resultMap;
      }, {});

      const receiver = equipInfos.split('\n').reduce((resultMap, info) => {
        const [equipId, ...owners] = splitCommaWithTrim(info);
        resultMap[equipId] = owners.map((name) => userMailMap[name] || '');
        return resultMap;
      }, {});

      return {
        ...state,
        receiver,
      };
    },
  },
  initialState,
);
