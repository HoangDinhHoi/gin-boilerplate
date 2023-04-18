import React, { useCallback, useState } from 'react';
import {
  EventArg,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { InteractionManager, StyleSheet } from 'react-native';
import { openAlertModal } from '../components/molecules/Modal/function';
import { IcWarning } from '../assets/svg';
import type { TNavigation } from '../definitions';
import { useTheme } from '../theme';

const useNavBeforeRemove = (forceQuit = false) => {
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
    if (!forceQuit) {
      e.preventDefault();
      openAlertModal({
        title: 'Alert',
        desc: 'Are you sure want to quit?',
        icon: <IcWarning style={styles.icon} />,
        rightButtonTitle: 'Confirm',
        leftButtonTitle: 'Cancel',
        leftButtonType: 'bordered',
        rightButtonType: 'success',
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
    }, [navigation, forceQuit])
  );

  return { isQuit };
};

export default useNavBeforeRemove;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
});
