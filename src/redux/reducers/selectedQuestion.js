import { FETCH_QUESTION_SUCCESS } from 'redux/actions/types';

export const selectedQuestion = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      return Object.assign({}, state, action.question);
    default:
      return state;
  }
}