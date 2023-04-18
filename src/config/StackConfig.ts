import {
  DarkTheme,
  DefaultTheme,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import { StyleSheet, ViewStyle } from 'react-native';
import type { TSupportedThemes } from '../theme';
import { themes } from '../constants/colors';

export const defaultHeader = {
  headerBackTitleVisible: false,
  cardOverlayEnabled: true,
  cardStyle: { backgroundColor: 'transparent' },
};

export const cardStyle = {
  backgroundColor: 'rgba(0,0,0,0)',
};

export const borderBottom = (theme: TSupportedThemes): ViewStyle => ({
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: themes[theme].headerBorder,
  elevation: 0,
});

export const themedHeader = (theme: TSupportedThemes) => ({
  headerStyle: {
    ...borderBottom(theme),
    backgroundColor: themes[theme].headerBackground,
  },
  headerTintColor: themes[theme].headerTintColor,
  headerTitleStyle: { color: themes[theme].headerTitleColor },
});

export const navigationTheme = (theme: TSupportedThemes) => {
  const defaultNavTheme = theme === 'light' ? DefaultTheme : DarkTheme;
  return {
    ...defaultNavTheme,
    colors: {
      ...defaultNavTheme.colors,
      background: themes[theme].backgroundColor,
      border: themes[theme].borderColor,
    },
  };
};

// Gets the current screen from navigation state
export const getActiveRoute = (
  state: NavigationState
):
  | (Readonly<{ key: string; name: string }> &
      Readonly<{
        params?: Readonly<object | undefined>;
      }> & { state?: NavigationState | PartialState<NavigationState> })
  | undefined => {
  const route = state?.routes[state?.index];
  if (route?.state) {
    // Dive into nested navigators
    return getActiveRoute(route.state as NavigationState);
  }

  return route;
};

export const getActiveRouteName = (state: NavigationState) =>
  getActiveRoute(state)?.name;
