import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules'

// **** 리덕스 개발자도구 적용
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()

// const store = createStore(modules, applyMiddleware(logger))

// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(rootReducer, devTools, applyMiddleware(logger))
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
)

// const store = createStore(rootReducer);
// console.log(store.getState());

export default store
