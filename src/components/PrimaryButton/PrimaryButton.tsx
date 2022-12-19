import React, {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonStyles, Opacity, TextStyles} from '@styles';

type Props = {
  width?: number;
  content: string;
  toUppercase?: boolean;
  backgroundColor?: string;
  onPress(): void;
};

const PrimaryButton: React.FC<Props> = props => {
  const {width, content, toUppercase = true, onPress, backgroundColor} = props;
  const styleContainer = useMemo(
    () => [
      ButtonStyles.primary,
      {width},
      !!backgroundColor && {backgroundColor},
    ],
    [width, backgroundColor],
  );

  return (
    <TouchableOpacity
      style={styleContainer}
      activeOpacity={Opacity.regularButton}
      onPress={onPress}
      testID="test-primary-button"
    >
      <Text style={TextStyles.buttonRegular}>
        {toUppercase ? content.toUpperCase() : content}
      </Text>
    </TouchableOpacity>
  );
};

export {PrimaryButton};
