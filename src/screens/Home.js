import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const callApi = async () => {
    console.log('apicalled');
  };

  return (
    <SafeAreaView style={styles.homecontainer}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            callApi();
          }}>
          <View style={styles.innercontainer}>
            <Text>This is Home</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  innercontainer: {
    marginTop: 150,
    padding: 100,
    marginHorizontal: 10,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Home;
