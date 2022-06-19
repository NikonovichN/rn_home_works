import React from 'react';
import {Button, Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ParamListBase} from '@react-navigation/routers/lib/typescript/src/types';
import styles from './styles';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const ModalWindow: React.FC<Props> = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default ModalWindow;
