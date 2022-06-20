import React, {ReactNode} from 'react';
import {Button, Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ParamListBase} from '@react-navigation/routers/lib/typescript/src/types';
import styles from './styles';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
  title: ReactNode;
  description?: ReactNode;
  actions: ReactNode;
}

const ModalWindow: React.FC<Props> = props => {
  const {navigation, title, description, actions} = props;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.contentContainer}>
        {title}
        {description !== null ? <View>{description}</View> : null}
        <View style={styles.actions}>{actions}</View>
      </View>
    </View>
  );
};

export default ModalWindow;
