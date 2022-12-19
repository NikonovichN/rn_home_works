import Analytics from 'appcenter-analytics';

import {ScreenAnalyticsOptions} from './types';

export async function trackScreen(options: ScreenAnalyticsOptions) {
  await Analytics.trackEvent('screen', options);
}
