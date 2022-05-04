import {StyleSheet, View} from 'react-native';
import React from 'react';

const RowBetween = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default RowBetween;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
