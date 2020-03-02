import { combineReducers } from 'redux';
import contentsReducers from './contents';
import staticReducers from './static';
import TestReducers from './testAction';

export default combineReducers({
  contents: contentsReducers,
  static: staticReducers,
  test: TestReducers,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
