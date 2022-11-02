import CustomButton from './CustomButton';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import InputBox from '../common/InputBox';
import {useState} from 'react';
import {useEffect} from 'react';

const LoginBox = ({title}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const validateEmail = checkemail => {
    if (checkemail) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(checkemail);
    }
    return true;
  };

  const validatePassword = checkpassword => {
    if (checkpassword) {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%#*?&]{8,}$/;
      return re.test(checkpassword);
    }
    return true;
  };

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(validatePassword(password));
  }, [password]);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.top}>
        <InputBox
          label="Email"
          placeholder="Email"
          value={email}
          changevalue={setEmail}
          isValid={emailValid}
          errorMsg="Invalid Email"
        />
      </View>
      <View style={styles.top}>
        <InputBox
          isPassword
          righticon
          styleprops={styles.input}
          placeholder="Password"
          label="Password"
          value={password}
          changevalue={setPassword}
          isValid={passwordValid}
          errorMsg={
            title !== 'Login'
              ? 'Password must contain \nmore than 8 characters \n1 upperCase\n1 special char\n1 number'
              : 'Invalid Password'
          }
        />
      </View>

      <CustomButton text={title} />
      <View style={[styles.textbody]}>
        <Text style={[styles.label, styles.text]}>
          {title === 'Login' ? "Don't have an account?" : 'Have an account?'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            title === 'Login'
              ? navigation.navigate('Signup')
              : navigation.navigate('Login');
          }}>
          <Text style={[styles.label, styles.text, styles.underline]}>
            {title === 'Login' ? 'Sign up' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginBox;

const styles = StyleSheet.create({
  heading: {
    fontSize: 42,
    fontFamily: 'Mouse Memoirs',
    color: 'white',
    paddingBottom: 10,
  },
  label: {
    fontSize: 24,
    fontFamily: 'Rambla',
    color: 'white',
  },
  text: {
    fontSize: 14,
  },
  main: {
    justifyContent: 'center',
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginBottom: 30,
  },
  top: {
    paddingBottom: 16,
    paddingRight: 20,
  },
  underline: {
    textDecorationColor: 'white',
    textDecorationLine: 'underline',
  },
  textbody: {
    paddingTop: 20,
  },
});
