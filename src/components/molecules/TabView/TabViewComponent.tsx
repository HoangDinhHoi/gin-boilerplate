import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import {
  TabBar,
  TabView,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import Text from '../../atoms/Text/Text';
import { useTheme } from '../../../theme';
import { ratioW } from '../../../utils/UDimension';
import type { IRouterProps, IRouteTabView } from './interface';
import type { Scene } from 'react-native-tab-view/lib/typescript/src/types';

export type SceneProps = {
  route: IRouterProps;
} & SceneRendererProps;

interface ITabViewComponentProps {
  renderScene: ({ route, jumpTo, position }: SceneProps) => JSX.Element;
  routes: IRouterProps[];
  tabStyle?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  styleIndicator?: StyleProp<ViewStyle>;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
  styleTabView?: StyleProp<ViewStyle>;
  initialLayoutW?: number;
  index: number;
  onChangeIndex: (index: number) => void;
  swipeEnabled?: boolean;
  styleTabBar?: StyleProp<ViewStyle>;
  scrollEnable?: boolean;
  sceneStyle?: StyleProp<ViewStyle>;
  renderTabBar?: (
    props: SceneRendererProps & {
      navigationState: NavigationState<IRouteTabView>;
    }
  ) => React.ReactNode;
}

const TabViewComponent: React.FC<ITabViewComponentProps> = (props) => {
  const {
    index,
    routes,
    tabStyle,
    styleTitle,
    renderScene,
    styleTabBar,
    swipeEnabled,
    styleTabView,
    onChangeIndex,
    initialLayoutW,
    styleIndicator,
    indicatorContainerStyle,
    scrollEnable,
    sceneStyle,
  } = props;
  const { colors } = useTheme();
  const layout = useWindowDimensions();

  const sTabBar = StyleSheet.flatten([
    styles.tabBar,
    { backgroundColor: colors.backgroundColor },
    styleTabBar,
  ]);

  const sIndicator = StyleSheet.flatten([
    styles.indicatorTab,
    { backgroundColor: colors.primaryColor },
    styleIndicator,
  ]);

  const renderLabel = ({
    route,
    color,
  }: Scene<IRouteTabView> & {
    focused: boolean;
    color: string;
  }) => {
    return (
      <Text style={[styles.labelStyle, { color }, styleTitle]}>
        {route?.title}
      </Text>
    );
  };

  const renderTabBar = (
    propsTab: SceneRendererProps & {
      navigationState: NavigationState<IRouteTabView>;
    }
  ) => {
    return (
      <TabBar
        {...propsTab}
        style={sTabBar}
        renderLabel={renderLabel}
        indicatorStyle={sIndicator}
        activeColor={colors.primaryColor}
        inactiveColor={colors.inactiveColor}
        scrollEnabled={scrollEnable ?? true}
        tabStyle={[styles.tabStyle, tabStyle]}
        getLabelText={({ route }) => route.title}
        indicatorContainerStyle={indicatorContainerStyle}
      />
    );
  };
  return (
    <TabView
      style={styleTabView}
      renderScene={renderScene}
      onIndexChange={onChangeIndex}
      navigationState={{ index, routes }}
      swipeEnabled={swipeEnabled ?? true}
      renderTabBar={props?.renderTabBar ?? renderTabBar}
      sceneContainerStyle={[styles.sceneStyle, sceneStyle]}
      initialLayout={{ width: initialLayoutW ?? layout.width }}
    />
  );
};

export default TabViewComponent;

const styles = StyleSheet.create({
  sceneStyle: {
    marginVertical: ratioW(12),
    flex: 1,
  },
  tabBar: {
    elevation: 0,
  },
  indicatorTab: {
    height: ratioW(3),
    alignSelf: 'center',
  },
  tabStyle: {
    padding: 0,
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  labelStyle: {
    letterSpacing: 0.1,
    textAlign: 'center',
  },
});
