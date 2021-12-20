import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginMenuStyled } from './LoginMenuStyled';

const LoginMenu = () => {
  return (
    <LoginMenuStyled>
      <NavLink className="link" activeClassName="link-active" to="/signup">
        Register
      </NavLink>
      <NavLink className="link" activeClassName="link-active" to="/login">
        Login
      </NavLink>
    </LoginMenuStyled>
  );
};

export default LoginMenu;