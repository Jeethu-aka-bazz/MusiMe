import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const RecomendedMusic = ({callSearchApi}) => {
  return (
    <View>
      <TouchableOpacity onPress={callSearchApi}>
        <Text>helldsdo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecomendedMusic;
