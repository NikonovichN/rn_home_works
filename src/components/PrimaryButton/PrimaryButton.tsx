import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonStyles, Opacity, TextStyles} from '@styles';

type Props = {
  width?: number;
  content: string;
  toUppercase?: boolean;
  onPress(): void;
};

const PrimaryButton: React.FC<Props> = props => {
  const {width, content, toUppercase = true, onPress} = props;

  return (
    <TouchableOpacity
      style={[ButtonStyles.primary, {width}]}
      activeOpacity={Opacity.regularButton}
      onPress={onPress}>
      <Text style={TextStyles.buttonRegular}>
        {toUppercase ? content.toUpperCase() : content}
      </Text>
    </TouchableOpacity>
  );
};

export {PrimaryButton};
