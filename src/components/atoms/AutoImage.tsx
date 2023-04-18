import React from 'react';
import { NoImage } from '../../assets/photos';
import FastImage, { FastImageProps } from 'react-native-fast-image';

interface IAutoImageProps extends FastImageProps {
  uri: string;
}

const AutoImage: React.FC<Partial<IAutoImageProps>> = (props) => {
  return (
    <FastImage source={props.uri ? { uri: props.uri } : NoImage} {...props} />
  );
};

export default React.memo(AutoImage);
