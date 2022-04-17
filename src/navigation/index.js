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
      <Tab.Screen name="Search" component={screens.Search} />
      <Tab.Screen name="Profile" component={screens.Profile} />
    </Tab.Navigator>
  );
};

// --------------------------------------------------------

const RootStackNav = createStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Main">
      <RootStackNav.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={TabStack}
      />
      <RootStackNav.Screen
        name="ProductDetails"
        component={screens.ProductDetails}
      />
      <RootStackNav.Screen
        name="FavoriteProducts"
        component={screens.FavoriteProducts}
      />
      <RootStackNav.Screen name="AboutUs" component={screens.AboutUs} />
      <RootStackNav.Screen name="Categories" component={screens.Categories} />
      <RootStackNav.Screen name="Settings" component={screens.Settings} />
    </RootStackNav.Navigator>
  );
};

// --------------------------------------------------------

export default RootStack;
