import type { ColorValue } from 'react-native';

export type TMode = 'small' | 'full' | 'overlay';

export interface ILoadingProps {
  mode: TMode;
  backgroundColor: ColorValue;
  title: string;
  colorTitle: ColorValue;
  colorSpin: ColorValue;
}

export interface ILoadingRef {
  open: (props: ILoadingProps) => void;
  close: () => void;
}
