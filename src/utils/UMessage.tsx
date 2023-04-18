import React from 'react';
import { StyleSheet } from 'react-native';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import { getStatusBarHeight, ratioW } from './UDimension';
import { TRobotoStyle } from './UTextStyle';
import { colors } from '../constants/colors';

const dTime = 5000;

const showSuccessMessage = (message: string, description?: string) => {
  Toast.show({
    type: 'success',
    text1: message?.trim(),
    text2: description?.trim(),
    position: 'top',
    visibilityTime: dTime,
  });
};

const showFailMessage = (message: string, description?: string) => {
  Toast.show({
    type: 'error',
    text1: message?.trim(),
    text2: description?.trim(),
    position: 'top',
    visibilityTime: dTime,
  });
};

const showDefaultMessage = (message: string, description?: string) => {
  Toast.show({
    type: 'info',
    text1: message?.trim(),
    text2: description?.trim(),
    position: 'top',
    visibilityTime: dTime,
  });
};

const styles = StyleSheet.create({
  toastText1: {
    ...TRobotoStyle.H1420Regular,
    color: colors.light.mainBackground,
    textAlign: 'center',
  },
  toastText2: {
    ...TRobotoStyle.H1420Regular,
    color: colors.light.mainBackground,
    textAlign: 'center',
  },
  toastSuccess: {
    borderLeftWidth: 0,
    textAlign: 'center',
    borderRadius: ratioW(8),
    marginTop: getStatusBarHeight(true),
    backgroundColor: 'rgba(75, 181, 67, 1)',
  },
  toastError: {
    borderLeftWidth: 0,
    textAlign: 'center',
    borderRadius: ratioW(8),
    marginTop: getStatusBarHeight(true),
    backgroundColor: 'rgba(245, 69, 92, 1)',
  },
});

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ ...styles.toastSuccess }}
      text1Style={{ ...styles.toastText1 }}
      text2Style={{ ...styles.toastText2 }}
      text1NumberOfLines={5}
      text2NumberOfLines={5}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={styles.toastError}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      text1NumberOfLines={5}
      text2NumberOfLines={5}
    />
  ),
};

export default {
  toastConfig,
  showSuccessMessage,
  showFailMessage,
  showDefaultMessage,
};
