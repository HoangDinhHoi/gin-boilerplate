import styles from './styles';
import Text from '../Text/Text';
import React, { ReactElement } from 'react';
import {
  View,
  ViewStyle,
  TextStyle,
  ColorValue,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../../theme';
import { RowContainer } from '../../organism';
import { IcArrowLeft } from '../../../assets/svg';
import { ratioW } from '../../../utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface IHeaderProps {
  title: string;
  onGoBack?(): void;
  isShowBack?: boolean;
  titleStyle?: TextStyle;
  iconRight?: ReactElement;
  backIconColor?: ColorValue;
  containerStyle?: ViewStyle;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const {
    title,
    onGoBack,
    iconRight,
    titleStyle,
    backIconColor,
    containerStyle,
    isShowBack = true,
  } = props;
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();
  const DEFAULT_CONFIG = {
    width: ratioW(20),
    height: ratioW(20),
    color: colors.headerTintColor,
  };

  const sContainer: ViewStyle = {
    paddingTop: top,
    ...styles.container,
    backgroundColor: colors.headerBackground,
    ...containerStyle,
  };

  const $title: TextStyle = {
    ...styles.title,
    color: colors.headerTitleColor,
    textAlign: isShowBack ? 'left' : 'center',
    flex: 1,
  };

  const renderRight = () => {
    return <RowContainer>{iconRight}</RowContainer>;
  };

  return (
    <View style={sContainer}>
      <RowContainer style={styles.headerNormal}>
        {(isShowBack && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onGoBack}
          >
            <IcArrowLeft color={backIconColor} />
          </TouchableOpacity>
        )) || <View style={DEFAULT_CONFIG} />}
        <Text style={[$title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
        {(iconRight && renderRight()) || <View style={DEFAULT_CONFIG} />}
      </RowContainer>
    </View>
  );
};

export default React.memo(Header);
