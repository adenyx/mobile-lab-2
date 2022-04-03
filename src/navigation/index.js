import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import screens from '../screens';

const RootStackNav = createStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Splash">
      <RootStackNav.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={screens.Home}
      />
    </RootStackNav.Navigator>
  );
};

export default RootStack;
