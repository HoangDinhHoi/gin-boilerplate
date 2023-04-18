import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Rect,
  G,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

// @ts-ignore
const IcEmpty = (props: SvgProps) => (
  <Svg width={395} height={316} fill="none" {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={197.5}
        y1={161.031}
        x2={198.019}
        y2={246.656}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E6E7ED" stopOpacity={0.3} />
        <Stop offset={0.801} stopColor="#C4C4C4" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Path
      d="M118.641 100.07a14 14 0 0 1 12.244-13.89l114.646-14.49c8.362-1.056 15.755 5.461 15.755 13.89v94.479H118.641V100.07Z"
      fill="#DBDCE1"
    />
    <Rect
      width={68.424}
      height={99.914}
      rx={8}
      transform="matrix(.92182 -.38607 .39527 .9179 116.32 74.047)"
      fill="#EDEFF0"
    />
    <Rect
      width={56.566}
      height={14.322}
      rx={2}
      transform="matrix(.92116 -.3875 .39382 .91845 131.785 93.207)"
      fill="#fff"
    />
    <Rect
      width={56.681}
      height={8.388}
      rx={2}
      transform="matrix(.9207 -.38847 .39282 .91883 141.301 115.762)"
      fill="#fff"
    />
    <G filter="url(#a)">
      <Rect
        width={85.995}
        height={99.996}
        rx={8}
        transform="matrix(.95266 .30297 -.3152 .94867 176.831 25.557)"
        fill="#EDEFF0"
      />
      <Rect
        width={70.993}
        height={14.368}
        rx={2}
        transform="matrix(.95183 .3053 -.31284 .94937 177.093 50.352)"
        fill="#fff"
      />
      <Rect
        width={71.107}
        height={8.422}
        rx={2}
        transform="matrix(.95142 .30645 -.31167 .94971 169.492 73.555)"
        fill="#fff"
      />
    </G>
    <Path
      d="M134.907 108.263a14.002 14.002 0 0 1 13.602-10.683h114.667c9.074 0 15.751 8.501 13.601 17.317l-16.684 68.419a14.001 14.001 0 0 1-13.602 10.683H131.824c-9.074 0-15.751-8.5-13.601-17.317l16.684-68.419Z"
      fill="#E6E7ED"
    />
    <Rect x={175.465} width={4.639} height={11.617} rx={1} fill="#EDEFF0" />
    <Rect
      width={4.643}
      height={11.607}
      rx={1}
      transform="rotate(-45.048 83.24 -185.559)"
      fill="#EDEFF0"
    />
    <Rect
      width={4.643}
      height={11.607}
      rx={1}
      transform="rotate(45.048 96.769 237.302)"
      fill="#EDEFF0"
    />
    <Ellipse cx={197.5} cy={234.031} rx={186.5} ry={73} fill="url(#b)" />
    <Path
      d="M304.918 89.031c.663 8.969-2.391 29.725-19.918 41M308.922 107.031c.63 8.969-2.271 29.725-18.922 41M92.918 127.031c.663 9.188-2.39 30.45-19.918 42"
      stroke="#E6E7ED"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </Svg>
);

export default IcEmpty;
