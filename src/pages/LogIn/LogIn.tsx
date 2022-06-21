import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {PrimaryButton, TextInputStore} from '../../components/components';
import {TextStyles} from '../../core/styles/styles';

import {PropsFromRedux} from './LogInComponent';
import styles from './styles';

const LogIn: React.FC<PropsFromRedux> = props => {
  const {logIn} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
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
  );
};

export default LogIn;
