import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Rootnavigation = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {screenProps => <Home screenProps={{...screenProps}} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default Rootnavigation;
