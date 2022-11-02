import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Header from '../components/common/Header';
import ScreenContainer from '../components/common/ScreenContainer';
import LoginBox from '../components/loginLogout/LoginBox';

const Login = () => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <LoginBox title="Login" />
        </KeyboardAvoidingView>
      </ScreenContainer>
    </>
  );
};

export default Login;
