import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { Background } from '../Background';

import { styles } from './styles';

type ModalViewProps = ModalProps & {
  children: ReactNode;
  closeModal?: () => void;
}

export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal transparent
      animationType='slide' statusBarTranslucent {...rest} >
      <TouchableWithoutFeedback>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}