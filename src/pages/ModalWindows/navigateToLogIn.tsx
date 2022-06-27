import React from 'react';
import {Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import styles from './styles';
import {PrimaryButton} from '@components';
import {Warning} from '../../components/icons/icons';
import {AnyActionTypes} from '../../core/actions/AnyActionTypes';

type Params = {
  navigation: NativeStackNavigationProp<any, any>;
  action: AnyActionTypes;
};

const navigateToLogIn = ({navigation, action}: Params) => {
  navigation.navigate('ModalWindow', {
    icon: <Warning />,
    title: <Text style={styles.modalTitle}>Login To Continue</Text>,
    description: (
      <Text style={styles.modalDescription}>
        Please login to add product in your cart
      </Text>
    ),
    actions: (
      <>
        <PrimaryButton
          width={125}
          content="LogIn"
          onPress={() => navigation.replace('LogIn', {action})}
        />
        <PrimaryButton
          width={125}
          content="Sign up"
          onPress={navigation.goBack}
        />
      </>
    ),
  });
};

export default navigateToLogIn;
