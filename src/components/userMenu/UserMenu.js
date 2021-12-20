import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { UserMenuStyled } from './UserMenuStyled';

const UserMenu = () => {
const dispatch = useDispatch();
const userName = useSelector(authSelectors.getUserName);
const onLogout= () => dispatch(authOperations.logout());

  return (
    <UserMenuStyled>
      <span className="avatar">{userName.slice(0, 1)}</span>
      <span className="name">{userName}</span>
      <button className="button" type="button" onClick={onLogout}>
        Log Out
      </button>
    </UserMenuStyled>
  );
};


export default UserMenu;