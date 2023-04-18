import React from 'react';
import {StyleSheet} from 'react-native';
import {FlexView} from '../organism';
import {IcEmpty} from '../../assets/svg';

const EmptyComponent: React.FC = () => {
  return (
    <FlexView style={styles.emptyWrapper}>
      <IcEmpty />
    </FlexView>
  );
};

export default React.memo(EmptyComponent);

const styles = StyleSheet.create({
  emptyWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
