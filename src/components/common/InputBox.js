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

const InputBox = ({lefticon, righticon, isPassword}) => {
  const [showPassword, setShowPassword] = useState(isPassword);
  return (
    <>
      <View style={styles.inputBox}>
        {lefticon && <Image source={search} style={styles.image} />}
        <TextInput
          style={styles.textinputBox}
          placeholder="dfdsf"
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
  },
  image: {
    height: 33,
    width: 31,
    marginRight: 10,
  },
  textinputBox: {
    width: '80%',
  },
});

export default InputBox;
