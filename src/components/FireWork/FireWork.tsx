import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Animated, {
  FadeOut,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';

import {Circle} from './Circle/Circle';
import {ANIMATION_DURATION} from './constants';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

function choosePosition() {
  return {
    top: (WINDOW_HEIGHT / 2) * Math.random(),
    left: (WINDOW_WIDTH / 2) * Math.random(),
  };
}

const DIAMETER_FIRE_WORK = 200;
const CORNER_STEP = 20;

type Props = {
  delay: number;
};

const FireWork: React.FC<Props> = props => {
  const [position, setPosition] = useState(choosePosition());
  const opacityAnimation = useSharedValue(0);

  const opacityAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacityAnimation.value,
  }));

  useEffect(() => {
    opacityAnimation.value = withDelay(
      props.delay,
      withRepeat(withTiming(1, {duration: 500}), -1, true),
    );
    const intervalPosition = setInterval(
      () => setPosition(choosePosition()),
      ANIMATION_DURATION.duration,
    );

    return () => clearInterval(intervalPosition);
  }, [props.delay]);

  const containerStyle = useMemo(
    () => [styles.container, position, opacityAnimatedStyle],
    [position, opacityAnimatedStyle],
  );

  return (
    <Animated.View style={containerStyle}>
      {Array.from({length: 11}).map((_, index) => (
        <Circle
          key={`key_${index * CORNER_STEP}`}
          radius={DIAMETER_FIRE_WORK / 2}
          corner={index * CORNER_STEP}
        />
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DIAMETER_FIRE_WORK,
    height: DIAMETER_FIRE_WORK,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export {FireWork};
