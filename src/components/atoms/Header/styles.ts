import { StyleSheet } from 'react-native';
import { ratioW } from '../../../utils/UDimension';

const styles = StyleSheet.create({
  checkLogsBtn: {
    marginRight: ratioW(8),
  },
  cartButton: {
    marginRight: ratioW(8),
  },
  container: {
    paddingBottom: ratioW(8),
    paddingHorizontal: ratioW(20),
  },
  row: {
    alignItems: 'center',
    paddingTop: ratioW(15),
    paddingBottom: ratioW(4),
    justifyContent: 'space-between',
  },
  headerNormal: {
    alignItems: 'center',
    paddingTop: ratioW(15),
    paddingBottom: ratioW(4),
  },
  title: {
    marginHorizontal: ratioW(12),
  },
  avatar: {
    width: ratioW(30),
    height: ratioW(30),
    borderRadius: ratioW(24),
  },
  homeRight: { alignItems: 'center' },
  headerText: {
    lineHeight: 30,
  },
});

export default styles;
