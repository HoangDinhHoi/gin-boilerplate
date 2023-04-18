import {
  Animated,
  Modal,
  ModalProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
  InteractionManager,
  StatusBar as RNStatusBar,
} from 'react-native';
import type { IGlobalModalProps, IGlobalModalRef } from './types';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useTheme } from '../../../theme';
import { isAndroid, mAnimated } from '../../../utils';

const GlobalModal = React.forwardRef<
  IGlobalModalRef,
  Partial<IGlobalModalProps>
>((_props, ref) => {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const [content, setContent] = useState<JSX.Element>(<React.Fragment />);
  const [containerStyle, setContainerStyle] = useState<StyleProp<ViewStyle>>(
    {}
  );
  const [modalProps, setModalProps] = useState<Partial<ModalProps>>({});

  useImperativeHandle(
    ref,
    () => ({
      open: (prs) => {
        InteractionManager.runAfterInteractions(() => {
          setContent(prs.content);
          setModalProps(prs.modalProps ?? {});
          setContainerStyle(prs.containerStyle);
          if (isAndroid) {
            RNStatusBar.setBackgroundColor(colors.mainBackground, true);
          }
        }).then(() => {
          setIsVisible(true);
        });
      },
      close: () => {
        InteractionManager.runAfterInteractions(() => {
          setContent(<React.Fragment />);
          setContainerStyle({});
          setModalProps({});
          if (isAndroid) {
            RNStatusBar.setBackgroundColor('transparent', true);
          }
        }).then(() => {
          setIsVisible(false);
        });
      },
    }),
    []
  );

  useEffect(() => {
    if (isVisible) {
      mAnimated.changeAnimated({ toValue: 1, value: scale, duration: 0 });
    } else {
      mAnimated.changeAnimated({ toValue: 0, value: scale, duration: 0 });
    }
  }, [isVisible]);

  const $modal = StyleSheet.flatten([
    styles.wrapper,
    containerStyle,
    { transform: [{ scale: scale }] },
  ]);

  const onCancel = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      style={styles.modal}
      onDismiss={onCancel}
      onRequestClose={onCancel}
      {...modalProps}
    >
      <Animated.View style={$modal}>{content}</Animated.View>
    </Modal>
  );
});

export default GlobalModal;

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
});
