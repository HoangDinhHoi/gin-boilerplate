import * as React from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';
const IcNonCheck = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Rect
      x={12}
      y={12}
      width={16}
      height={16}
      rx={1}
      stroke={props.color ?? '#414E54'}
      strokeWidth={2}
    />
  </Svg>
);
export default IcNonCheck;
