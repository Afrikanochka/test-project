import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import authOperations from '../../redux/auth/auth-operations';
import { LoginStyled } from './LoginStyled';

const Login = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const onChange = e => {
  const { name, value } = e.target;

  switch (name) {
    case 'email':
      setEmail(value);
      break;

    case 'password':
      setPassword(value);
      break;

    default:
      return;
  }
};

const handleSubmit = e => {
  e.preventDefault();
  if (email.trim() === '' || password.trim() === '') {
    return toast.error('💩 Please fill in all fields!');
  }
  dispatch(authOperations.login({ email, password }));
  setEmail('');
  setPassword('');
};

  return (
    <LoginStyled onSubmit={handleSubmit}>
    <h2 className="title">Log in</h2>
    <label className="label">
      Email
      <input
        className="input"
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Enter your e-mail"
        onChange={onChange}
      />
    </label>
    <label className="label">
      Password
      <input
        className="input"
        type="password"
        name="password"
        autoComplete="off"
        placeholder="Enter your password"
        onChange={onChange}
      />
    </label>
    <button type="submit" className="button">
      Sign in
    </button>
  </LoginStyled>
  );
}

export default Login;