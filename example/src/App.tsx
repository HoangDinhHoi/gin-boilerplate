import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Button, multiply } from 'react-native-gin-boilerplate';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 19).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Button title={'Dong Pham Hoang'} />
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
