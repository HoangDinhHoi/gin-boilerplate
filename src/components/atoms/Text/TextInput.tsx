import Text from './Text';
import styles from './styles';
import type { ITextInputProps } from './types';
import React, { useCallback, useState } from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput as RNTextInput,
} from 'react-native';
import { useTheme } from '../../../theme';
import { ratioW, TRobotoStyle } from '../../../utils';
import { IcEye, IcEyeOff } from '../../../assets/svg';

const TextInput = (props: ITextInputProps) => {
  const {
    textInputStyles,
    label,
    isPassword,
    leftIcon,
    rightIcon,
    isError,
    errorText,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isEntrySecure, setIsEntrySecure] = useState(isPassword);
  const { colors } = useTheme();

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    props?.onFocus?.(e);
  };

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    props?.onBlur?.(e);
  };

  const onTogglePassword = useCallback(() => {
    setIsEntrySecure(!isEntrySecure);
  }, [isEntrySecure]);

  const getBorderColor = () => {
    if (isError) {
      return colors.dangerColor;
    } else {
      if (isFocused) {
        return colors.inputActiveBorder;
      } else {
        return colors.inputInactiveBorder;
      }
    }
  };

  const $containerStyles: ViewStyle = {
    width: '100%',
    padding: ratioW(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ratioW(4),
    borderColor: getBorderColor(),
    borderWidth: isFocused ? 2 : 1.5,
  };

  const $labelWrapper: ViewStyle = {
    top: ratioW(-8),
    left: ratioW(10),
    position: 'absolute',
    alignSelf: 'baseline',
    paddingHorizontal: ratioW(6),
    display: isFocused || props.value ? 'flex' : 'none',
    backgroundColor: colors.mainBackground,
  };

  const getColor = () => {
    if (props.value && !isFocused) {
      return colors.inputHasValue;
    } else {
      if (isFocused) {
        return colors.inputActiveBorder;
      } else {
        return colors.inputInactiveBorder;
      }
    }
  };

  const $label = {
    color: isError ? colors.dangerColor : getColor(),
    opacity: props.editable === false ? 0.5 : 1,
  };

  const $eye: StyleProp<ViewStyle> = {
    display: isEntrySecure ? 'flex' : 'none',
  };

  const $eyeOff: StyleProp<ViewStyle> = {
    display: isEntrySecure ? 'none' : 'flex',
  };

  const $buttonPassword: StyleProp<ViewStyle> = {
    display: isPassword ? 'flex' : 'none',
  };

  const $errorText: TextStyle = {
    letterSpacing: 0.4,
    color: colors.dangerColor,
    ...TRobotoStyle.H1216Regular,
    display: isError ? 'flex' : 'none',
  };

  const $input: TextStyle = {
    ...styles.input,
    ...textInputStyles,
    color: colors.defaultText,
    opacity: props.editable === false ? 0.5 : 1,
  };

  const selectionColor = isError
    ? colors.dangerColor
    : colors.inputActiveBorder;
  const placeholder = label && isFocused ? props.placeholder : label;

  return (
    <View style={props.containerStyles}>
      <View style={[$containerStyles, props.contentStyles]}>
        {leftIcon}
        {Boolean(label) && (
          <View style={$labelWrapper}>
            <Text style={$label}>{label}</Text>
          </View>
        )}
        <RNTextInput
          style={$input}
          placeholder={placeholder}
          selectionColor={selectionColor}
          placeholderTextColor={colors.menuText}
          secureTextEntry={isEntrySecure}
          allowFontScaling={false}
          maxLength={255}
          blurOnSubmit
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {rightIcon}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onTogglePassword}
          style={$buttonPassword}
        >
          <IcEye style={$eye} />
          <IcEyeOff style={$eyeOff} />
        </TouchableOpacity>
      </View>
      <Text style={$errorText}>{errorText}</Text>
    </View>
  );
};

export default React.memo(TextInput);
