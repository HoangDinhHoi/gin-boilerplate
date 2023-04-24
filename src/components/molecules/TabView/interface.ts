export interface IRouterProps {
  key: string;
  title: string;
}

export interface IRouteTabView {
  key: string;
  icon?: string;
  title?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
