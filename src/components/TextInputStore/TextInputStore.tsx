import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {Colors, TextStyles} from '@styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const ANIMATION_DURATION = {
  duration: 300,
};

type Props = {
  label: string;
};

const TextInputStore: React.FC<TextInputProps & Props> = props => {
  const [isFocused, setFocus] = useState(false);

  const marginTopLabel = useSharedValue(12);

  const labelAnimatedTransform = useAnimatedStyle(() => ({
    marginTop: marginTopLabel.value,
  }));

  const onFocus = useCallback(() => setFocus(true), [setFocus]);
  const onBlur = useCallback(() => setFocus(false), [setFocus]);

  useEffect(() => {
    marginTopLabel.value = withTiming(isFocused ? -8 : 12, ANIMATION_DURATION);
  }, [isFocused]);

  return (
    <View>
      <Animated.Text
        style={[
          styles.label,
          labelAnimatedTransform,
          {
            color: isFocused ? Colors.text.primary : Colors.text.secondary,
            zIndex: isFocused ? 1 : 0,
          },
        ]}>
        {props.label}
      </Animated.Text>
      <TextInput
        maxLength={30}
        onFocus={onFocus}
        onBlur={onBlur}
        focusable
        {...props}
        style={[styles.inputStyles, props.style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
    marginLeft: 14,
    ...TextStyles.small,
  },
  inputStyles: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export {TextInputStore};
