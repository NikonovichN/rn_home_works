import React, {useEffect, useMemo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DotsBox} from './Components/DotsBox/DotsBox';
import {ErrorBox} from './Components/ErrorBox/ErrorBox';
import {
  ANIMATED_BUTTON_STATUS,
  DURATION_CONFIG,
  LAYOUT_TIME_ANIMATION,
} from './constants';

import {TextStyles, Colors, Opacity} from '@styles';
import {noop} from 'lodash';

type Props = {
  status: ANIMATED_BUTTON_STATUS;
  onPress(): void;
};

const AnimatedButton: React.FC<Props> = props => {
  const [currentStatus, setStatus] = useState(ANIMATED_BUTTON_STATUS.ready);
  const isReady = currentStatus === ANIMATED_BUTTON_STATUS.ready;
  const colorContainer = useSharedValue(Colors.buttons.primary);

  const animatedTextOpacity = useAnimatedStyle(() => ({
    backgroundColor: colorContainer.value,
  }));

  useEffect(() => {
    if (props.status === ANIMATED_BUTTON_STATUS.loading) {
      setStatus(props.status);
      colorContainer.value = withTiming(
        Colors.buttons.cornflowerBlue,
        DURATION_CONFIG,
      );
    } else if (props.status === ANIMATED_BUTTON_STATUS.error) {
      setStatus(props.status);
      colorContainer.value = Colors.buttons.errorBackGround;
      setTimeout(() => {
        setStatus(ANIMATED_BUTTON_STATUS.ready);
        colorContainer.value = withTiming(
          Colors.buttons.primary,
          DURATION_CONFIG,
        );
      }, 3000);
    } else if (props.status === ANIMATED_BUTTON_STATUS.success) {
      setStatus(props.status);
      colorContainer.value = withTiming(
        Colors.buttons.success,
        DURATION_CONFIG,
      );
    }
  }, [props.status, colorContainer]);

  const contentStyles = useMemo(
    () => [styles.contentContainer, animatedTextOpacity],
    [animatedTextOpacity],
  );

  return (
    <TouchableOpacity
      activeOpacity={isReady ? Opacity.regularButton : 1}
      onPress={isReady ? props.onPress : noop}
      style={styles.touchableContainer}>
      <Animated.View
        style={contentStyles}
        layout={Layout.duration(LAYOUT_TIME_ANIMATION)}>
        <ActualBox status={currentStatus} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const ActualBox: React.FC<{status: ANIMATED_BUTTON_STATUS}> = props => (
  <>
    {props.status === ANIMATED_BUTTON_STATUS.ready && (
      <Text style={styles.textStyle}>SIGN IN</Text>
    )}
    {props.status === ANIMATED_BUTTON_STATUS.loading && <DotsBox />}
    {props.status === ANIMATED_BUTTON_STATUS.error && <ErrorBox />}
    {props.status === ANIMATED_BUTTON_STATUS.success && (
      <Text style={styles.textStyle}>DONE</Text>
    )}
  </>
);

const styles = StyleSheet.create({
  touchableContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  contentContainer: {
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttons.primary,
    flexDirection: 'row',
  },
  textStyle: {
    width: '100%',
    textAlign: 'center',
    ...TextStyles.buttonRegular,
  },
});

export {AnimatedButton};
