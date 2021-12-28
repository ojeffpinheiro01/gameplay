
import React from 'react'
import { View } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';


export function AppointmentDetails() {
  return (
    <Background>
      <View style={styles.container}>
        <Header title='Detalhes' 
          action={
            <BorderlessButton>
              <Fontisto name="share"
              size={24}
              color={theme.colors.primary} />
            </BorderlessButton>} />
      </View>
    </Background>

  )
}