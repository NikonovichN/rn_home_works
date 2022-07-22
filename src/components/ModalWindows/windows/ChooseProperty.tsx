import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PrimaryButton} from '@components';
import {DeclineIcon} from '@icons';
import {Colors, TextStyles} from '@styles';

import {ModalProps} from './types';

const ChooseProperty: React.FC<ModalProps> = props => {
  return (
    <>
      <View style={styles.iconView}>
        <DeclineIcon />
      </View>
      <Text style={styles.title}>Select property</Text>
      <Text style={styles.description}>
        Please select your property to add this item in your cart
      </Text>
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
  description: {
    ...TextStyles.regular,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: 10,
  },
  actions: {
    marginTop: 25,
    alignItems: 'center',
  },
});

export {ChooseProperty};
