import React from 'react';
import type {
  IAlertModalProps,
  IAlertModalRef,
  IBottomSheetProps,
  IBottomSheetRef,
  IGlobalModalProps,
  IGlobalModalRef,
} from './types';

export const bottomSheetRef = React.createRef<IBottomSheetRef>();
export const alertModalRef = React.createRef<IAlertModalRef>();
export const globalModalRef = React.createRef<IGlobalModalRef>();

export const openBottomSheet = (props: IBottomSheetProps) => {
  bottomSheetRef.current?.open(props);
};

export const closeBottomSheet = () => bottomSheetRef.current?.close();

export const openAlertModal = (props: Partial<IAlertModalProps>) =>
  alertModalRef.current?.open(props);

export const closeAlertModal = () => alertModalRef.current?.close();

export const openGlobalModal = (props: IGlobalModalProps) =>
  globalModalRef.current?.open(props);

export const closeGlobalModal = () => globalModalRef.current?.close();
