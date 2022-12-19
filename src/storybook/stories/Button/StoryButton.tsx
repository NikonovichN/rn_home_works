import React from 'react';
import {TouchableHighlight} from 'react-native';

type Props = {
  onPress(): void;
  children: React.ReactNode;
};

export const StoryButton: React.FC<Props> = ({onPress, children}) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
};
