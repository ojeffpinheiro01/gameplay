import React from 'react'
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from '../../global/styles/theme'

import { styles } from "./styles";

type AvatarProps = {
  URL_Image: string;
}

export function Avatar({ URL_Image  }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[secondary50, secondary70]} >
      <Image style={styles.avatar} source={{ uri: URL_Image }} />
    </LinearGradient>
  )

}