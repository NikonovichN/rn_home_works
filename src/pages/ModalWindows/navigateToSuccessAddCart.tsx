import React from 'react';
import {Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import styles from './styles';
import {PrimaryButton} from '@components';
import {Success} from '../../components/icons/icons';

type Params = {
  navigation: NativeStackNavigationProp<any, any>;
};

const navigateToSuccessAddCart = ({navigation}: Params) => {
  navigation.navigate('ModalWindow', {
    icon: <Success />,
    title: <Text style={styles.modalTitle}>Product added to your cart</Text>,
    description: null,
    actions: (
      <View style={styles.alignView}>
        <PrimaryButton width={125} content="ok" onPress={navigation.goBack} />
      </View>
    ),
  });
};

export default navigateToSuccessAddCart;
