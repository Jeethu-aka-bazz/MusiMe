import CustomButton from './CustomButton';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import InputBox from '../common/InputBox';

const LoginBox = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.container}>
        <Text style={styles.heading}>Login</Text>
      </TouchableOpacity>
      <View style={styles.top}>
        <Text style={styles.label}>Email</Text>
        <InputBox styleprops={styles.input} />
        <Text style={styles.label}>Password</Text>
        <InputBox isPassword righticon styleprops={styles.input} />
      </View>

      <CustomButton text="Login" />
    </View>
  );
};

export default LoginBox;

const styles = StyleSheet.create({
  heading: {
    fontSize: 44,
    fontFamily: 'Mouse Memoirs',
    color: 'white',
    paddingBottom: 10,
  },
  label: {
    fontSize: 24,
    fontFamily: 'Rambla',
    color: 'white',
  },
  main: {
    justifyContent: 'center',
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  container: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginBottom: 50,
  },
  top: {
    marginTop: 16,
    marginBottom: 25,
    marginRight: 20,
  },
  input: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});
