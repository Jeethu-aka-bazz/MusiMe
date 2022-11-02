import CustomButton from './CustomButton';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import InputBox from '../common/InputBox';

const LoginBox = ({title}) => {
  const navigation = useNavigation();
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
        <InputBox label="Email" placeholder="Email" />
        <InputBox
          isPassword
          righticon
          styleprops={styles.input}
          placeholder="Password"
          label="Password"
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
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 20,
  },
  input: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  underline: {
    textDecorationColor: 'white',
    textDecorationLine: 'underline',
  },
  textbody: {
    paddingTop: 20,
  },
});
