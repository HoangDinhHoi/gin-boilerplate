import { isAndroid } from '../utils';
import React, { ComponentType } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

const withKeyboardAvoidingView = <T extends object>(
  Component: ComponentType<T>,
  isHideOffset?: boolean
) => {
  return (props: T) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    return (
      <KeyboardAvoidingView
        style={styles.flex}
        keyboardVerticalOffset={isHideOffset ? 0 : keyboardVerticalOffset}
        behavior={isAndroid ? 'height' : 'padding'}
      >
        <Component {...props} />
      </KeyboardAvoidingView>
    );
  };
};

export default withKeyboardAvoidingView;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
