import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PrimaryButton} from '../../PrimaryButton';
import {SuccessIcon} from '@icons';
import {Colors, TextStyles} from '@styles';

import {ModalProps} from './types';

const SuccessAddToCart: React.FC<ModalProps> = props => {
  return (
    <>
      <View style={styles.iconView}>
        <SuccessIcon />
      </View>
      <Text style={styles.title}>Product added to your cart</Text>
      <View style={styles.actions}>
        <PrimaryButton width={125} content="Ok" onPress={props.onClose} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconView: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  title: {
    ...TextStyles.sectionTitle,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  actions: {
    marginTop: 25,
    alignItems: 'center',
  },
});

export {SuccessAddToCart};
