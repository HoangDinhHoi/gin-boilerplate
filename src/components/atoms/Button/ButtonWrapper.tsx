import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {useTheme} from '../../../theme';
import {ratioW} from '../../../utils';

interface IProps {
  style?: ViewStyle;
  children: ReactNode;
}

const ButtonWrapper: React.FC<IProps> = ({children, style}) => {
  const {colors} = useTheme();

  const $container: ViewStyle = {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: ratioW(16),
    borderTopEndRadius: ratioW(24),
    borderColor: colors.borderColor,
    borderTopStartRadius: ratioW(24),
    backgroundColor: colors.mainBackground,
    ...style,
  };

  return <View style={$container}>{children}</View>;
};

export default React.memo(ButtonWrapper);
