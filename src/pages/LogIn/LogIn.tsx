import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Loading, PrimaryButton, TextInputStore} from '@components';
import {Colors, TextStyles} from '@styles';

import {PropsFromRedux} from './LogInComponent';

const LogIn: React.FC<PropsFromRedux> = props => {
  const {logIn, isLogging, isLogged} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (isLogged) {
      props.navigation.goBack();
    }
  }, [isLogged, props.navigation]);

  return (
    <>
      {isLogging ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={TextStyles.heading}>Ecomerce</Text>
            <Text style={TextStyles.heading}>Store</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInputStore
              label="Email Address"
              onChangeText={setEmail}
              value={email}
            />
            <TextInputStore
              label="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <PrimaryButton
            onPress={() => logIn({userName: email, password})}
            content="sign in"
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 21,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: 90,
    marginBottom: 50,
    height: 110,
    justifyContent: 'space-between',
  },
});

export {LogIn};
