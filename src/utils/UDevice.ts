import DeviceInfo from 'react-native-device-info';
import { Dimensions, Platform } from 'react-native';
export const isIphoneX = () => {
  const dimension = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimension.height === 780 ||
      dimension.width === 780 ||
      dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 844 ||
      dimension.width === 844 ||
      dimension.height === 896 ||
      dimension.width === 896 ||
      dimension.height === 926 ||
      dimension.width === 926)
  );
};

export const hasNotch = DeviceInfo.hasNotch();
export const isIOS = Platform.OS === 'ios';
export const isAndroid = !isIOS;
export const getReadableVersion = DeviceInfo.getReadableVersion();
export const getBundleId = DeviceInfo.getBundleId();
export const getDeviceModel = DeviceInfo.getModel();

// Theme is supported by system on iOS 13+ or Android 10+
export const supportSystemTheme = (): boolean => {
  const systemVersion = parseInt(DeviceInfo.getSystemVersion(), 10);
  return systemVersion >= (isIOS ? 13 : 10);
};

// Tablet info
export const isTablet = DeviceInfo.isTablet();
