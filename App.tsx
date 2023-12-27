import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomIcon from './src/components/CustomIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomIcon name="like" size={25} />
      <Text>coffe shop app welcome's</Text>
      <CustomIcon name="search" size={25} />
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
