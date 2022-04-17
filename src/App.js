/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';

import RootStack from './navigation';

const App = () => {
  useEffect(() => {
    const netUnsubscribe = NetInfo.addEventListener(networkState => {
      if (!networkState.isConnected) {
        Alert.alert('Network error', 'Connection lost');
      }
    });
    return () => {
      netUnsubscribe();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <RootStack />
    </SafeAreaProvider>
  );
};

export default App;
