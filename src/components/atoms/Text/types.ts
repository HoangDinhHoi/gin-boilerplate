import type { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface ITextInputProps extends TextInputProps {
  containerStyles?: ViewStyle;
  contentStyles?: ViewStyle;
  textInputStyles?: TextStyle;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  label?: string;
  isPassword?: boolean;
  isError?: boolean;
  errorText?: string;
}
