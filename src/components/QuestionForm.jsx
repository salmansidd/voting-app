import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import axios from "axios/index";
import PropTypes from 'prop-types';

import { createQuestion } from 'api/baseApi.js';
import {BASE_URL} from 'constants.js';
import FormModal from 'components/Modal';
import {theme} from 'theme/theme.js';
import { fetchQuestions } from 'api/baseApi.js';

const StyledButton = styled(Button)`
  background: ${theme.palette.secondary.main};
  font-weight: bold;
  border: none;
	&:hover {
		background: ${theme.palette.highlight.main};
	}
`
StyledButton.displayName = 'StyledButton'

const StyledLabel = styled(Label)`
  font-weight: bold;
  color: ${theme.palette.highlight.main};
`
StyledLabel.displayName = 'StyledLabel'

const QuestionForm = (props) => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modalBodyText, setModalBodyText] = useState('');
  const [modalHeaderText, setModalHeaderText] = useState('');

	const handleQuestion = (event) => {
	  setQuestion(event.target.value);
	};

  const handleChoices = (event) => {
    setChoices(event.target.value);
  }

  const handleFormSubmit = (event) => {
		const choicesArray = choices.split(',');
		const payloadObject = '{"question": "'+ question +'", "choices": '+ JSON.stringify(choicesArray) + '}';

    axios.post(`${BASE_URL}/questions?page=1`, payloadObject, {
				headers: {'Content-Type': 'application/json'}
			}).then(() => {
        setModalShow(true);
				setModalHeaderText('Success')
				setModalBodyText('The new question has been created successfully.');
	    })
	    .catch(() => {
        setModalShow(true);
				setModalHeaderText('Error')
				setModalBodyText('The new question could not be created. Please try again.');
	    });
    props.createQuestion(payloadObject);
	  event.preventDefault();
  }

	const handleModalHide = () => {
    setModalShow(false)
		props.fetchQuestions();
  }

  return (
    <>
     	<Form onSubmit={handleFormSubmit} data-hook='question-form'>
        <FormGroup row>
	        <StyledLabel sm={2}>New Question</StyledLabel>
	        <Col sm={10}>
	          <Input type="text" data-hook='question-name' placeholder="Type your question here" value={question} onChange={handleQuestion} />
	        </Col>
        </FormGroup>
        <FormGroup row>
	        <StyledLabel sm={2}>Choices</StyledLabel>
	        <Col sm={10}>
	          <Input type="textarea" data-hook='choices-list' placeholder="Type your choices separated by a comma and a space. Example: Cat, Dog, Rat" value={choices} onChange={handleChoices}/>
	        </Col>
        </FormGroup>
        <FormGroup check row>
	        <Col sm={{ size: 10, offset: 5 }}>
	          <StyledButton>Submit Question</StyledButton>
	        </Col>
        </FormGroup>
	    </Form>
      <FormModal
        show={modalShow}
        onHide={() => handleModalHide()}
				header={modalHeaderText}
				body={modalBodyText}
      />
    </>
  );
}

QuestionForm.propTypes = {
  createQuestion: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
};

export default connect(null, { createQuestion, fetchQuestions })(QuestionForm);
