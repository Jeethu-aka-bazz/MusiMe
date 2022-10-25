import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {RadioBrowserApi, StationSearchType} from 'radio-browser-api';

const Home = () => {
  const callApi = async () => {
    const api = new RadioBrowserApi('MusiMe');

    console.log(api);
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
    // width: '100%',
    // height: '200%',
    backgroundColor: '#FAA',
  },
  innercontainer: {
    marginTop: 150,
    padding: 100,
    marginHorizontal: 10,
    backgroundColor: '#B44',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Home;
