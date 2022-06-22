import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export interface HeaderProps {
  title: string;
  navigation: NativeStackNavigationProp<ParamListBase>;
}


