import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import search from '../../assets/search.png';
import view from '../../assets/view.png';
import viewHide from '../../assets/view_hide.png';

const InputBox = ({
  lefticon,
  righticon,
  isPassword,
  styleprops,
  label,
  value,
  changevalue,
  isValid = 'true',
  errorMsg,
  placeholder = 'inputText',
  keyboardType = 'default',
}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  const changePassword = () => {
    setShowPassword(!showPassword);
  };
  const makeSearch = () => {
    console.log('Searched');
  };
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputBox(isValid), {...styleprops}]}>
        {lefticon && <TextBoxIcon source={search} makeSearch={makeSearch} />}
        <TextInput
          style={styles.textinputBox}
          placeholder={placeholder}
          value={value}
          onChangeText={e => {
            changevalue(e);
          }}
          placeholderTextColor="#aaa"
          secureTextEntry={showPassword}
          keyboardType={keyboardType}
        />
        {righticon && (
          <TextBoxIcon
            source={showPassword ? viewHide : view}
            changePassword={changePassword}
          />
        )}
      </View>
      {!isValid && <Text style={[styles.error]}>{errorMsg}</Text>}
    </>
  );
};

const TextBoxIcon = ({source, changePassword, makeSearch}) => {
  return (
    <TouchableOpacity
      style={[styles.iconcont]}
      onPress={makeSearch || changePassword}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputBox: isValid => ({
    backgroundColor: 'transparent',
    borderColor: isValid ? '#fff' : 'red',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  }),
  image: {
    height: 33,
    width: 31,
    marginRight: 10,
  },
  textinputBox: {
    color: 'white',
    width: '90%',
  },
  iconcont: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    fontFamily: 'Rambla',
    color: 'white',
  },
  error: {
    marginTop: 5,
    marginLeft: 6,
    color: 'red',
  },
});

export default InputBox;
