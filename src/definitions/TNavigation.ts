import type { StackNavigationOptions } from '@react-navigation/stack';
import type {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export declare interface IDefaultScreenProps<T extends keyof ParamListBase> {
  navigation: BottomTabNavigationProp<ParamListBase, T>;
  route: RouteProp<ParamListBase, T>;
}

interface INavigationProps {
  route?: RouteProp<ParamListBase, keyof ParamListBase>;
  navigation?: NavigationProp<ParamListBase, keyof ParamListBase>;
}

export type TNavigationOptions = {
  navigationOptions?(props: INavigationProps): StackNavigationOptions;
};

export type TNavigation = NavigationProp<ParamListBase, keyof ParamListBase>;
