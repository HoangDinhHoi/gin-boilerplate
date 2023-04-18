import React from 'react';
import { colors } from './constants/colors';
import hoistNonReactStatics from 'hoist-non-react-statics';
import type { IThemePreference, TNavigationOptions } from './definitions';

export type TSupportedThemes = keyof typeof colors;
export type TColors = typeof colors[TSupportedThemes];

export interface IThemeContextProps {
  theme: TSupportedThemes;
  themePreferences?: IThemePreference;
  setTheme?: (newTheme?: Record<string, never>) => void;
  colors: TColors;
}

export const ThemeContext = React.createContext<IThemeContextProps>({
  theme: 'light',
  colors: colors.light,
});

export function withTheme<T extends object>(
  Component: React.ComponentType<T> & TNavigationOptions
): typeof Component {
  const ThemedComponent = (props: T) => (
    <ThemeContext.Consumer>
      {(contexts) => <Component {...props} {...contexts} />}
    </ThemeContext.Consumer>
  );

  hoistNonReactStatics(ThemedComponent, Component);
  return ThemedComponent;
}

export const useTheme = (): IThemeContextProps =>
  React.useContext(ThemeContext);
