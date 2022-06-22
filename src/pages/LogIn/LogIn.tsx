import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {
  Loading,
  PrimaryButton,
  TextInputStore,
} from '../../components/components';
import {TextStyles} from '../../core/styles/styles';

import {PropsFromRedux} from './LogInComponent';
import styles from './styles';

const LogIn: React.FC<PropsFromRedux> = props => {
  const {logIn, isLogging, isLogged} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (isLogged) {
      props.navigation.goBack();
    }
  }, [isLogged]);

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

export default LogIn;
