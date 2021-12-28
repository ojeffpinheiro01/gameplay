import React, { useState } from 'react'
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

import { Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';

import { Background } from './src/components/Background';

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
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn} />
    )
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent />
      <Home />
    </Background>
  );
}
