import axios from 'axios';
import {
  fetchQuestionsSuccess,
  fetchQuestionsError,
  fetchQuestionSuccess,
  isLoading,
  voteSelected,
  questionCreated
} from 'redux/actions';

import {BASE_URL} from 'constants.js';

export const fetchQuestions = () => {
	let url = `${BASE_URL}/questions`;
	let request = axios.get(url);
	return dispatch => {
    dispatch(isLoading(true));
    request.then(resp => {
      dispatch(fetchQuestionsSuccess(resp.data));
      dispatch(isLoading(false));
      dispatch(fetchQuestionsError(false));
    }).catch(() => {
      dispatch(fetchQuestionsError(true));
    });
	}
}

export const fetchSingleQuestion = (id) => {
  let url = `${BASE_URL}/questions/${id}`;
  let request = axios.get(url);

  return dispatch => {
    dispatch(isLoading(true));
    request.then(resp => {
        dispatch(fetchQuestionSuccess(resp.data));
        dispatch(isLoading(false));
        dispatch(fetchQuestionsError(false));
    }).catch(() => {
        dispatch(fetchQuestionsError(true));
    });
  }
}

export const postVote = (choice) => {
  return dispatch => dispatch(voteSelected(choice))
}

export const createQuestion = (payload) => {
  return dispatch => dispatch(questionCreated(payload))
}
