import React, { useState } from 'react'

import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

import { Routes } from './src/routes';
import { StatusBar } from 'react-native';


const fetchFonts = () => {
  return Font.loadAsync({
    'Inter_400Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter_500Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Rajdhani_500Medium': require('./src/assets/fonts/Rajdhani-Medium.ttf'),
    'Rajdhani_700Bold': require('./src/assets/fonts/Rajdhani-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn} />
    )
  }

  return (
      <>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent />
        <Routes />
      </>
  );
}
