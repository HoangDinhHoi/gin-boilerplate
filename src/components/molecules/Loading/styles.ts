import {StyleSheet} from 'react-native';
import {ratioW, TRobotoStyle} from '../../../utils';

const styles = StyleSheet.create({
  title: {
    ...TRobotoStyle.H1624Regular,
    marginTop: ratioW(8),
  },
  container: {
    backgroundColor: 'transparent',
    height: undefined,
    width: undefined,
  },
  containerFullStretch: {
    flexGrow: 1,
    height: undefined,
    width: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: undefined,
    width: undefined,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'transparent',
    zIndex: 100,
  },
});

export default styles;
