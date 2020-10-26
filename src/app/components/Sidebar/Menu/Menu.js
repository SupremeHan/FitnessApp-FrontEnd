import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link, withRouter } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

const Menu = ({open}, props) => {
  const { history } = props;


  return (
    <StyledMenu open={open}>
        <ul>
          <Link to='/' className="links">Home</Link>
          <Link to='/article' className="links">News</Link>
          <Link to='/auth/user/login' className="links">Login</Link>
        </ul>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default withRouter(Menu);