import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
      fill={props.color ?? '#4D4849'}
    />
  </Svg>
);
export default IcArrowLeft;
