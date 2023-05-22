import * as React from 'react';
import {
  View,
  Animated,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  ratioW,
  useTheme,
  TButtonAny,
  screenWidth,
} from 'react-native-gin-boilerplate';

interface IPaginationDotProps {
  dataLength: number;
  activeIndex?: number;
  widthScreen?: number;
  activeColor?: string;
  inactiveColor?: string;
  dotContainerStyle?: ViewStyle;
  onCallback?: TButtonAny<number>;
  indicatorContainerStyle?: ViewStyle;
  animationRef: React.MutableRefObject<Animated.Value>;
}

const PaginationDot: React.FC<IPaginationDotProps> = React.memo(
  ({
    dataLength,
    widthScreen = screenWidth,
    onCallback,
    animationRef,
    activeColor,
    inactiveColor,
    ...props
  }) => {
    const { colors } = useTheme();
    return (
      <View style={[styles.indicatorContainer, props.indicatorContainerStyle]}>
        {new Array(dataLength).fill({ name: '' })?.map((_, dotIndex) => {
          const width = animationRef.current.interpolate({
            inputRange: [
              widthScreen * (dotIndex - 1),
              widthScreen * dotIndex,
              widthScreen * (dotIndex + 1),
            ],
            outputRange: [1, 2, 1],
            extrapolate: 'clamp',
          });
          const color = animationRef.current.interpolate({
            inputRange: [
              widthScreen * (dotIndex - 1),
              widthScreen * dotIndex,
              widthScreen * (dotIndex + 1),
            ],
            outputRange: [
              inactiveColor ?? colors.borderColor,
              activeColor ?? colors.activeColor,
              inactiveColor ?? colors.borderColor,
            ],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              key={dotIndex}
              onPress={() => onCallback?.(dotIndex)}
            >
              <Animated.View
                style={[
                  {
                    backgroundColor: color,
                    transform: [{ scaleX: width }],
                  },
                  styles.normalDot,
                  props.dotContainerStyle,
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

export default React.memo(PaginationDot);

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalDot: {
    width: ratioW(10),
    height: ratioW(4),
    marginTop: ratioW(10),
    borderRadius: ratioW(2),
    marginHorizontal: ratioW(4),
  },
});
