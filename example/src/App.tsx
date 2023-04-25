import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-gin-boilerplate';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={'Hoi Hoang Dinh'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
