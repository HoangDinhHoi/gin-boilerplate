import React from 'react';
import Text from '../Text/Text';
import {
  View,
  ColorValue,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import type { TButtonVoid } from '../../../definitions';
import { useTheme } from '../../../theme';
import { ratioW, TRobotoStyle } from '../../../utils';
import {
  IcCheck,
  IcNonCheck,
  IcRadioChecked,
  IcRadioUnchecked,
  IcTick,
} from '../../../assets/svg';

export type TSelectionButton = 'radio' | 'multi_selection' | 'check';

interface ISelectionButton {
  title: string;
  isCheck: boolean;
  disabled?: boolean;
  iconColor?: ColorValue;
  isBorder?: boolean;
  onPress?: TButtonVoid;
  titleStyle?: TextStyle;
  titleContainer?: ViewStyle;
  containerStyle?: ViewStyle;
  numberOfLines?: number;
  type: TSelectionButton;
}

const SelectionButton: React.FC<ISelectionButton> = (props) => {
  const { colors } = useTheme();
  const {
    type,
    title,
    isCheck,
    onPress,
    iconColor,
    titleStyle,
    numberOfLines,
    containerStyle,
    titleContainer,
    isBorder = true,
    disabled = false,
  } = props;

  const $container: ViewStyle = {
    padding: ratioW(8),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: isBorder ? 1 : 0,
    borderBottomColor: colors.borderColor,
  };
  const $title = StyleSheet.flatten([styles.title, titleStyle]);
  const $titleContainer: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    ...titleContainer,
  };

  const getIcon = () => {
    switch (type) {
      case 'check':
        if (isCheck) {
          return <IcTick style={styles.tickIcon} color={iconColor} />;
        } else {
          return <IcTick color="transparent" style={styles.tickIcon} />;
        }
      case 'multi_selection':
        if (isCheck) {
          return <IcCheck color={iconColor} />;
        } else {
          return <IcNonCheck color={iconColor ?? colors.borderColor} />;
        }
      case 'radio':
        if (isCheck) {
          return <IcRadioChecked color={iconColor} />;
        } else {
          return <IcRadioUnchecked color={iconColor ?? colors.borderColor} />;
        }
      default:
        return <React.Fragment />;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      onPress={onPress}
      style={[$container, containerStyle]}
    >
      {getIcon()}
      <View style={$titleContainer}>
        <Text style={$title} numberOfLines={numberOfLines ?? 2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SelectionButton);

const styles = StyleSheet.create({
  title: {
    letterSpacing: 0.5,
    ...TRobotoStyle.H1624Regular,
  },
  tickIcon: { margin: ratioW(8) },
});
