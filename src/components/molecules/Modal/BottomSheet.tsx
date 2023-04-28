import React from 'react';
import ReactNativeModal, { ModalProps } from 'react-native-modal';
import styles from './styles';
import type { IBottomSheetProps, IBottomSheetRef } from './types';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme';
import StatusBar from '../../atoms/StatusBar';

const BottomSheet = React.forwardRef<
  IBottomSheetRef,
  Partial<IBottomSheetProps>
>((_, ref) => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [contentModal, setContentModal] = React.useState<JSX.Element | null>(
    null
  );
  const [containerStyles, setContainerStyles] = React.useState<
    ViewStyle | undefined
  >({});
  const [modalProps, setModalProps] = React.useState<ModalProps | null>(null);
  const [isShowCrossBar, setIsShowCrossBar] = React.useState(false);

  const onCloseModal = () => setIsVisible(false);

  React.useImperativeHandle(
    ref,
    () => ({
      open: (props) => {
        setIsVisible(true);
        setContainerStyles(props?.containerStyles);
        setContentModal(props?.element);
        props.modalProps && setModalProps(props?.modalProps as ModalProps);
        setIsShowCrossBar(props?.isShowCrossBar ?? false);
      },
      close: () => {
        setIsVisible(false);
        setContainerStyles({});
        setContentModal(null);
        setModalProps(null);
      },
    }),
    []
  );

  return (
    <ReactNativeModal
      style={styles.modal}
      isVisible={isVisible}
      onDismiss={onCloseModal}
      onBackdropPress={onCloseModal}
      backdropTransitionOutTiming={1}
      onBackButtonPress={onCloseModal}
      {...modalProps}
    >
      <StatusBar />
      {isShowCrossBar && <View style={styles.crossbarContainer} />}
      <SafeAreaView style={[styles.container, containerStyles]}>
        {contentModal !== null ? (
          contentModal
        ) : (
          <ActivityIndicator color={colors.primaryColor} size="small" />
        )}
      </SafeAreaView>
    </ReactNativeModal>
  );
});

export default BottomSheet;
