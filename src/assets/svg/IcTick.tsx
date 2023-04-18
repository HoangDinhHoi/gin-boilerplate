import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IcTick = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.79508 15.8749L4.62508 11.7049L3.20508 13.1149L8.79508 18.7049L20.7951 6.70492L19.3851 5.29492L8.79508 15.8749Z"
      fill={props.color ?? '#2CC2D3'}
    />
  </Svg>
);
export default IcTick;
