import Sample from '../../resource/sample';
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const SET_USER_EMAILS = 'static/SET_USER_EMAILS';
const SET_EQUIP_INFOS = 'static/SET_EQUIP_INFOS';
const SET_EQUIP_COLS = 'static/SET_EQUIP_COLS';
const GET_RECEIVER = 'static/GET_RECEIVER';
const IMPORT_EMAIL_DATA = 'static/IMPORT_EMAIL_DATA';
const EXPORT_EMAIL_DATA = 'static/EXPORT_EMAIL_DATA';

export const StaticActions = {
  setUserEmails: createAction(SET_USER_EMAILS, text => text),
  setEquipmentInfos: createAction(SET_EQUIP_INFOS, data => data),
  setEquipmentColumns: createAction(SET_EQUIP_COLS, data => data),
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
    [SET_USER_EMAILS]: (state, action) =>
      produce(state, draft => {
        draft.userEmails = action.payload;
      }),
    [SET_EQUIP_INFOS]: (state, action) =>
      produce(state, draft => {
        draft.equipInfos = action.payload;
      }),
    [SET_EQUIP_COLS]: (state, action) =>
      produce(state, draft => {
        draft.equipColumns = action.payload;
      }),

    [IMPORT_EMAIL_DATA]: (state, action) => {
      const data = action.payload;
      return produce(state, draft => {
        draft.userEmails = data.email;
        draft.equipInfos = data.equip_info_data;
        draft.equipColumns = data.equip_info_columns;
      });
    },
    [EXPORT_EMAIL_DATA]: (state, action) =>
      produce(state, draft => {
        draft.fileData = {
          email: draft.userEmails,
          equip_info_data: draft.equipInfos,
          equip_info_columns: draft.equipColumns,
        };
      }),

    [GET_RECEIVER]: (state, action) => {
      const { equipInfos, userEmails } = state;
      const userMailMap = {};
      userEmails.split('\n').forEach(data => {
        const userInfo = data.split(',');
        userMailMap[userInfo[0].trim()] = userInfo[1].trim();
      });
      const getUserMails = (id, ...nameList) => {
        return nameList.map(name => userMailMap[name.trim()] || '');
      };
      const equipReceiverMap = {};
      equipInfos.split('\n').forEach(info => {
        const infoObj = info.split(',');
        equipReceiverMap[infoObj[0].trim()] = getUserMails(...infoObj);
      });

      return {
        ...state,
        receiver: equipReceiverMap,
      };
    },
  },
  initialState
);
