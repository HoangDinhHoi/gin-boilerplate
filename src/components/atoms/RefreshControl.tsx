import React from 'react';
import {
  RefreshControlProps,
  RefreshControl as RNRefreshControl,
} from 'react-native';
import { useTheme } from '../../theme';

const RefreshControl: React.FC<Partial<RefreshControlProps>> = (props) => {
  const { colors } = useTheme();
  return (
    <RNRefreshControl
      {...props}
      refreshing={false}
      tintColor={colors.activeColor}
    />
  );
};

export default React.memo(RefreshControl);
