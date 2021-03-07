import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment'

import {theme} from 'theme/theme.js';

const StyledQuestionWrapper = styled.div`
  background: ${theme.palette.primary.main};
  border-radius: 5px;
  box-shadow: 4px 4px 4px -4px ${theme.palette.base.gray};
`
StyledQuestionWrapper.displayName = 'StyledQuestionWrapper'

const StyledQuestionHeader = styled.div`
	background: ${theme.palette.secondary.main};
  text-align: center;
  color: ${theme.palette.base.white};
  padding: 10px;
`
StyledQuestionHeader.displayName = 'StyledQuestionHeader'

const StyledQuestionBody = styled.div`
  display: flex;
  flex-wrap: row;
  padding: 10px 15px;
`
StyledQuestionBody.displayName = 'StyledQuestionBody'

const StyledQuestionFooter = styled.div`
  text-align: right;
  padding: 15px;
`
StyledQuestionFooter.displayName = 'StyledQuestionFooter'

const StyledQuestionButton = styled.button`
  font-size: 14px;
  border: none;
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.base.white};
  font-weight: bold;
  padding: 10px 20px;
  &:hover,
  &:focus {
    background-color: ${theme.palette.highlight.main};
  }
`
StyledQuestionButton.displayName = 'StyledQuestionButton'

const QuestionTemplate = ({ question, publishedDate, choices, url }) => {
  return (
    <StyledQuestionWrapper>
      <StyledQuestionHeader>
          <h5>{question}</h5>
      </StyledQuestionHeader>
      <StyledQuestionBody>
        <div>
          <h5>Published on: <span>{moment(publishedDate).format('MMMM Do YYYY, HH:mm')}</span></h5>
					<h5>Available choices: <span>{choices}</span></h5>
        </div>
      </StyledQuestionBody>
      <StyledQuestionFooter>
        <Link to={`${url}`}><StyledQuestionButton data-hook='vote-button'>Vote</StyledQuestionButton></Link>
      </StyledQuestionFooter>
    </StyledQuestionWrapper>

  );
}

export default QuestionTemplate;
