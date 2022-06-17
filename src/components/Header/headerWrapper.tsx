import React from 'react';
import {Text, View} from 'react-native';

import {ParamListBase} from '@react-navigation/routers/lib/typescript/src/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import Header from './Header';

interface Params {
  navigation: NativeStackNavigationProp<ParamListBase>;
  title: string;
  isMainPage?: boolean;
}

const headerWrapper: React.FC<Params> = params => (
  <Header
    navigation={params.navigation}
    title={params.title}
    isMainPage={params.isMainPage ?? false}
  />
);

export default headerWrapper;
