/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import MainNavigator from './src/navigation/MainNavigator';
import './i18n';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <MainNavigator />  
    );
}

export default App;
