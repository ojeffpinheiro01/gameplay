import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar'

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container} >
      <Avatar URL_Image='https://github.com/ojeffpinheiro01.png' />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Jéferson</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>

  )
}