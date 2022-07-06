import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RouteProp} from '@react-navigation/native';

import {
  AnimatedButton,
  TextInputStore,
  ANIMATED_BUTTON_STATUS,
} from '@components';
import {Colors, TextStyles} from '@styles';
import {RootStackParamList} from '@navigation/types';
import {useShallowEqualSelector} from '@hooks';
import {userSelector} from '@selectors';
import {userActions} from '@actions';
import {checkInternetConnection} from '@network';
import {navigateToNetworkIssue} from '../ModalWindows';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<RootStackParamList, 'LogIn'>;
};

const LogInPage: React.FC<Props> = props => {
  const {
    navigation,
    route: {params},
  } = props;
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState(ANIMATED_BUTTON_STATUS.ready);

  const {isLogged, loading, error} = useShallowEqualSelector(userSelector);
  const dispatch = useDispatch();

  const logIn = useCallback(() => {
    const action = () =>
      dispatch(userActions.userLogIn({userName, password}, params?.action));
    const failCallback = () => navigateToNetworkIssue({navigation, action});

    checkInternetConnection({action, failCallback});
  }, [dispatch, userName, password, params, navigation]);

  useEffect(() => {
    if (isLogged) {
      setStatus(ANIMATED_BUTTON_STATUS.success);
      setTimeout(navigation.goBack, 1000);
    } else if (loading) {
      setStatus(ANIMATED_BUTTON_STATUS.loading);
    } else if (error) {
      setStatus(ANIMATED_BUTTON_STATUS.error);
    }
  }, [isLogged, loading, error, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={TextStyles.heading}>Ecomerce</Text>
        <Text style={TextStyles.heading}>Store</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInputStore
          label="Email Address"
          onChangeText={setUserName}
          value={userName}
        />
        <TextInputStore
          label="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AnimatedButton status={status} onPress={logIn} />
      </View>
    </View>
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
  buttonContainer: {
    height: '20%',
    justifyContent: 'flex-end',
  },
});

export {LogInPage};
