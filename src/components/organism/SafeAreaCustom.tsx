import React from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import type { ViewStyle } from 'react-native';
import { useTheme } from 'react-native-gin-boilerplate';

interface IProps {
  children: JSX.Element;
}

const SafeAreaCustom: React.FC<IProps> = ({ children }) => {
  const { colors } = useTheme();
  const $container: ViewStyle = {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  };
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView edges={['bottom']} style={$container}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeAreaCustom;
