import React from 'react';
import Text from '../Text/Text';
import { ratioW } from '../../../utils';
import { useTheme } from '../../../theme';
import { IcTick } from '../../../assets/svg';
import type { TButtonAny } from '../../../definitions';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface IItem {
  name: string;
  id: string;
}

export interface IPickerOneItem {
  item: IItem;
  index?: number;
  isCheck?: boolean;
  onPress: TButtonAny<IItem>;
  containerStyle?: ViewStyle;
}

const ItemPickerOne: React.FC<IPickerOneItem> = ({
  item,
  onPress,
  isCheck,
  containerStyle,
}) => {
  const { colors } = useTheme();

  const $item: ViewStyle = {
    ...styles.$item,
    backgroundColor: colors.mainBackground,
    borderBottomColor: colors.separatorBackground,
    ...containerStyle,
  };

  const _onPress = () => onPress?.(item);

  return (
    <TouchableOpacity style={$item} onPress={_onPress} activeOpacity={0.8}>
      <Text numberOfLines={1} ellipsizeMode="middle" style={styles.$itemText}>
        {item.name}
      </Text>
      {isCheck && (
        <IcTick
          width={ratioW(18)}
          height={ratioW(18)}
          color={colors.activeColor}
        />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(ItemPickerOne);

const styles = StyleSheet.create({
  $item: {
    padding: ratioW(16),
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  $itemText: {
    flex: 1,
  },
});
