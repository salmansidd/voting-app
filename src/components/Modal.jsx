import { Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {theme} from 'theme/theme.js';

const StyledHeader = styled(Modal.Header)`
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.base.white};
`
StyledHeader.displayName = 'StyledHeader'

const StyledText = styled.p`
  color: ${theme.palette.highlight.main};
  font-size: 20px;
}
`
StyledText.displayName = 'StyledText'

const StyledButton = styled(Button)`
  background: ${theme.palette.secondary.main};
  font-weight: bold;
	&:hover {
		background: ${theme.palette.highlight.main};
	}
`
StyledButton.displayName = 'StyledButton'

const FormModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      data-hook='info-modal'
      centered
    >
      <StyledHeader>
        <Modal.Title>
          {props.header}
        </Modal.Title>
      </StyledHeader>
      <Modal.Body>
        <StyledText>
          {props.body}
        </StyledText>
      </Modal.Body>
      <Modal.Footer>
				{props.showVotingResults &&
					<StyledButton data-hook='show-results' onClick={props.showVotingResults}>Show Results</StyledButton>}
		    <Link to={`/questions`}>
          <StyledButton data-hook='show-home' onClick={props.onHide}>Back to Home</StyledButton>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
