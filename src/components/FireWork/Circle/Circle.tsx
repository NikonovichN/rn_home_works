import React, {useEffect, useMemo} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

import {generateRandomColor} from '@utils';
import {ANIMATION_DURATION} from '../constants';

type Props = {
  radius: number;
  corner: number;
};

const Circle: React.FC<Props> = props => {
  const {radius, corner} = props;

  const generatedColor = generateRandomColor();
  const backgroundColor: ViewStyle = {backgroundColor: generatedColor};

  const transformX = useSharedValue(0);
  const transformY = useSharedValue(0);

  const transformStyles = useAnimatedStyle(() => ({
    transform: [{translateX: transformX.value}, {translateY: transformY.value}],
  }));

  useEffect(() => {
    transformX.value = withRepeat(
      withTiming(radius * Math.sin(corner), ANIMATION_DURATION),
      -1,
      false,
    );
    transformY.value = withRepeat(
      withTiming(radius * Math.cos(corner), ANIMATION_DURATION),
      -1,
      false,
    );
  }, []);

  const styleCircle = useMemo(
    () => [styles.container, backgroundColor, transformStyles],
    [backgroundColor, transformStyles],
  );

  return <Animated.View style={styleCircle} />;
};

const styles = StyleSheet.create({
  container: {
    width: 12,
    height: 12,
    borderRadius: 12,
    position: 'absolute',
  },
});

export {Circle};
