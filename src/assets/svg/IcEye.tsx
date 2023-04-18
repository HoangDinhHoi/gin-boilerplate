import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IcEye = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 9C10.358 9 9 10.359 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
      fill={'#616161' ?? props.color}
    />
    <Path
      d="M11.9998 5C4.3668 5 2.0728 11.617 2.0518 11.684L1.9458 12L2.0508 12.316C2.0728 12.383 4.3668 19 11.9998 19C19.6328 19 21.9268 12.383 21.9478 12.316L22.0538 12L21.9488 11.684C21.9268 11.617 19.6328 5 11.9998 5ZM11.9998 17C6.6488 17 4.5758 13.154 4.0738 12C4.5778 10.842 6.6518 7 11.9998 7C17.3508 7 19.4238 10.846 19.9258 12C19.4218 13.158 17.3478 17 11.9998 17Z"
      fill={'#616161' ?? props.color}
    />
  </Svg>
);
export default IcEye;
