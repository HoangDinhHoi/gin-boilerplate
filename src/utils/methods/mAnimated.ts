import {Animated} from 'react-native';

interface IChangeAnimated {
  value: Animated.Value | Animated.ValueXY;
  toValue:
    | number
    | Animated.Value
    | Animated.ValueXY
    | {
        x: number;
        y: number;
      }
    | Animated.AnimatedInterpolation<any>;
  duration?: number;
  useNativeDriver?: boolean;
}

const changeAnimated = (payload: IChangeAnimated) => {
  const {value, toValue, duration, useNativeDriver} = payload;
  Animated.timing(value, {
    toValue: toValue,
    duration: duration ?? 250,
    useNativeDriver: useNativeDriver ?? false,
  }).start();
};

export default {
  changeAnimated,
};
