import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import getSearchApi from '../api/Api';
import RecomendedMusic from '../components/Home/RecomendedMusic';
import ScreenContainer from '../components/common/ScreenContainer';
import {store, persistor} from '../store/store';
import Header from '../components/common/Header';

const Home = () => {
  const callSearchApi = async () => {
    const {albummatches: listOfMusic} = await getSearchApi();
    console.log(listOfMusic);
  };

  console.log('store', store);
  console.log('persistor', persistor);

  return (
    <>
      <Header />
      <ScreenContainer>
        <ScrollView>
          <RecomendedMusic callSearchApi={callSearchApi} />
        </ScrollView>
      </ScreenContainer>
    </>
  );
};

export default Home;
