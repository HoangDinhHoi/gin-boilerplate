import React, {memo, ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface IProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FlexView: React.FC<IProps> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default memo(FlexView);

const styles = StyleSheet.create({
  container: {flex: 1},
});
