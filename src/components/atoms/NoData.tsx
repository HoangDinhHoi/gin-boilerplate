import React from 'react';
import Text from './Text/Text';
import { FlexView } from '../organism';
import { useTheme } from '../../theme';
import { IcEmpty } from '../../assets/svg';
import { StyleSheet, ViewStyle } from 'react-native';
import { ratioW, screenHeight, TRobotoStyle } from '../../utils';

interface INoData {
  title?: string;
  style?: ViewStyle;
}
const NoData: React.FC<INoData> = ({ title, style }) => {
  const { colors } = useTheme();
  const $txtContent = StyleSheet.flatten([
    styles.txtContent,
    { color: colors.noDataText },
  ]);

  return (
    <FlexView style={[styles.vContainer, style]}>
      <IcEmpty style={styles.positionAbsolute} />
      <Text style={$txtContent}>{title ?? ''}</Text>
    </FlexView>
  );
};

export default NoData;

const styles = StyleSheet.create({
  vContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: screenHeight * 0.3,
  },
  txtContent: {
    textAlign: 'center',
    ...TRobotoStyle.H2028Medium,
    marginTop: ratioW(200),
  },
  positionAbsolute: { position: 'absolute' },
});
