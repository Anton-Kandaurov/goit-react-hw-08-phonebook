import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { selectUser } from 'redux/auth/authSlice';
import { StyledLink } from './HomePage.styled';

const HomePage = () => {
  const userData = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const pleaseLogin = (
    <>
      Please
      <b>
        <StyledLink to="login"> Login </StyledLink>
      </b>
      to access your account, or
      <b>
        <StyledLink to="register"> Sign Up </StyledLink>
      </b>
      for new.
    </>
  );

  return (
    <>
      <Typography
        variant="h3"
        align="start"
        sx={{ color: '#7519d2', padding: '50px 0px 0px 0px' }}
      >
       Hello!
      </Typography>
      <Typography variant="h4" sx={{ color: '#7519d2' }}>
        {!isLoggedIn ? pleaseLogin : `Welcome, ${userData.name}!`}
      </Typography>
    </>
  );
};

export default HomePage;
