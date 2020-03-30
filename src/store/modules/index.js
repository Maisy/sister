import { combineReducers } from 'redux';
import contentsReducers from './contents';
import basicInfoReducers from './basicInfos';
import TestReducers from './testAction';

export default combineReducers({
  contents: contentsReducers,
  basicInfo: basicInfoReducers,
  test: TestReducers,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
