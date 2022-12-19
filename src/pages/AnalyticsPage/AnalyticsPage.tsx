import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import AnalyticsTracker from 'appcenter-analytics';
import Crashes from 'appcenter-crashes';

import {PrimaryButton} from '@components';
import {trackScreen} from '@analytics';

export const AnalyticsPage: React.FC = () => {
  const onCrashApp = useCallback(() => {
    Crashes.generateTestCrash();
  }, []);
  const onTestEvent = useCallback(async () => {
    await AnalyticsTracker.trackEvent('Custom event');
  }, []);
  const checkEnabledAnalytics = useCallback(async () => {
    const enabled = await AnalyticsTracker.isEnabled();
    console.log('Analytics is enabled:', enabled);
  }, []);
  const onTrackScreen = useCallback(async () => {
    await trackScreen({name: 'Test Screen'});
  }, []);

  return (
    <View style={styles.container}>
      <PrimaryButton onPress={onCrashApp} content="Crash App" />
      <View style={styles.divider} />
      <PrimaryButton onPress={onTestEvent} content="Test event" />
      <View style={styles.divider} />
      <PrimaryButton
        onPress={checkEnabledAnalytics}
        content="AnalyticsPage enabled"
      />
      <View style={styles.divider} />
      <PrimaryButton onPress={onTrackScreen} content="Test Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  divider: {
    height: 15,
  },
});
