import React, { useRef } from 'react';
import {
  View,
  FlatList,
  Animated,
  ViewStyle,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
  NativeScrollEvent,
  TextStyle,
} from 'react-native';
import {
  Text,
  ratioW,
  FlexView,
  useTheme,
  screenWidth,
  keyExtractor,
  IRouterProps,
} from 'react-native-gin-boilerplate';

interface IProps {
  tabWidth?: number;
  style?: ViewStyle;
  initialWidth?: number;
  routes: IRouterProps[];
  tabTitleStyle?: TextStyle;
  renderRoutes: ({
    item,
    index,
  }: {
    item: IRouterProps;
    index: number;
  }) => JSX.Element;
}

const TabView: React.FC<IProps> = ({
  routes,
  tabWidth = screenWidth - ratioW(32),
  initialWidth = screenWidth / 3,
  style,
  tabTitleStyle,
  renderRoutes,
}) => {
  const { colors } = useTheme();
  const mainScrollRef = useRef<FlatList>(null);
  const sideScrollRef = useRef<FlatList>(null);
  const mainXRef = useRef(new Animated.Value(0));

  const translateX = mainXRef.current.interpolate({
    inputRange: [0, tabWidth * (routes.length - 1)],
    outputRange: [0, initialWidth * (routes.length - 1)],
    extrapolate: 'clamp',
  });

  const renderHeaderRoutes: ListRenderItem<IRouterProps> = ({
    item,
    index,
  }) => {
    const onRoutePress = () => {
      mainScrollRef.current?.scrollToIndex({ animated: true, index: index });
    };

    const $tabBar: ViewStyle = {
      ...styles.tabBar,
      width: initialWidth,
    };

    const $animated: Animated.WithAnimatedObject<ViewStyle> = {
      bottom: 0,
      position: 'absolute',
      width: initialWidth,
      height: ratioW(3),
      opacity: index === 0 ? 1 : 0,
      borderRadius: ratioW(10),
      backgroundColor: colors.activeColor,
      transform: [{ translateX: translateX }],
    };

    return (
      <TouchableOpacity
        key={item.key}
        style={$tabBar}
        activeOpacity={0.8}
        onPress={onRoutePress}
      >
        <Text style={tabTitleStyle}>{item.title}</Text>
        <Animated.View style={$animated} />
      </TouchableOpacity>
    );
  };

  const renderMainRoutes: ListRenderItem<IRouterProps> = ({ item, index }) => {
    return (
      <FlexView style={{ width: tabWidth }} key={item.key}>
        {renderRoutes({ item, index })}
      </FlexView>
    );
  };

  const onScroll = Animated.event<NativeScrollEvent>(
    [{ nativeEvent: { contentOffset: { x: mainXRef.current } } }],
    {
      useNativeDriver: true,
      listener: (event) => {
        sideScrollRef.current?.scrollToIndex({
          animated: true,
          index: Math.round(event.nativeEvent.contentOffset.x / tabWidth),
        });
      },
    }
  );

  const $headerStyle: ViewStyle = {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
  };

  return (
    <View style={style}>
      <View>
        <FlatList
          data={routes}
          horizontal={true}
          ref={sideScrollRef}
          keyExtractor={keyExtractor}
          renderItem={renderHeaderRoutes}
          contentContainerStyle={$headerStyle}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Animated.FlatList
        data={routes}
        horizontal={true}
        onScroll={onScroll}
        ref={mainScrollRef}
        pagingEnabled={true}
        keyExtractor={keyExtractor}
        renderItem={renderMainRoutes}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainContent}
      />
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  mainContent: {
    paddingTop: ratioW(16),
  },
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: ratioW(40),
    padding: ratioW(10),
  },
});
