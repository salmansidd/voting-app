import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from "axios/index";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProgressBar from '@material-ui/core/LinearProgress';
import Loader from '@material-ui/core/CircularProgress';

import {BASE_URL} from 'constants.js';
import { fetchSingleQuestion, postVote } from 'api/baseApi.js';
import FormModal from 'components/Modal';
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
  display: block;
  justify-items: stretch;
  align-items: stretch;
  width: 80%;
  margin: 1rem auto;
`
StyledContainer.displayName = 'StyledContainer'

const StyledQuestion = styled.div`
  display: block;
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.base.white};
  max-width: 80vw;
  width: 100%;
  margin: 20px auto;
  height: 60px;
  font-size: 24px;
  padding: 12px 0 0 12px;
  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px 0 0 10px;
  }
`
StyledQuestion.displayName = 'StyledQuestion'

const StyledTableBodyRow = styled(TableRow)`
  height: 60px;
  align-items: center;
  border-radius: 5px;
  Width: 100%;
  &.active {
		background: ${theme.palette.primary.main}; 
  }
  &:hover{
    cursor: pointer;
		background: ${theme.palette.base.main};
  }
`
StyledTableBodyRow.displayName = 'StyledTableBodyRow'

const TableHeadRow = styled(TableRow)`
  background: ${theme.palette.base.main};
`
TableHeadRow.displayName = 'TableHeadRow'

const StyledTableCell = styled(TableCell)`
  color: ${theme.palette.highlight.main};
	font-weight: bold;
`
StyledTableCell.displayName = 'StyledTableCell'

const StyledButton = styled.button`
  background: ${theme.palette.secondary.main};
  font-weight: bold;
  color: ${theme.palette.base.white};
	float: right;
  margin-top: 1rem;
	border: none;
	padding: 10px;
	&:hover {
		background: ${theme.palette.highlight.main};
	}
`
StyledButton.displayName = 'StyledButton'

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

const StyledProgressBar = withStyles(() => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#c3cad2',
  },
  bar: {
    backgroundColor: '#164ca3',
  },
}))(ProgressBar);

const QuestionDetail = (props) => {
  const [choice, setChoice] = useState({
    title: '',
    url: null
  });
  const [modalShow, setModalShow] = useState(false);
  const [modalBodyText, setModalBodyText] = useState('');
  const [modalHeaderText, setModalHeaderText] = useState('');
	const { question, choices } = props.selectedQuestion;

  useEffect(() => {
    const {questionId} = props.match.params;
    props.fetchSingleQuestion(questionId);
  }, []); // eslint-disable-line

	const handleChoiceOnClick = ({choice, url}) => {
    setChoice({
	    title: choice,
	    url: url
    });
  }

	const handleVoteSubmit = (event) => {
    axios.post(`${BASE_URL}${choice.url}`).then(() => {
        setModalShow(true);
				setModalHeaderText('Success')
				setModalBodyText('Your vote has been submitted successfully.');
	    })
	    .catch(() => {
        setModalShow(true);
				setModalHeaderText('Error')
				setModalBodyText('Your vote could not be submitted. Please try again.');
	    });
    props.postVote(choice);
		event.preventDefault();
  }

	const handleModalHide = () => {
    setModalShow(false)
		const {questionId} = props.match.params;
		props.fetchSingleQuestion(questionId);
  }

	const calculateVotesPercent = (choiceVotes) => {
	  const totalVotes = choices.reduce((n, {votes}) => n + votes, 0);
    const percent = parseInt(choiceVotes) * 100 / totalVotes;
    const percentValue =  isNaN(parseInt(percent)) ? 0 : percent.toFixed(2);
    return percentValue;
  }

  const choicesList = choices ? Object.keys(choices).map((key, index) => {
	  return (
	    <StyledTableBodyRow
				key={key}
				className={`${choice.title === choices[key].choice ? 'active' : ''}`}
				data-hook='question-choice'
				onClick={(event) => {
		      event.preventDefault();
		      handleChoiceOnClick(choices[key]);
	    }}>
        <StyledTableCell component="th" scope="row">{index + 1}.</StyledTableCell>
        <StyledTableCell>{choices[key].choice}</StyledTableCell>
        <StyledTableCell>{choices[key].votes}</StyledTableCell>
				<StyledTableCell>{calculateVotesPercent(choices[key].votes)} %</StyledTableCell>
        <StyledTableCell><StyledProgressBar variant="determinate" value={parseInt(calculateVotesPercent(choices[key].votes))} /></StyledTableCell>
	    </StyledTableBodyRow>
	  );
	}) : null;

  return (
		<>
		  <StyledApp>
		    <StyledAppHeader>
		      <h1>Details</h1>
		    </StyledAppHeader>
		    {props.isLoading &&
					<StyledLoaderContainer><StyledLoader /></StyledLoaderContainer>}
				{!props.isLoading && <StyledContainer>
		      <StyledQuestion>Question: {question}</StyledQuestion>
		      <form onSubmit={handleVoteSubmit}>
				    <TableContainer component={Paper}>
				      <Table>
				        <TableHead>
				          <TableHeadRow>
				            <StyledTableCell>No.</StyledTableCell>
				            <StyledTableCell>Choice</StyledTableCell>
				            <StyledTableCell>Votes</StyledTableCell>
				            <StyledTableCell>Percent (%)</StyledTableCell>
										<StyledTableCell>Progress</StyledTableCell>
				          </TableHeadRow>
				        </TableHead>
				        <TableBody data-hook='question-table'>
				          {choicesList}
				        </TableBody>
				      </Table>
				    </TableContainer>
		        <StyledButton type="submit" data-hook='submit-vote'>Submit vote</StyledButton>
		      </form>
		    </StyledContainer>}
		  </StyledApp>
		  <FormModal
		    show={modalShow}
		    onHide={() => setModalShow(false)}
				showVotingResults={() => handleModalHide()}
				header={modalHeaderText}
				body={modalBodyText}
		  />
	  </>
  );
}

function mapStateToProps({ selectedQuestion, isLoading }) {
  return { selectedQuestion, isLoading }
}

QuestionDetail.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  selectedQuestion: PropTypes.object.isRequired,
  fetchSingleQuestion: PropTypes.func.isRequired,
  postVote: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchSingleQuestion, postVote })(QuestionDetail);
