import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '@material-ui/core/CircularProgress';

import { fetchQuestions } from 'api/baseApi.js';
import CreateQuestion from './CreateQuestion';
import Error from './Error';
import QuestionTemplate from './QuestionTemplate';
import {theme} from 'theme/theme.js';

const StyledApp = styled.div`
  min-height: 0;
  display: inline-block;
  position: relative;
  margin: 50px 0;
  color: ${theme.palette.highlight.main};
  width: 100%;
`
StyledApp.displayName = 'StyledApp'

const StyledAppHeader = styled.div`
  text-align: center;
  background: ${theme.palette.primary.main};
  max-width: 80vw;
  width: 100%;
  margin: 0 auto;
  height: 75px;
  padding-top: 12px;
`
StyledAppHeader.displayName = 'StyledAppHeader'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  width: 81%;
  margin: 1rem auto;
	@media (max-width: 870px) {
	  grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 480px) {
	  grid-template-columns: 1fr;
	}
`
StyledContainer.displayName = 'StyledContainer'

const StyledLoaderContainer = styled.div`
  max-width: 60px;
  width: 100%;
  margin: 100px auto;
`
StyledLoaderContainer.displayName = 'StyledLoaderContainer'

const StyledLoader = styled(Loader)`
  color: ${theme.palette.secondary.main};
`
StyledLoader.displayName = 'StyledLoader'

const StyledError = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: 80px auto;
`
StyledError.displayName = 'StyledError'

const QuestionsList = (props) => {

  useEffect(() => {
    props.fetchQuestions();
  }, []); // eslint-disable-line

  const { questions, isLoading, questionsHaveError } = props;
  const questionsTemplate = Object.keys(questions).map((key, index) => {
    return <QuestionTemplate
      key={key}
      question={questions[key].question}
      publishedDate={questions[key].published_at}
      choices={questions[key].choices.length}
      url={questions[key].url}
		/>
  });

  return (
  	<StyledApp>
      <StyledAppHeader data-hook='app-header'>
      	<h1>Questions</h1>
      </StyledAppHeader>
      <CreateQuestion />
      {isLoading && !questionsHaveError &&
				<StyledLoaderContainer><StyledLoader /></StyledLoaderContainer>}
			{isLoading && questionsHaveError && <StyledError><Error /></StyledError>}
      <StyledContainer data-hook='questions-container'>
        {!isLoading && questionsTemplate}
      </StyledContainer>
    </StyledApp>
  );
}

function mapStateToProps({ questions, isLoading, questionsHaveError }) {
  return { questions, isLoading, questionsHaveError }
}

QuestionsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
	questionsHaveError: PropTypes.bool.isRequired,
  questions: PropTypes.object.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchQuestions })(QuestionsList);
