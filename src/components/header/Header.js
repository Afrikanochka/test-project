import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../navigation/Navigation';
import LoginMenu from '../loginMenu/LoginMenu';
import UserMenu from '../userMenu/UserMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);
  return (
    <HeaderStyled>
      <Navigation />
      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}
    </HeaderStyled>
  );
};

export default Header;