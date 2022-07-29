/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

enableLatestRenderer();

AppRegistry.registerComponent(appName, () => App);
