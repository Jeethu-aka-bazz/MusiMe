import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import search from '../../assets/search.png';

const InputBox = () => {
  //   console.log(search);
  return (
    <>
      <View style={styles.inputBox}>
        <Image source={search} style={styles.searchimage} />
        <TextInput placeholder="dfdsf" />
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
    paddingVertical: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  searchimage: {
    height: 33,
    width: 31,
    marginRight: 10,
  },
});

export default InputBox;
