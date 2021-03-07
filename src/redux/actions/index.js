import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTION_SUCCESS,
  IS_LOADING,
  VOTE_SELECTED,
  QUESTION_CREATED
} from './types';

export const fetchQuestionsSuccess = (questions) => {
  return {
    type: FETCH_QUESTIONS_SUCCESS, questions
  };
};

export const fetchQuestionsError = (status) => {
  return {
    type: FETCH_QUESTIONS_ERROR, hasError: status
  };
};

export const fetchQuestionSuccess = (question) => {
  return {
    type: FETCH_QUESTION_SUCCESS, question
  };
};

export const isLoading = (status) => {
  return {
    type: IS_LOADING, isLoading: status
  };
};

export const voteSelected = (request) => {
  return {
    type: VOTE_SELECTED, payload: request
  };
};

export const questionCreated = (request) => {
  return {
    type: QUESTION_CREATED, payload: request
  };
};
