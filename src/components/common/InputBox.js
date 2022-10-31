import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import search from '../../assets/search.png';
import view from '../../assets/view.png';
import viewHide from '../../assets/view_hide.png';

const InputBox = ({lefticon, righticon, isPassword, styleprops}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <>
      <View style={[styles.inputBox, {...styleprops}]}>
        {lefticon && <Image source={search} style={styles.image} />}
        <TextInput
          style={styles.textinputBox}
          placeholder=""
          secureTextEntry={showPassword}
        />
        {righticon && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            <Image
              source={showPassword ? viewHide : view}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
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
    width: '99%',
  },
  image: {
    height: 33,
    width: 31,
    marginRight: 10,
  },
  textinputBox: {
    width: '88%',
    color: 'white',
  },
});

export default InputBox;
