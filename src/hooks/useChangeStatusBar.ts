import { useEffect } from 'react';
import { StatusBar as RNStatusBar, StatusBarStyle } from 'react-native';

const useChangeStatusBar = (style: StatusBarStyle, animated?: boolean) => {
  useEffect(() => {
    RNStatusBar.setBarStyle(style, animated ?? true);
  }, []);
};

export default useChangeStatusBar;
