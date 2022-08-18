import React from 'react';
import {Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import {StoryButton} from './StoryButton';
import {CenterView} from '@components';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <StoryButton onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </StoryButton>
  ))
  .add('with some emoji', () => (
    <StoryButton onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </StoryButton>
  ));

