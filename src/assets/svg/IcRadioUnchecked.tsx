import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IcRadioUnchecked = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Path
      d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM20 28C15.58 28 12 24.42 12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20C28 24.42 24.42 28 20 28Z"
      fill={props.color ?? '#414E54'}
    />
  </Svg>
);
export default IcRadioUnchecked;
