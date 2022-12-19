import React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {SearchBar} from '@components';

storiesOf('Search bar', module)
  .addDecorator(getStory => <View style={styles.container}>{getStory()}</View>)
  .add('example', () => <SearchBar />);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 40,
    },
  });
  