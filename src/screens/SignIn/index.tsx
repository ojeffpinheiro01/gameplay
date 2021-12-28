import {
  View,
  Text,
  Image
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import illustrationImg from '../../assets/illustration.png'

import { styles } from './styles';

export function SignIn() {
  return (
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
        <ButtonIcon title='ENTRAR COM O DISCORD' activeOpacity={0.7} />
      </View>
    </View>
  );
}