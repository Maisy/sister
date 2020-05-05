import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const ERROR_TRUE = 'test/ERROR_TRUE';
const ERROR_FALSE = 'test/ERROR_FALSE';

export const setErrorTrue = createAction(ERROR_TRUE);
export const setErrorFalse = createAction(ERROR_FALSE);

const initialState = {
  error: false,
};
export default handleActions(
  {
    [ERROR_TRUE]: (state) =>
      produce(state, (draft) => {
        draft.error = true;
      }),
    [ERROR_FALSE]: (state) =>
      produce(state, (draft) => {
        draft.error = false;
      }),
  },
  initialState,
);
