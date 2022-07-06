import React from 'react';
import {Text} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import styles from './styles';
import {PrimaryButton} from '@components';
import {DeclineIcon} from '@icons';
import {Colors} from '@styles';

type Params = {
  navigation: NativeStackNavigationProp<any, any>;
  action(): void;
};

const navigateToNetworkIssue = ({navigation, action}: Params) => {
  navigation.navigate('ModalWindow', {
    icon: <DeclineIcon />,
    title: <Text style={styles.modalTitle}>No Internet</Text>,
    description: (
      <Text style={styles.modalDescription}>
        Looks like you loosed internet connection. Check your connection in
        settings and repeat your action again
      </Text>
    ),
    actions: (
      <>
        <PrimaryButton width={125} content="ok" onPress={navigation.goBack} />
        <PrimaryButton
          width={125}
          content="try again"
          onPress={() => {
            navigation.goBack();
            action();
          }}
          backgroundColor={Colors.buttons.errorAccent}
        />
      </>
    ),
  });
};

export {navigateToNetworkIssue};
