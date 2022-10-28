import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Rootnavigation from './navigation/Rootnavigation';
import store from './store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Rootnavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
