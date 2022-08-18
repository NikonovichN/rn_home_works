import React from 'react';
import {StyleSheet, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {TextInputStore} from '@components';

storiesOf('Text Input', module)
  .addDecorator(getStory => <View style={styles.container}>{getStory()}</View>)
  .add('example', () => <TextInputStore label="Example of text input" />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
});
