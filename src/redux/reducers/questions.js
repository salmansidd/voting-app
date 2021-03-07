import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  IS_LOADING
} from 'redux/actions/types';
  
export const questions = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return Object.assign({}, state, action.questions);
    default:
      return state;
  }
}

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export const questionsHaveError = (state = false, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_ERROR:
      return action.hasError;
    default:
      return state;
  }
}
