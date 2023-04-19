import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { isIphoneX } from './UDevice';

const { width } = Dimensions.get('screen');

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const dSizeWidth = 412;

export const ratioW = (_width: number) => {
  return (_width * width) / dSizeWidth;
};

export const ifIphoneX = (iphoneXStyle: number, regularStyle: number) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

export const getStatusBarHeight = (safe: boolean) => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 40),
    android: StatusBar.currentHeight,
  });
};

export const fontSizeText = (size: number) => {
  const scaleFont = width / dSizeWidth;
  const newSize = size * scaleFont;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

export const DEFAULT_ICON_SIZE = {
  width: ratioW(20),
  height: ratioW(20),
};
