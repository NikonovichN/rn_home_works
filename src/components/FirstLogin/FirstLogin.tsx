import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors, TextStyles} from '@styles';
import {AvatarIcon} from '@icons';
import {Routes} from '@constants';

import {PrimaryButton} from '../PrimaryButton';

const FirstLogin: React.FC = () => {
  const navigation = useNavigation();
  const navigateToLogin = useCallback(
    () => navigation.navigate(Routes.LogIn),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <AvatarIcon />
      <Text style={styles.title}>First Login</Text>
      <Text style={TextStyles.regularSecondary}>
        Login first to view your cart
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={navigateToLogin} content="LogIn now" />
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

export {FirstLogin};
