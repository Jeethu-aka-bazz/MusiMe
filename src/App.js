import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Rootnavigation from './navigation/Rootnavigation';
import {store, persistor} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Rootnavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
