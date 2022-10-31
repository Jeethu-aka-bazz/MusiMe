import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import InputBox from '../common/InputBox';

const RecomendedMusic = ({callSearchApi}) => {
  return (
    <View>
      <InputBox />
      <TouchableOpacity onPress={callSearchApi}>
        <Text>helldsdo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecomendedMusic;
