import { StyleSheet } from 'react-native';
import { fontSizeText, ratioW, TRobotoStyle } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    marginTop: ratioW(16),
  },
  label: {
    ...TRobotoStyle.H1420Medium,
  },
  textInputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ratioW(40),
    paddingVertical: ratioW(14),
    paddingHorizontal: ratioW(12),
  },
  errorText: {
    ...TRobotoStyle.H1420Regular,
    marginTop: ratioW(4),
  },
  input: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    fontSize: fontSizeText(16),
  },
  textContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  phoneCountry: {
    maxWidth: ratioW(68),
    flex: 1,
    borderRadius: ratioW(40),
  },
});

export default styles;
