import React from 'react';
import {StyleSheet, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {PrimaryButton} from '@components';

storiesOf('Primary Button', module)
  .addDecorator(getStory => <View style={styles.container}>{getStory()}</View>)
  .add('example', () => (
    <PrimaryButton onPress={action('clicked-text')} content="Simple text" />
  ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
});
