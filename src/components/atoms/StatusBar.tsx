import React, { memo } from 'react';
import { useTheme } from '../../theme';
import { StatusBar as StatusBarRN } from 'react-native';

const supportedStyles = {
  'light-content': 'light-content',
  'dark-content': 'dark-content',
};

interface IStatusBar {
  barStyle?: keyof typeof supportedStyles;
  backgroundColor?: string;
}

const StatusBar = React.memo(({ barStyle }: IStatusBar) => {
  const { theme } = useTheme();
  if (!barStyle) {
    barStyle = 'light-content';
    if (theme === 'dark') {
      barStyle = 'dark-content';
    }
  }
  return (
    <StatusBarRN
      animated
      translucent={true}
      barStyle={barStyle}
      backgroundColor={'transparent'}
    />
  );
});

export default memo(StatusBar);

StatusBar.displayName = 'StatusBar';
