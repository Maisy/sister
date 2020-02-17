import { createStore } from 'redux';
import rootReducer from './modules';


// **** 리덕스 개발자도구 적용
const devTools =
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

// const store = createStore(rootReducer);
// console.log(store.getState());

export default store;