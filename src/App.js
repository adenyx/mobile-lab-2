/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';

import { useDispatch } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';

import RootStack from './navigation';
import CurrenciesActions from './store/reducers/currencies/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const netUnsubscribe = NetInfo.addEventListener(networkState => {
      if (!networkState.isConnected) {
        Alert.alert('Network error', 'Connection lost');
      }
    });

    dispatch(CurrenciesActions.getCurrencies());
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
