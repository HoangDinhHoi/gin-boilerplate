import * as React from 'react';
import {View, ViewStyle} from 'react-native';

interface IViewCondition {
  isVisible: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
}
const ViewCondition: React.FC<IViewCondition> = ({isVisible, ...props}) => {
  const style: ViewStyle = {
    ...props.style,
    display: isVisible ? 'flex' : 'none',
  };
  return (
    <View {...props} style={style}>
      {props.children}
    </View>
  );
};

export default ViewCondition;
