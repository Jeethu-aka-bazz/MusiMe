import CustomButton from './CustomButton';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import InputBox from '../common/InputBox';

const LoginBox = () => {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', height: '100%'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: 'white',
          marginBottom: 50,
        }}>
        <Text style={styles.heading}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop: 16, marginBottom: 25, marginRight: 20}}>
        <Text style={styles.label}>Email</Text>
        <InputBox
          styleprops={{alignSelf: 'center', marginBottom: 20, marginTop: 10}}
        />
        <Text style={styles.label}>Password</Text>
        <InputBox
          isPassword
          righticon
          styleprops={{alignSelf: 'center', marginBottom: 20, marginTop: 10}}
        />
      </View>

      <CustomButton text="Login" />
    </View>
  );
};

export default LoginBox;

const styles = StyleSheet.create({
  heading: {
    fontSize: 44,
    fontFamily: 'MouseMemoirs-Regular',
    color: 'white',
    paddingBottom: 10,
  },
  label: {
    fontSize: 24,
    fontFamily: 'Rambla',
    color: 'white',
  },
});
