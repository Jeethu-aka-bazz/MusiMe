import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import getSearchApi from '../api/Api';
import RecomendedMusic from '../components/Home/RecomendedMusic';
import ScreenContainer from '../components/ScreenContainer';
import store from '../store/store';

const Home = () => {
  const callSearchApi = async () => {
    const {albummatches: listOfMusic} = await getSearchApi();
    console.log(listOfMusic);
  };

  return (
    <ScreenContainer>
      <ScrollView>
        <RecomendedMusic callSearchApi={callSearchApi} />
      </ScrollView>
    </ScreenContainer>
  );
};

export default Home;
