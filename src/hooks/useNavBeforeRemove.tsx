import React, { useCallback, useState } from 'react';
import {
  EventArg,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { InteractionManager, StyleSheet } from 'react-native';
import { openAlertModal } from '../components/molecules/Modal/function';
import type { IAlertModalProps } from '../components/molecules/Modal/types';
import { IcWarning } from '../assets/svg';
import type { TNavigation } from '../definitions';
import { useTheme } from '../theme';

interface IUseNavBeforeRemove extends IAlertModalProps {
  forceQuit?: boolean;
}
const useNavBeforeRemove = (props: IUseNavBeforeRemove) => {
  const [isQuit, setIsQuit] = useState(false);
  const navigation = useNavigation<TNavigation>();
  const { colors } = useTheme();

  const onCancel = () => setIsQuit(false);

  const onConfirmBeforeQuit = (
    e: EventArg<
      'beforeRemove',
      true,
      {
        action: Readonly<{
          type: string;
          payload?: object;
          source?: string;
          target?: string;
        }>;
      }
    >
  ) => {
    if (!props?.forceQuit) {
      e.preventDefault();
      openAlertModal({
        leftButtonType: 'bordered',
        rightButtonType: 'success',
        ...props,
        icon: <IcWarning style={styles.icon} />,
        leftButtonProps: {
          mainColor: colors.dangerColor,
        },
        rightButtonProps: {
          mainColor: colors.dangerColor,
        },
        buttons: {
          onLeftAction: onCancel,
          onRightAction: () => {
            InteractionManager.runAfterInteractions(() => setIsQuit(true)).then(
              () => {
                navigation.dispatch(e.data.action);
              }
            );
          },
        },
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      navigation.addListener('beforeRemove', onConfirmBeforeQuit);
      return () =>
        navigation.removeListener('beforeRemove', onConfirmBeforeQuit);
    }, [navigation, props?.forceQuit])
  );

  return { isQuit };
};

export default useNavBeforeRemove;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
});
