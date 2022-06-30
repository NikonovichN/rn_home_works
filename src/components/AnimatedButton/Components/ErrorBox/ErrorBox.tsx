import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  Layout,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {DURATION_CONFIG, LAYOUT_TIME_ANIMATION} from '../../constants';

import {TextStyles, Colors} from '@styles';

const INVISIBLE_TIME_DOT = 200;
const DRAWING_TIME_DOT = 400;
const BOX_TIME_ANIMATION = 50;

const ErrorBox: React.FC = () => {
  const [showText, setShowText] = useState(false);

  const leftLine = useSharedValue(0);
  const rightLine = useSharedValue(0);
  const offsetBoxX = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const containerPadding = useSharedValue(0);

  const animatedLeftLine = useAnimatedStyle(() => ({
    height: leftLine.value,
  }));
  const animatedRightLine = useAnimatedStyle(() => ({
    height: rightLine.value,
  }));
  const animatedBoxStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offsetBoxX.value}],
  }));
  const animatedTextOpacity = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const animationCrossBoxCallBack = useCallback(
    (isFinished: boolean | undefined) => {
      if (isFinished) {
        setShowText(true);
      }
    },
    [setShowText],
  );

  const runBoxShaking = useCallback(
    (isFinished: boolean | undefined) => {
      'worklet';
      if (isFinished) {
        offsetBoxX.value = withSequence(
          withTiming(-5, {duration: BOX_TIME_ANIMATION}),
          withRepeat(
            withTiming(5, {duration: BOX_TIME_ANIMATION, easing: Easing.sin}),
            4,
            true,
          ),
          withTiming(0, {duration: BOX_TIME_ANIMATION}, isEnd =>
            runOnJS(animationCrossBoxCallBack)(isEnd),
          ),
        );
      }
    },
    [offsetBoxX, animationCrossBoxCallBack],
  );

  useEffect(() => {
    leftLine.value = withDelay(
      INVISIBLE_TIME_DOT,
      withTiming(32, {duration: DRAWING_TIME_DOT}),
    );

    rightLine.value = withDelay(
      INVISIBLE_TIME_DOT * 2,
      withTiming(32, {duration: DRAWING_TIME_DOT}, runBoxShaking),
    );
  }, [leftLine, rightLine, runBoxShaking]);

  useEffect(() => {
    if (showText) {
      textOpacity.value = withDelay(
        LAYOUT_TIME_ANIMATION,
        withTiming(1, DURATION_CONFIG),
      );
    }
  }, [showText, textOpacity, containerPadding]);

  return (
    <>
      {showText ? (
        <Animated.Text
          style={[styles.textStyles, animatedTextOpacity]}
          exiting={FadeOut.duration(LAYOUT_TIME_ANIMATION / 2)}>
          OOOPS! Try again!
        </Animated.Text>
      ) : null}
      <Animated.View
        style={[styles.crossContainer, animatedBoxStyle]}
        layout={Layout.duration(LAYOUT_TIME_ANIMATION)}
        entering={FadeIn.duration(LAYOUT_TIME_ANIMATION)}
        exiting={FadeOut.duration(LAYOUT_TIME_ANIMATION / 2)}>
        <Animated.View style={[styles.dotLeft, animatedLeftLine]} />
        <Animated.View style={[styles.dotRight, animatedRightLine]} />
      </Animated.View>
    </>
  );
};

const dotStyles = StyleSheet.create({
  dots: {
    width: 4,
    height: 0,
    borderRadius: 3,
    backgroundColor: Colors.white,
    position: 'absolute',
  },
});

const styles = StyleSheet.create({
  crossContainer: {
    width: 40,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttons.accentError,
  },
  textStyles: {
    paddingHorizontal: 40,
    ...TextStyles.error,
  },
  dotLeft: {
    ...dotStyles.dots,
    transform: [{rotate: '-45deg'}],
  },
  dotRight: {
    ...dotStyles.dots,
    transform: [{rotate: '45deg'}],
  },
});

export {ErrorBox};
