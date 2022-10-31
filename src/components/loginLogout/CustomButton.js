import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#41E1F6',
    width: 190,
    padding: 9,
    alignSelf: 'center',
  },
});
