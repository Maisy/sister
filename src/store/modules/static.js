import Sample from "../../resource/sample";

const SET_USER_EMAILS = "static/SET_USER_EMAILS";
const SET_EQUIP_INFOS = "static/SET_EQUIP_INFOS";
const SET_EQUIP_COLS = "static/SET_EQUIP_COLS";
const GET_RECEIVER = "static/GET_RECEIVER";

export const setUserEmails = text => ({
  type: SET_USER_EMAILS,
  text
});

export const setEquipmentInfos = data => ({
  type: SET_EQUIP_INFOS,
  data
});

export const setEquipmentColumns = data => ({
  type: SET_EQUIP_COLS,
  data
});

export const getReceiver = () => ({ type: GET_RECEIVER });

// const getReceverList = (equipInfos, userEmails) => {
// };

// parseUserMails(

const initialState = {
  userEmails: Sample.email,
  equipColumns: Sample.equip_info_columns,
  equipInfos: Sample.equip_info_data,
  receiver: {}
};

//reducer: action, state를 받아서 새로운 상태를 리턴하는 애
export default function data(state = initialState, action) {
  switch (action.type) {
    case SET_USER_EMAILS:
      return {
        ...state,
        userEmails: action.text
      };
    case SET_EQUIP_INFOS:
      return {
        ...state,
        equipInfos: action.data
      };
    case SET_EQUIP_COLS:
      return {
        ...state,
        equipColumns: action.data
      };

    case GET_RECEIVER: {
      const { equipInfos, userEmails } = state;
      const userMailMap = {};
      userEmails.split("\n").forEach(data => {
        const userInfo = data.split(",");
        userMailMap[userInfo[0].trim()] = userInfo[1].trim();
      });
      const getUserMails = (id, ...nameList) => {
        return nameList.map(name => userMailMap[name.trim()] || "");
      };
      const equipReceiverMap = {};
      equipInfos.split("\n").forEach(info => {
        const infoObj = info.split(",");
        equipReceiverMap[infoObj[0].trim()] = getUserMails(...infoObj);
      });

      return {
        ...state,
        receiver: equipReceiverMap
      };
    }
    default:
      return state;
  }
}
