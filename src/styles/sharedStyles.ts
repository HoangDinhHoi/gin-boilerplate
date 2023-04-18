import {StyleSheet} from 'react-native';
import {ratioW, TRobotoStyle} from '../utils';

const sharedStyles = StyleSheet.create({
  shadowTab: {
    shadowOffset: {height: 10, width: 10},
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.6,
    shadowRadius: ratioW(20),
    elevation: 5,
  },
  shadow: {
    shadowOffset: {height: 7, width: 0},
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.5,
    shadowRadius: ratioW(4),
    elevation: 5,
  },
  headerVCardBlack: {
    flexDirection: 'row',
    backgroundColor: '#0B0B0B',
    paddingVertical: ratioW(22),
    paddingHorizontal: ratioW(24),
    borderTopStartRadius: ratioW(24),
    borderTopEndRadius: ratioW(24),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...TRobotoStyle.H2028Medium,
    textAlign: 'center',
    marginBottom: ratioW(16),
  },
  subTitle: {
    ...TRobotoStyle.H1624Regular,
    textAlign: 'center',
    marginBottom: ratioW(16),
  },
  bottomListType: {
    paddingTop: 0,
    paddingHorizontal: 0,
    minHeight: ratioW(228),
  },
  shadowPicker: {
    shadowOffset: {height: 7, width: 7},
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.8,
    shadowRadius: ratioW(10),
    elevation: 5,
  },
});

export default sharedStyles;
