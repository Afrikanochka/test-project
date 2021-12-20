import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import authOperations from '../../redux/auth/auth-operations';
import { SignUpStyled } from './SignUpStyled';

const SignUp = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const onChange = e => {
  const { name, value } = e.target;

  switch (name) {
    case 'name':
      return setName(value);
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return;
  }
};
    
    const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    } else if (password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

    return (
        <SignUpStyled onSubmit={handleSubmit}>
        <h2 className="title">Register</h2>
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            onChange={onChange}
          />
        </label>
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
          Register
        </button>
        </SignUpStyled>
    );
}

export default SignUp;