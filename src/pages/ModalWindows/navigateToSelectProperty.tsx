import React from 'react';
import {Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import styles from './styles';
import {PrimaryButton} from '../../components';
import {Decline} from '../../components/icons/icons';

type Params = {
  navigation: NativeStackNavigationProp<any, any>;
};

const navigateToSelectProperty = ({navigation}: Params) => {
  navigation.navigate('ModalWindow', {
    icon: <Decline />,
    title: <Text style={styles.modalTitle}>Select property</Text>,
    description: (
      <Text style={styles.modalDescription}>
        Please select your property to add this item in your cart
      </Text>
    ),
    actions: (
      <View style={styles.alignView}>
        <PrimaryButton width={125} content="ok" onPress={navigation.goBack} />
      </View>
    ),
  });
};

export default navigateToSelectProperty;
