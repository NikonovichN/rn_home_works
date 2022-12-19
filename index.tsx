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
import config from 'react-native-ultimate-config';

import {BASED_ON_ENV} from '@constants';

import {StorybookUIRoot} from './src/storybook';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

enableLatestRenderer();
AnalyticsTracker.setEnabled(true);

AppRegistry.registerComponent(appName, () =>
  BASED_ON_ENV[config.ENV].launchStoryBook ? StorybookUIRoot : App,
);
