import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components'

import QuestionForm from './QuestionForm';
import {theme} from 'theme/theme.js';

const StyledButton = styled(Button)`
  display: block;
  text-align: center;
  background: ${theme.palette.secondary.main};
  max-width: 80vw;
  width: 100%;
  margin: 20px auto;
  height: 50px;
  font-size: 24px;
  border: none;
  &:hover,
  &:focus {
		background: ${theme.palette.highlight.main};
	}
`

StyledButton.displayName = 'StyledButton'

const StyledCard = styled(Card)`
  width: 81%;
  margin: 0px auto;
`
StyledCard.displayName = 'StyledCard'

const StyledCardBody = styled(CardBody)`
  background: ${theme.palette.primary.main};
`
StyledCardBody.displayName = 'StyledCardBody'

const CreateQuestion = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  }

  return (
    <>
      <StyledButton color="primary" onClick={toggle} data-hook='create-question'>Create Question</StyledButton>
      <Collapse isOpen={collapse}>
        <StyledCard>
          <StyledCardBody>
            <QuestionForm />
          </StyledCardBody>
        </StyledCard>
      </Collapse>
    </>
  );
}

export default CreateQuestion;
