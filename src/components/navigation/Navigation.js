import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import { NavigationStyled } from './NavigationStyled'

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticated)
  return (
    <NavigationStyled>
      <NavLink className="link" 
      activeClassName="link-active" 
      exact to="/">
        Home
      </NavLink>
      {isAuthenticated && <NavLink
        className="link"
        activeClassName="link-active"
        to="/products"
      >
        Products
      </NavLink>}
      {isAuthenticated && <NavLink
        className="link"
        activeClassName="link-active"
        to="/cart"
      >
        Cart
      </NavLink>}
      
    </NavigationStyled>
  );
};

export default Navigation;