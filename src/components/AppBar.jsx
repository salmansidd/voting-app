import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';

import vote from 'assets/vote.png';
import {theme} from 'theme/theme.js';

const styles = makeStyles();

const StyledAppBar = styled(AppBar)`
  background-color: ${theme.palette.secondary.main};
`
StyledAppBar.displayName = 'StyledAppBar'

const StyledAppBarLogo = styled.img`
  max-width: 160px;
  margin-left: 16px;
`
StyledAppBarLogo.displayName = 'StyledAppBarLogo'

const StyledHomeIcon = styled(HomeIcon)`
  font-size: 48px;
  color: ${theme.palette.primary.main};
`
StyledHomeIcon.displayName = 'StyledHomeIcon'

const ButtonAppBar = () => {
  styles();

  return (
    <>
      <StyledAppBar position="static" data-hook='app-bar'>
        <Toolbar>
          <IconButton
            edge="start"
            data-hook='home-button'
          >
				    <Link to={`/questions`}>
		          <StyledHomeIcon />
		        </Link>
          </IconButton>
          <StyledAppBarLogo src={vote} alt="vote" />
        </Toolbar>
      </StyledAppBar>
    </>
  );
}

export default ButtonAppBar;
