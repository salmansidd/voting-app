import { combineReducers } from 'redux';

import { questions, questionsHaveError, isLoading } from './questions';
import { selectedQuestion } from './selectedQuestion';

const rootReducer = combineReducers({
  questions,
  questionsHaveError,
  selectedQuestion,
  isLoading
})

export default rootReducer;
