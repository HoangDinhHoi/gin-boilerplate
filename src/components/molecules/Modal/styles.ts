import { StyleSheet } from 'react-native';
import { ratioW, screenHeight } from '../../../utils';

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
  },
  crossbarContainer: {
    borderRadius: ratioW(8),
    marginBottom: ratioW(9),
    alignSelf: 'center',
    width: ratioW(62),
    height: ratioW(6),
  },
  container: {
    bottom: 0,
    width: '100%',
    overflow: 'hidden',
    maxHeight: screenHeight,
    minHeight: screenHeight / 3,
  },
});

export default styles;
