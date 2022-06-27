import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PrimaryButton} from '@components';
import {BigBoxIcon} from '@icons';
import {Colors, TextStyles} from '@styles';

type Props = {
  shopNow(): void;
};

const EmptyCart: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <BigBoxIcon />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    ...TextStyles.secondaryTitle,
    marginTop: 15,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 35,
  },
});

export {EmptyCart};
