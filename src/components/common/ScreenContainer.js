import React from 'react';
import {StyleSheet, View} from 'react-native';

const ScreenContainer = ({children}) => {
  return (
    <>
      <View style={styles.homecontainer}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#070D20',
    paddingLeft: 30,
  },
});

export default ScreenContainer;
