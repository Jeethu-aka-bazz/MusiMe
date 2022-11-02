import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import logoIcon from '../../assets/logoIcon.png';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={logoIcon} style={{height: 42, width: 41}} />
      <Text style={styles.title}>MuseMe</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#41E1F6',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
  },
  title: {
    fontFamily: 'Mouse Memoirs',
    fontSize: 32,
    color: '#33363F',
  },
});
