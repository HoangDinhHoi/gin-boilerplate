import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar as RNStatusBar, StatusBarStyle } from 'react-native';

const useChangeStatusBar = (style: StatusBarStyle, animated?: boolean) => {
  useFocusEffect(
    useCallback(() => {
      RNStatusBar.setBarStyle(style, animated ?? true);
    }, [])
  );
};

export default useChangeStatusBar;
