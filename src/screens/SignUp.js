import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Header from '../components/common/Header';
import ScreenContainer from '../components/common/ScreenContainer';
import LoginBox from '../components/loginLogout/LoginBox';

const SignUp = () => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <LoginBox title="Sign Up" />
        </KeyboardAvoidingView>
      </ScreenContainer>
    </>
  );
};

export default SignUp;
