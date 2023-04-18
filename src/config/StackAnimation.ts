import {
  TransitionPreset,
  TransitionPresets,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { isAndroid } from '../utils';
import { Animated, Easing } from 'react-native';
import type {
  TransitionSpec,
  StackCardStyleInterpolator,
} from '@react-navigation/stack/lib/typescript/src/types';

const { multiply } = Animated;

const forStackAndroid: StackCardStyleInterpolator = ({
  current,
  inverted,
  layouts: { screen },
}) => {
  const translateX = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
    }),
    inverted
  );

  const opacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return {
    cardStyle: {
      opacity,
      transform: [{ translateX }],
    },
  };
};

const FadeIn: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 250,
    easing: Easing.out(Easing.poly(5)),
  },
};

const FadeOut: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 150,
    easing: Easing.in(Easing.poly(5)),
  },
};

const StackAndroid: TransitionPreset = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: FadeIn,
    close: FadeOut,
  },
  cardStyleInterpolator: forStackAndroid,
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

export const StackAnimation = isAndroid
  ? StackAndroid
  : TransitionPresets.SlideFromRightIOS;
export const ModalAnimation = TransitionPresets.ModalTransition;
