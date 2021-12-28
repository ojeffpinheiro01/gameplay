import React from 'react'
import { Text, View } from 'react-native'

import { Avatar } from '../../components/Avatar'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export type Member = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type MemberProps = {
  data: Member;
}


export function Member({ data }: MemberProps) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar URL_Image={ data.avatar_url } />

      <View>
        <Text style={styles.title}>{ data.username }</Text>
        <View style={styles.status}>
          <View style={[styles.bulletStatus, 
           { backgroundColor: isOnline ? on : primary } ]} />
           <Text style={styles.nameStatus}>{ isOnline ? 'Disponível' : 'Ocupado' }</Text>
        </View>
      </View>
    </View>
  )
}
