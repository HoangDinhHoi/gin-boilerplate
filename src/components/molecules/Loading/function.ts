import React from 'react';
import type { ILoadingProps, ILoadingRef } from './types';

export const loadingRef = React.createRef<ILoadingRef>();

export const openLoading = (props?: Partial<ILoadingProps>) => {
  loadingRef.current?.open({
    title: props?.title ?? '',
    mode: props?.mode ?? 'overlay',
    colorSpin: props?.colorSpin ?? '#ffffff',
    colorTitle: props?.colorTitle ?? '#ffffff',
    backgroundColor: props?.backgroundColor ?? 'rgba(0, 0, 0, 0.5)',
  });
};

export const closeLoading = () => {
  loadingRef.current?.close();
};

export default {
  open: openLoading,
  close: closeLoading,
};
