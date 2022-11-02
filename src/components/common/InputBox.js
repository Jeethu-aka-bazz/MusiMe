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
  placeholder = 'inputText',
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
      <View style={[styles.inputBox, {...styleprops}]}>
        {lefticon && <TextBoxIcon source={search} makeSearch={makeSearch} />}
        <TextInput
          style={styles.textinputBox}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          secureTextEntry={showPassword}
        />
        {righticon && (
          <TextBoxIcon
            source={showPassword ? viewHide : view}
            changePassword={changePassword}
          />
        )}
      </View>
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
  inputBox: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
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
});

export default InputBox;
