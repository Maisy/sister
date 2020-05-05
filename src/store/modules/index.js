import { combineReducers } from 'redux';
import contentsReducers from './contents';
import basicInfoReducers from './basicInfos';
import TestReducers from './testAction';

export default combineReducers({
  contents: contentsReducers,
  basicInfo: basicInfoReducers,
  test: TestReducers,
});
