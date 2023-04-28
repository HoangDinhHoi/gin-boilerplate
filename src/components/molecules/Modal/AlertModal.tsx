import React, { useImperativeHandle, useState } from 'react';
import ReactNativeModal, { ModalProps } from 'react-native-modal';
import {
  Animated,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type {
  IAlertModalButtons,
  IAlertModalProps,
  IAlertModalRef,
} from './types';
import type { IButtonProps, TButton } from '../../atoms';
import { mAnimated, ratioW, TRobotoStyle } from '../../../utils';
import { Button, Separator, Text } from '../../atoms';
import { RowContainer, ViewCondition } from '../../organism';
import StatusBar from '../../atoms/StatusBar';

const AlertModal = React.forwardRef<IAlertModalRef, Partial<IAlertModalProps>>(
  (_, ref) => {
    const [desc, setDesc] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);
    const [leftButtonTitle, setLeftButtonTitle] = useState<string>('');
    const [icon, setIcon] = useState<JSX.Element | null>(null);
    const [rightButtonTitle, setRightButtonTitle] = useState<string>('');
    const [buttons, setButtons] = useState<Partial<IAlertModalButtons>>({});
    const [leftButtonStyle, setLeftButtonStyle] = useState<
      StyleProp<ViewStyle>
    >({});
    const [titleStyle, setTitleStyle] = useState<StyleProp<TextStyle>>({});
    const [descStyle, setDescStyle] = useState<StyleProp<TextStyle>>({});
    const [rightButtonStyle, setRightButtonStyle] = useState<
      StyleProp<ViewStyle>
    >({});
    const [containerStyle, setContainerStyle] = useState<StyleProp<ViewStyle>>(
      {}
    );
    const [leftButtonType, setLeftButtonType] = useState<TButton>('success');
    const [rightButtonType, setRightButtonType] = useState<TButton>('bordered');
    const [leftButtonProps, setLeftButtonProps] = useState<
      Partial<IButtonProps>
    >({});
    const [rightButtonProps, setRightButtonProps] = useState<
      Partial<IButtonProps>
    >({});
    const [modalProps, setModalProps] = React.useState<ModalProps | null>(null);

    const scale = React.useRef(new Animated.Value(0)).current;

    const changeAnimated = (value: number) => {
      mAnimated.changeAnimated({
        value: scale,
        toValue: value,
        duration: 100,
      });
    };

    React.useEffect(() => {
      if (isVisible) {
        changeAnimated(1);
      } else {
        changeAnimated(0);
      }
    }, [isVisible]);

    useImperativeHandle(
      ref,
      () => ({
        open: (props) => {
          setDesc(props.desc ?? '');
          setTitle(props.title ?? '');
          setIcon(props.icon ?? null);
          setButtons(props.buttons ?? {});
          setLeftButtonTitle(props.leftButtonTitle ?? '');
          setRightButtonTitle(props.rightButtonTitle ?? '');
          setLeftButtonStyle(props.leftButtonStyle);
          setRightButtonStyle(props.rightButtonStyle);
          setContainerStyle(props.containerStyle);
          setLeftButtonType(props.leftButtonType ?? 'success');
          setRightButtonType(props.rightButtonType ?? 'bordered');
          setLeftButtonProps(props.leftButtonProps ?? {});
          setRightButtonProps(props.rightButtonProps ?? {});
          props.modalProps && setModalProps(props?.modalProps as ModalProps);
          setTitleStyle(props.titleStyle ?? {});
          setDescStyle(props.descStyle ?? {});
          setIsVisible(true);
        },
        close: () => {
          setDesc('');
          setTitle('');
          setIcon(null);
          setLeftButtonTitle('');
          setRightButtonTitle('');
          setLeftButtonStyle({});
          setRightButtonStyle({});
          setContainerStyle({});
          setLeftButtonType('success');
          setRightButtonType('bordered');
          setLeftButtonProps({});
          setRightButtonProps({});
          setModalProps(null);
          setTitleStyle({});
          setDescStyle({});
          setIsVisible(false);
        },
      }),
      []
    );

    const onDefaultAction = () => {
      setIsVisible(false);
    };

    const onActive = () => {
      onDefaultAction();
      buttons?.onLeftAction?.();
    };

    const onDeactivate = () => {
      onDefaultAction();
      buttons?.onRightAction?.();
    };

    const renderTitle = () => {
      if (title?.length > 0) {
        return (
          <>
            {icon && <Separator height={ratioW(21)} />}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </>
        );
      }
      return <React.Fragment />;
    };

    return (
      <ReactNativeModal
        isVisible={isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropOpacity={0.5}
        {...modalProps}
      >
        <StatusBar />
        <Animated.View
          style={[styles.content, containerStyle, { transform: [{ scale }] }]}
        >
          {icon}
          {renderTitle()}
          <ViewCondition isVisible={!!desc}>
            <Text style={[styles.description, descStyle]}>{desc}</Text>
            <Separator height={ratioW(16)} />
          </ViewCondition>
          <RowContainer>
            {!!leftButtonTitle && (
              <Button
                style={[styles.btn, leftButtonStyle]}
                title={leftButtonTitle}
                buttonType={leftButtonType}
                onPress={onActive}
                {...leftButtonProps}
              />
            )}
            {!!leftButtonTitle && !!rightButtonTitle && (
              <Separator width={ratioW(12)} />
            )}
            {!!rightButtonTitle && (
              <Button
                style={[styles.btn, rightButtonStyle]}
                title={rightButtonTitle}
                buttonType={rightButtonType}
                onPress={onDeactivate}
                {...rightButtonProps}
              />
            )}
          </RowContainer>
        </Animated.View>
      </ReactNativeModal>
    );
  }
);

export default AlertModal;

const styles = StyleSheet.create({
  icon: { alignSelf: 'center' },
  btn: {
    width: undefined,
    flexGrow: 1,
    paddingVertical: ratioW(10),
  },
  content: {
    width: '100%',
    minHeight: ratioW(100),
    backgroundColor: 'white',
    borderRadius: ratioW(8),
    paddingVertical: ratioW(29),
    paddingHorizontal: ratioW(24),
    justifyContent: 'space-between',
  },
  title: {
    ...TRobotoStyle.H2028Medium,
    textAlign: 'center',
    marginBottom: ratioW(16),
  },
  description: {
    ...TRobotoStyle.H1624Regular,
    textAlign: 'center',
  },
});
