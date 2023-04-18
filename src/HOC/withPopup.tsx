import React, { ComponentType, useState } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  LayoutChangeEvent,
  StyleSheet,
  GestureResponderEvent,
  InteractionManager,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { ratioW, screenHeight, TRobotoStyle } from '../utils';
import type { TButtonAny, TButtonVoid } from '../definitions';
import { useTheme } from '../theme';
import { IItem, ItemPickerOne, PickerModal, Text } from '../components/atoms';
import { defaultFlatListProps } from '../constants';

export interface IWithPopUpBase {
  data: IItem[];
  values?: IItem[];
  onShow?: TButtonVoid;
  isMultiple?: boolean;
  onClose?: TButtonVoid;
  isLoadMore?: boolean;
  onLoadMore?: TButtonVoid;
  onchange?: TButtonAny<IItem>;
  itemPickerContainerStyle?: ViewStyle;
}

const withPopup = <T extends IWithPopUpBase>(Component: ComponentType<T>) => {
  return (props: T) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
    const [heightOfContent, setHeightOfContent] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const { colors } = useTheme();

    const onShow = () => {
      setIsVisible(!isVisible);
      props?.onShow?.();
    };

    const $popup: StyleProp<ViewStyle> = {
      ...styles.$popUp,
      position: 'absolute',
      backgroundColor: colors.mainBackground,
      top:
        position === 'top'
          ? yPosition - heightOfContent - ratioW(8)
          : yPosition + ratioW(8),
    };

    const onScrollLayout = (e: LayoutChangeEvent) => {
      setHeightOfContent(e.nativeEvent.layout.height);
    };

    const onclose = () => {
      setIsVisible(false);
      props?.onClose?.();
    };

    const onShowMore = () => {
      props?.onLoadMore?.();
    };

    const onTouchStart = (event: GestureResponderEvent) => {
      setYPosition(event.nativeEvent.pageY);
      if (event.nativeEvent.pageY > screenHeight * 0.5) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    };

    const onItemPress = (item: IItem) => {
      InteractionManager.runAfterInteractions(() => {
        props?.onchange?.(item);
      }).then(() => {
        if (!props.isMultiple) {
          setIsVisible(false);
        }
      });
    };

    const renderItem: ListRenderItem<IItem> = ({ item, index }) => {
      const icCheck = props?.values?.some((e) => e.id === item.id) ?? false;
      return (
        <ItemPickerOne
          item={item}
          key={index}
          isCheck={icCheck}
          onPress={onItemPress}
          containerStyle={props.itemPickerContainerStyle}
        />
      );
    };

    function renderFooter() {
      if (props?.isLoadMore) {
        return (
          <TouchableOpacity
            onPress={onShowMore}
            activeOpacity={0.8}
            style={styles.$showMoreBtn}
          >
            <Text style={{ color: colors.primaryColor }}>Show more</Text>
          </TouchableOpacity>
        );
      }
      return <React.Fragment />;
    }

    return (
      <View>
        <View onTouchStart={onTouchStart}>
          <Component {...props} onShow={onShow} isVisible={isVisible} />
        </View>
        <PickerModal isVisible={isVisible} onclose={onclose}>
          <View style={$popup}>
            <FlatList
              bounces={false}
              data={props.data}
              renderItem={renderItem}
              onLayout={onScrollLayout}
              {...defaultFlatListProps}
              showsVerticalScrollIndicator={true}
              ListFooterComponent={renderFooter()}
              contentContainerStyle={styles.$scrollView}
            />
          </View>
        </PickerModal>
      </View>
    );
  };
};

export default withPopup;

const styles = StyleSheet.create({
  $noDataWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  $scrollView: {
    flexGrow: 1,
    overflow: 'hidden',
    borderRadius: ratioW(4),
  },
  $showMoreBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ratioW(12),
    paddingHorizontal: ratioW(16),
  },
  $popUp: {
    width: '100%',
    minHeight: ratioW(40),
    borderRadius: ratioW(4),
    maxHeight: screenHeight * 0.3,
  },
  $noDataText: {
    textAlign: 'center',
    ...TRobotoStyle.H1420Regular,
  },
});
