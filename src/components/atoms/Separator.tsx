import React from 'react';
import { ColorValue, View } from 'react-native';

interface ISeparatorProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: ColorValue;
}

const Separator: React.FC<ISeparatorProps> = ({
  height = 5,
  width = 5,
  backgroundColor = 'transparent',
}) => {
  return <View style={{ height, width, backgroundColor }} />;
};

export default React.memo(Separator);
