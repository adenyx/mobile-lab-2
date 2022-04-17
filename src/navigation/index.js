import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screens from '../screens';
import { TabBar } from '../components';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={screens.Home} />
      <Tab.Screen name="Search" component={screens.Home} />
      <Tab.Screen name="Profile" component={screens.Home} />
    </Tab.Navigator>
  );
};

// --------------------------------------------------------

const RootStackNav = createStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="TabStack">
      <RootStackNav.Screen
        name="TabStack"
        options={{
          headerShown: false,
        }}
        component={TabStack}
      />
    </RootStackNav.Navigator>
  );
};

// --------------------------------------------------------

export default RootStack;
