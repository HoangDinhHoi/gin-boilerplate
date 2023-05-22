import type React from 'react';
import type { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { ModalProps } from 'react-native-modal';
import type { IButtonProps, TButton } from '../../atoms';

interface IDefaultFunction {
  close: () => void;
}

export interface IBottomSheetProps {
  element: React.ReactElement;
  containerStyles?: ViewStyle;
  isShowCrossBar?: boolean;
  modalProps?: Partial<ModalProps>;
  statusbarColor?: ColorValue;
}
export interface IBottomSheetRef extends IDefaultFunction {
  open: (props: IBottomSheetProps) => void;
}

export interface IAlertModalButtons {
  onLeftAction(): void;
  onRightAction(): void;
}

export interface IAlertModalProps {
  title: string;
  desc: string;
  leftButtonTitle: string;
  rightButtonTitle: string;
  icon?: JSX.Element;
  buttons?: Partial<IAlertModalButtons>;
  leftButtonStyle?: StyleProp<ViewStyle>;
  rightButtonStyle?: StyleProp<ViewStyle>;
  leftButtonType?: TButton;
  rightButtonType?: TButton;
  containerStyle?: StyleProp<ViewStyle>;
  leftButtonProps?: Partial<IButtonProps>;
  rightButtonProps?: Partial<IButtonProps>;
  modalProps?: Partial<ModalProps>;
  titleStyle?: StyleProp<TextStyle>;
  descStyle?: StyleProp<TextStyle>;
  statusbarColor?: ColorValue;
}

export interface IAlertModalRef extends IDefaultFunction {
  open: (props: Partial<IAlertModalProps>) => void;
}

export interface IGlobalModalProps {
  content: JSX.Element;
  modalProps?: Partial<ModalProps>;
  containerStyle?: StyleProp<ViewStyle>;
  statusbarColor?: ColorValue;
}
export interface IGlobalModalRef extends IDefaultFunction {
  open: (props: IGlobalModalProps) => void;
}
