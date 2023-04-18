import { StyleSheet } from 'react-native';
import React from 'react';
import TextInput from './TextInput';
import type { ITextInputProps } from './types';
import { ratioW } from '../../../utils';

const Textarea: React.FC<ITextInputProps> = (props) => {
  return (
    <TextInput
      multiline={true}
      numberOfLines={6}
      blurOnSubmit={false}
      {...props}
      textInputStyles={styles.$input}
    />
  );
};

export default React.memo(Textarea);

const styles = StyleSheet.create({
  $input: {
    flex: 1,
    flexGrow: 1,
    height: ratioW(112),
    textAlignVertical: 'top',
  },
});
