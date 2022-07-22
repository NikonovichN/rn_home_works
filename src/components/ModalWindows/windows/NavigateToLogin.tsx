import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {PrimaryButton} from '@components';
import {WarningIcon} from '@icons';
import {Colors, TextStyles} from '@styles';

import {ModalProps} from './types';
import {Routes} from '../../../core/constants/routes';

const NavigateToLogIn: React.FC<ModalProps> = props => {
  const navigation = useNavigation();
  const goToLogIn = useCallback(
    () => navigation.navigate(Routes.LogIn),
    [navigation],
  );

  return (
    <>
      <View style={styles.iconView}>
        <WarningIcon />
      </View>
      <Text style={styles.title}>Login To Continue</Text>
      <Text style={styles.description}>
        Please login to add product in your cart
      </Text>
      <View style={styles.actions}>
        <PrimaryButton width={125} content="log in" onPress={goToLogIn} />
        <PrimaryButton width={125} content="close" onPress={props.onClose} />
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
    justifyContent: 'space-between',
  },
});

export {NavigateToLogIn};
