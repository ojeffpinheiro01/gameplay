import React from 'react'
import { View, Text, Image, Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import illustrationImg from '../../assets/illustration.png'

import { styles } from './styles';

export function SignIn() {
  const { user, signIn } = useAuth()

  async function handleSignIn() {
    try {
      signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={illustrationImg} />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          <ButtonIcon title='ENTRAR COM O DISCORD'
            onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}