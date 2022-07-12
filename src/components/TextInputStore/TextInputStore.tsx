import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Colors, TextStyles} from '@styles';

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

  const isActive = isFocused || props.value;

  useEffect(() => {
    marginTopLabel.value = withTiming(isActive ? -8 : 12, ANIMATION_DURATION);
  }, [isActive]);

  const animatedInputStyle = useMemo(
    () => [
      styles.label,
      labelAnimatedTransform,
      {
        color: isActive ? Colors.text.primary : Colors.text.secondary,
        zIndex: isActive ? 1 : 0,
      },
    ],
    [labelAnimatedTransform, isActive, props.value],
  );
  const propsStyles = useMemo(
    () => [styles.inputStyles, props.style],
    [props.style],
  );

  return (
    <View>
      <Animated.Text style={animatedInputStyle}>{props.label}</Animated.Text>
      <TextInput
        {...props}
        maxLength={30}
        onFocus={onFocus}
        onBlur={onBlur}
        focusable
        style={propsStyles}
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
