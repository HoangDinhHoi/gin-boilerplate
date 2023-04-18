import React, {memo, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native';

interface IProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const RowContainer: React.FC<IProps> = ({children, style}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      {children}
    </View>
  );
};

export default memo(RowContainer);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
