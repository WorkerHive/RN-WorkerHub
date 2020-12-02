/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/views/Login';
import Dashboard from './src/views/Dashboard';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View, 
  StatusBar,
} from 'react-native';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import configureStore from './src/configureStore';

const Stack = createStackNavigator();
const { store, persistor } = configureStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
    <NavigationContainer>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack.Navigator initialRouteName={store.getState().auth.token ? "Dashboard" : "Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </ApplicationProvider>
  </NavigationContainer>
    </PersistGate>
  </Provider>
    
  );
};

export default App;
