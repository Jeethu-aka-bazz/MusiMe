import React from 'react';
import Header from '../components/common/Header';
import ScreenContainer from '../components/common/ScreenContainer';
import LoginBox from '../components/loginLogout/LoginBox';

const Login = () => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <LoginBox />
      </ScreenContainer>
    </>
  );
};

export default Login;
