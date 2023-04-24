import {
  TabBar,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import React from 'react';
import { useTheme } from '../../../theme';
import type { IRouteTabView } from './interface';
import { ratioW } from '../../../utils/UDimension';
import type { ColorValue, ViewStyle } from 'react-native';

export type TTabBarRoundedProps = SceneRendererProps & {
  navigationState: NavigationState<IRouteTabView>;
} & {
  activeColor?: ColorValue;
  borderColor?: ColorValue;
  scrollEnabled?: boolean;
  inactiveColor?: ColorValue;
  inactiveColorText?: string;
  style?: ViewStyle;
};

const TabBarRounded: React.FC<TTabBarRoundedProps> = (propsTab) => {
  const { colors } = useTheme();
  const {
    scrollEnabled,
    borderColor,
    inactiveColor,
    inactiveColorText,
    activeColor,
    style,
  } = propsTab;

  const $style: ViewStyle = {
    overflow: 'hidden',
    borderRadius: ratioW(24),
    borderWidth: ratioW(1.5),
    borderColor: borderColor ?? colors.mainBackground,
    backgroundColor: inactiveColor ?? colors.mainBackground,
    ...style,
  };

  const $indicatorStyle: ViewStyle = {
    height: '100%',
    backgroundColor: activeColor ?? colors.primaryColor,
  };

  return (
    <TabBar
      {...propsTab}
      style={$style}
      indicatorStyle={$indicatorStyle}
      activeColor={colors.mainBackground}
      scrollEnabled={scrollEnabled ?? false}
      getLabelText={({ route }) => route.title}
      inactiveColor={inactiveColorText ?? colors.mainBackground}
    />
  );
};

export default React.memo(TabBarRounded);
