import React, {useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {Colors} from '@styles';

type Props = {
  delay: number;
};

const Dot: React.FC<Props> = props => {
  const {delay} = props;
  const offsetY = useSharedValue(0);
  const scaleY = useSharedValue(0);

  const animatedBoxStyle = useAnimatedStyle(() => ({
    transform: [{translateY: offsetY.value}],
  }));
  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{scaleY: scaleY.value}],
  }));

  useEffect(() => {
    offsetY.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(0, {duration: 300}),
          withTiming(10, {duration: 500}),
          withTiming(0, {duration: 300}),
        ),
        -1,
        true,
      ),
    );

    scaleY.value = withDelay(
      delay,
      withRepeat(withTiming(1, {duration: 1100}), -1, true),
    );
  }, [offsetY, delay, scaleY]);

  const circleStyle = useMemo(
    () => [styles.circle, animatedCircleStyle],
    [animatedCircleStyle],
  );

  return (
    <Animated.View style={animatedBoxStyle}>
      <Animated.View style={circleStyle} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 5,
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
});

export {Dot};
