import {StyleSheet, View} from 'react-native';
import React from 'react';

const RowCenter = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default RowCenter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
