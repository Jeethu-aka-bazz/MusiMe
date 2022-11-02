import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Rootnavigation = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home">
          {screenProps => <Home screenProps={{...screenProps}} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {screenProps => <Login screenProps={{...screenProps}} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {screenProps => <SignUp screenProps={{...screenProps}} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default Rootnavigation;
