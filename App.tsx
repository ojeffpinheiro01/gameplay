import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent />
      <SignIn />
    </Background>
  );
}
