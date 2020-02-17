import { combineReducers } from "redux";
import contentsReducers from "./contents";
import staticReducers from "./static";

export default combineReducers({
  contents: contentsReducers,
  static: staticReducers
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
