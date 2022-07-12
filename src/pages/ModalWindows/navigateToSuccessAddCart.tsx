import React from 'react';
import {Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {PrimaryButton} from '@components';
import {SuccessIcon} from '@icons';
import {Routes} from '@constants';

import styles from './styles';

type Params = {
  navigation: NativeStackNavigationProp<any, any>;
};

const navigateToSuccessAddCart = ({navigation}: Params) => {
  navigation.navigate(Routes.ModalWindow, {
    icon: <SuccessIcon />,
    title: <Text style={styles.modalTitle}>Product added to your cart</Text>,
    description: null,
    actions: (
      <View style={styles.alignView}>
        <PrimaryButton width={125} content="ok" onPress={navigation.goBack} />
      </View>
    ),
  });
};

export {navigateToSuccessAddCart};
