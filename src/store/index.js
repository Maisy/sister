import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';

// **** 리덕스 개발자도구 적용
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();

// const store = createStore(modules, applyMiddleware(logger))

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(rootReducer, devTools, applyMiddleware(logger))
const store = createStore(
  rootReducer,
  // localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {},
  composeWithDevTools(applyMiddleware(logger)),
);

// const store = createStore(rootReducer);
/**
console.log(store.getState()); // initial state 값 출력
console.log(store.dispatch); // store에 dispatch({type: GET_LIST}) 와 같이 액션 실행시킬수있다
console.log
  // 액션이 일어날때 마다 상태를 출력
  //subscribe(()=>{console.log(store.getState())})
  // 액션이 일어날때마다 localStorage에 저장
  // store.subscribe(() => {
  //   localStorage['redux-store'] = JSON.stringify(store.getState());
  // })
  ();
*/
export default store;
