import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ScreenContainer = ({children}) => {
  return (
    <>
      <SafeAreaView style={styles.homecontainer}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
});

export default ScreenContainer;
