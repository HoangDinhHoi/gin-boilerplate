import styles from './styles';
import { Text } from '../../atoms';
import { useTheme } from '../../../theme';
import type { ILoadingProps, ILoadingRef, TMode } from './types';
import React, { useImperativeHandle, useState } from 'react';
import { ActivityIndicator, ColorValue, View } from 'react-native';

const Loading = React.forwardRef<ILoadingRef, Partial<ILoadingProps>>(
  (props, ref) => {
    const { colors } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [md, setMd] = useState<TMode>(props?.mode ?? 'overlay');
    const [bgColor, setBgColor] = useState<ColorValue>(
      props?.backgroundColor ?? 'rgba(0, 0, 0, 0.5)'
    );
    const [cSpin, setCSpin] = useState(props.colorSpin);
    const [cTitle, setCTitle] = useState(props.colorTitle);
    const [t, setT] = useState(props.title);

    useImperativeHandle(
      ref,
      () => ({
        open: (prs) => {
          const { title, mode, colorSpin, colorTitle, backgroundColor } = prs;
          setT(title);
          setMd(mode);
          setCSpin(colorSpin);
          setCTitle(colorTitle);
          setBgColor(backgroundColor);
          setIsVisible(true);
        },
        close: () => {
          setMd('overlay');
          setT('');
          setCSpin(colors.primaryColor);
          setCTitle(colors.primaryColor);
          setBgColor('rgba(0, 0, 0, 0.5)');
          setIsVisible(false);
        },
      }),
      []
    );

    let containerStyle = styles.container;
    switch (md) {
      case 'full':
        containerStyle = styles.containerFullStretch;
        break;
      case 'small':
        containerStyle = styles.containerFullStretch;
        break;
      case 'overlay':
        containerStyle = styles.containerOverlay;
        break;
    }

    if (!isVisible) {
      return <React.Fragment />;
    }

    return (
      <View style={[containerStyle, { backgroundColor: bgColor }]}>
        <ActivityIndicator
          color={cSpin}
          style={[styles.wrapper]}
          size={md === 'small' ? 'small' : 'large'}
        />
        {!!t && <Text style={[styles.title, { color: cTitle }]}>{t}</Text>}
      </View>
    );
  }
);

export default Loading;
