import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View } from 'react-native';

type BackgroundProps = {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}