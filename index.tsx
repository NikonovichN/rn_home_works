/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
import AnalyticsTracker from 'appcenter-analytics';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

enableLatestRenderer();
AnalyticsTracker.setEnabled(true);

AppRegistry.registerComponent(appName, () => App);
