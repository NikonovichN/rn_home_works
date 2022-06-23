import React from 'react';
import {View, Text} from 'react-native';
import {TextStyles} from '../../core/styles/styles';
import {PrimaryButton} from '../components';

import {Avatar} from '../icons/icons';
import styles from './styles';

interface Props {
  onPressLogIn(): void;
}

const FirstLogin: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Avatar />
      <Text style={styles.title}>First Login</Text>
      <Text style={TextStyles.regularSecondary}>
        Login first to view your cart
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={props.onPressLogIn} content="LogIn now" />
      </View>
    </View>
  );
};

export default FirstLogin;
