import React, {useEffect, useRef} from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';
import {mAnimated, ratioW} from '../../../utils';
import {useTheme} from '../../../theme';

interface IRadioButtonProps {
  isActive: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({isActive}) => {
  const {colors} = useTheme();
  const animatedRef = useRef(new Animated.Value(isActive ? 1 : 0));

  const $active: StyleProp<ViewStyle> = {
    width: ratioW(18),
    height: ratioW(18),
    borderRadius: ratioW(9),
    backgroundColor: colors.primaryColor,
    display: isActive ? 'flex' : 'none',
  };

  const $container: StyleProp<ViewStyle> = {
    borderWidth: 1,
    width: ratioW(24),
    height: ratioW(24),
    alignItems: 'center',
    borderRadius: ratioW(12),
    justifyContent: 'center',
    borderColor: colors.separatorBackground,
  };

  useEffect(() => {
    if (isActive) {
      mAnimated.changeAnimated({value: animatedRef.current, toValue: 1});
    } else {
      mAnimated.changeAnimated({value: animatedRef.current, toValue: 0});
    }
  }, [isActive]);

  return (
    <View style={$container}>
      <Animated.View
        style={[$active, {transform: [{scale: animatedRef.current}]}]}
      />
    </View>
  );
};

export default React.memo(RadioButton);
