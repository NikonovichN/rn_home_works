import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RouteProp} from '@react-navigation/native';

import {Loading, PrimaryButton, TextInputStore} from '@components';
import {Colors, TextStyles} from '@styles';
import {RootStackParamList} from '@navigation/types';
import {useShallowEqualSelector} from '@hooks';
import {userSelector} from '@selectors';
import {userActions} from '@actions';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<RootStackParamList, 'LogIn'>;
};

const LogInPage: React.FC<Props> = props => {
  const {
    navigation,
    route: {
      params: {action},
    },
  } = props;
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {isLogged, loading} = useShallowEqualSelector(userSelector);
  const dispatch = useDispatch();

  const logIn = useCallback(() => {
    dispatch(userActions.userLogIn({userName, password}, action));
  }, [dispatch, userName, password, action]);

  useEffect(() => {
    if (isLogged) {
      navigation.goBack();
    }
  }, [isLogged, navigation]);

  return (
    <>
      {loading ? (
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
          <PrimaryButton onPress={logIn} content="sign in" />
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

export {LogInPage};
