import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';
const IcCheck = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    <Rect
      x={11}
      y={11}
      width={18}
      height={18}
      rx={2}
      fill={props.color ?? '#1ABFD1'}
    />
    <Path
      d="M18 24.4L14 20.4L15.4 19L18 21.6L24.6 15L26 16.4L18 24.4Z"
      fill="white"
    />
  </Svg>
);
export default IcCheck;
