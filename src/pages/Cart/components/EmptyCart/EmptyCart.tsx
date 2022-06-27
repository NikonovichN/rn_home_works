import React from 'react';
import {Text, View} from 'react-native';

import {PrimaryButton} from '../../../../components/components';
import {BigBox} from '../../../../components/icons/icons';
import {TextStyles} from '../../../../core/styles/styles';

import styles from './styles';

type Props = {
  shopNow(): void;
};

const EmptyCart: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <BigBox />
      <Text style={styles.title}>Your Cart is Empty!</Text>
      <Text style={TextStyles.regularSecondary}>
        Add product in your cart now
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={props.shopNow} content="shop now" />
      </View>
    </View>
  );
};

export default EmptyCart;
